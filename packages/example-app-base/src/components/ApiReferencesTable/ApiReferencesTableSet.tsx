import * as React from 'react';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import { ApiReferencesTable, MEDIUM_GAP_SIZE, LARGE_GAP_SIZE } from './ApiReferencesTable';
import {
  IApiProperty,
  IApiInterfaceProperty,
  IApiEnumProperty,
  IMethod,
  IApiReferencesTableSetProps,
  IEnumTableRowJson,
  ITableRowJson,
  ITableJson
} from './ApiReferencesTableSet.types';
import { PropertyType } from '../../utilities/parser/index';

export interface IApiReferencesTableSetState {
  properties: Array<IApiProperty>;
  showSeeMore: boolean;
}

const apiReferencesTableTopMargin = mergeStyles({
  marginTop: '40px'
});

export class ApiReferencesTableSet extends React.Component<IApiReferencesTableSetProps, IApiReferencesTableSetState> {
  constructor(props: IApiReferencesTableSetProps) {
    super(props);

    this.state = {
      properties: this._generatePropertyArray(),
      showSeeMore: false
    };
  }

  public render(): JSX.Element {
    const { className } = this.props;
    return (
      <Stack gap={LARGE_GAP_SIZE} className={css(apiReferencesTableTopMargin, className)}>
        {this._renderFirst()}
        {this._renderEach()}
      </Stack>
    );
  }

  public componentDidMount(): void {
    window.addEventListener('hashchange', this._onHashChange);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('hashchange', this._onHashChange);
  }

  public componentDidUpdate(prevProps: IApiReferencesTableSetProps, prevState: IApiReferencesTableSetState): void {
    if (prevState.showSeeMore === false && this.state.showSeeMore === true) {
      const hash = this._extractAnchorLink(window.location.hash);
      const el = document.getElementById(hash);

      if (el) {
        // update scroll position
        window.scrollTo({ top: el.offsetTop - 31.5 /* title */, behavior: 'smooth' });
      }
    }
  }

  private _renderFirst(): JSX.Element | undefined {
    if (this.state.properties.length >= 1) {
      const item = this.state.properties[0];
      return this._renderReferencesTable(item);
    }
    return undefined;
  }

  private _renderEach(): JSX.Element | undefined {
    if (this.state.properties.length > 1) {
      return (
        <Stack gap={MEDIUM_GAP_SIZE}>
          <ActionButton
            iconProps={{ iconName: this.state.showSeeMore ? 'SkypeCircleMinus' : 'CirclePlus' }}
            onClick={this._onClickSeeMore}
            onRenderText={this._onRenderText}
            styles={{ root: { paddingLeft: '0px' }, textContainer: { paddingLeft: '4px' } }}
          >
            See More
          </ActionButton>
          {this.state.showSeeMore && (
            <Stack gap={LARGE_GAP_SIZE}>
              {this.state.properties.map((item: IApiProperty, index: number) =>
                index !== 0 ? this._renderReferencesTable(item) : undefined
              )}
            </Stack>
          )}
        </Stack>
      );
    }
    return undefined;
  }

  private _renderReferencesTable(item: IApiProperty): JSX.Element {
    return (
      <ApiReferencesTable
        key={item.propertyName}
        name={item.propertyName}
        title={item.title}
        description={item.description}
        extendsTokens={item.extendsTokens}
        properties={item.property}
        methods={item.methods}
        renderAsEnum={item.propertyType === PropertyType.enum}
        renderAsClass={item.propertyType === PropertyType.class}
      />
    );
  }

  private _onHashChange = (): void => {
    const { properties, showSeeMore } = this.state;

    const hash = this._extractAnchorLink(window.location.hash);
    const el = document.getElementById(hash);

    if (el) {
      // update scroll position
      window.scrollTo({ top: el.offsetTop - 31.5 /* title */, behavior: 'smooth' });
    }

    if (!showSeeMore) {
      const section = properties.filter(x => x.propertyName === hash)[0];
      if (section) {
        this.setState({
          showSeeMore: true
        });
      }
    }
  };

  private _extractAnchorLink = (path: string): string => {
    const split = path.split('#');
    const cleanedSplit = split.filter(value => !!value);
    return cleanedSplit[cleanedSplit.length - 1];
  };

  private _onRenderText(): JSX.Element {
    return <Text variant="xLarge">See more</Text>;
  }

  private _onClickSeeMore = (): void => {
    this.setState({
      showSeeMore: !this.state.showSeeMore
    });
  };

  private _generatePropertyArray(): Array<IApiProperty> {
    let results: Array<IApiProperty> = [];
    const iComponentProps: Array<IApiProperty> = [];
    const preResults: Array<IApiProperty> = [];

    const { jsonDocs } = this.props;

    if (jsonDocs) {
      const propsName: string = `I${jsonDocs.name}Props`;
      for (let j = 0; j < jsonDocs.tables.length; j++) {
        switch (jsonDocs.tables[j].kind) {
          case 'enum': {
            preResults.push(this._generateEnumProperty(jsonDocs.tables[j]));
            break;
          }
          case 'interface': {
            const interfaceProperty = this._generateInterfaceProperty(jsonDocs.tables[j]);

            // to ensure that I{componentName}Props comes first
            if (propsName === jsonDocs.tables[j].name) {
              iComponentProps.push(interfaceProperty);
            } else {
              preResults.push(interfaceProperty);
            }

            break;
          }
          case 'class': {
            preResults.push(this._generateClassProperty(jsonDocs.tables[j]));
            break;
          }
        }
      }
    }

    results = iComponentProps;
    for (const result of preResults) {
      results.push(result);
    }

    return results;
  }

  private _generateEnumProperty(table: ITableJson): IApiProperty {
    const enumMembers: IApiEnumProperty[] = [];

    const members: IEnumTableRowJson[] = table.members as IEnumTableRowJson[];
    for (let k = 0; k < members.length; k++) {
      // each member within the enum
      enumMembers.push({
        description: members[k].descriptionHtml,
        name: members[k].name,
        value: members[k].value
      });
    }

    // the enum
    return {
      propertyName: table.name,
      description: table.descriptionHtml,
      title: table.kind ? table.name + ' ' + table.kind : table.name,
      propertyType: PropertyType.enum,
      property: enumMembers
    };
  }

  private _generateInterfaceProperty(table: ITableJson): IApiProperty {
    const interfaceMembers: IApiInterfaceProperty[] = [];

    const members: ITableRowJson[] = table.members as ITableRowJson[];
    for (let k = 0; k < members.length; k++) {
      // each member within the interface
      interfaceMembers.push({
        description: members[k].descriptionHtml,
        name: members[k].name,
        typeTokens: members[k].typeTokens,
        deprecated: members[k].deprecated,
        defaultValue: members[k].defaultValue || ''
      });
    }

    // the interface
    return {
      propertyName: table.name,
      description: table.descriptionHtml,
      extendsTokens: table.extendsTokens,
      title: table.kind ? table.name + ' ' + table.kind : table.name,
      propertyType: PropertyType.interface,
      property: interfaceMembers
    };
  }

  private _generateClassProperty(table: ITableJson): IApiProperty {
    // class members are a mix of IApiInterfaceProperty and IMethod
    const classMembers: IApiInterfaceProperty[] = [];
    const classMethods: IMethod[] = [];

    const members: ITableRowJson[] = table.members as ITableRowJson[];
    for (let k = 0; k < members.length; k++) {
      if (members[k].kind === 'Method') {
        classMethods.push({
          description: members[k].descriptionHtml,
          name: members[k].name,
          typeTokens: members[k].typeTokens
        });
      } else {
        classMembers.push({
          description: members[k].descriptionHtml,
          name: members[k].name,
          typeTokens: members[k].typeTokens,
          deprecated: members[k].deprecated,
          defaultValue: members[k].defaultValue || ''
        });
      }
    }

    // the class
    return {
      propertyName: table.name,
      description: table.descriptionHtml,
      extendsTokens: table.extendsTokens,
      title: table.kind ? table.name + ' ' + table.kind : table.name,
      propertyType: PropertyType.class,
      property: classMembers,
      methods: classMethods
    };
  }
}
