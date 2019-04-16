import * as React from 'react';
import { Card } from '@uifabric/react-cards';
import {
  Stack,
  Label,
  IconButton,
  PrimaryButton,
  Panel,
  PanelType,
  Pivot,
  PivotItem
} from '../../../../packages/office-ui-fabric-react/lib/index';
import { IThemeRules, ThemeGenerator } from 'office-ui-fabric-react/lib/ThemeGenerator';
import { mergeStyles } from '@uifabric/merge-styles';
import { CodepenComponent } from '@uifabric/example-app-base';

export interface IHeaderProps {
  themeRules: IThemeRules | undefined;
}

export interface IHeaderState {
  showPanel: boolean;
}

const outputPanelClassName = mergeStyles({
  display: 'flex'
});

const textAreaClassName = mergeStyles({
  height: 350,
  width: 280,
  marginRight: 28,
  backgroundColor: 'white',
  color: '#333'
});

const codeHeader = "import { loadTheme } from 'office-ui-fabric-react';\n\n";
const codepenHeader = 'const { loadTheme, DefaultButton, PrimaryButton, Toggle, TooltipHost } = Fabric;\n\n';
const codepenSamples =
  '\n\nclass Content extends React.Component {\n  public render() {\n    return (<div>' +
  '<DefaultButton text="DefaultButton"/><PrimaryButton text="PrimaryButton"/>' +
  '<Toggle label="Enabled"/><Toggle label="Disabled" disabled={true}/>' +
  '</div>);\n  }\n}\n' +
  "ReactDOM.render(<Content />,document.getElementById('content'));";

let jsonTheme: string;
let powershellTheme: string;
let themeAsCode: any;

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showPanel: false
    };
  }

  public render(): JSX.Element {
    return (
      <Card styles={{ root: { width: '1200px', height: '25px' } }}>
        <Stack horizontal gap={800}>
          <Stack horizontal>
            <IconButton
              disabled={false}
              checked={false}
              iconProps={{ iconName: 'WindowsLogo', styles: { root: { fontSize: '20px' } } }}
              ariaLabel="Microsoft UI Fabric | Theming Designer"
            />
            <Label>Microsoft UI Fabric | Theming Designer</Label>
          </Stack>
          <Stack horizontal>
            <IconButton
              data-automation-id="test"
              disabled={false}
              checked={false}
              iconProps={{ iconName: 'Export', styles: { root: { fontSize: '20px' } } }}
              ariaLabel="Export to JSON/Code/PowerShell"
              onClick={this.showPanel}
              allowDisabledFocus={true}
            />
            <Label>Export theme</Label>
            <Panel
              isOpen={this.state.showPanel}
              type={PanelType.smallFixedFar}
              onDismiss={this.hidePanel}
              headerText="Export theme"
              closeButtonAriaLabel="Close"
              onRenderFooterContent={this.onRenderFooterContent}
            >
              <span>
                <p>
                  This code block initializes the theme you have configured above and loads it using the loadTheme utility function. Calling
                  loadTheme will automatically apply the configured theming to any Fabric controls used within the same app. You can also
                  export this example to CodePen with a few component examples below.
                </p>
              </span>
              <div className={outputPanelClassName}>
                <Pivot>
                  <PivotItem headerText="Code">
                    <textarea className={textAreaClassName} readOnly={true} spellCheck={false} value={codeHeader + themeAsCode} />
                  </PivotItem>
                  <PivotItem headerText="JSON">
                    <textarea className={textAreaClassName} readOnly={true} spellCheck={false} value={jsonTheme} />
                  </PivotItem>
                  <PivotItem headerText="PowerShell">
                    <textarea className={textAreaClassName} readOnly={true} spellCheck={false} value={powershellTheme} />
                  </PivotItem>
                </Pivot>
              </div>
            </Panel>
          </Stack>
        </Stack>
      </Card>
    );
  }

  private exportToJson = () => {
    const themeRules = this.props.themeRules!;

    // strip out the unnecessary shade slots from the final output theme
    const abridgedTheme: IThemeRules = {};
    for (const ruleName in themeRules) {
      if (themeRules.hasOwnProperty(ruleName)) {
        if (
          ruleName.indexOf('ColorShade') === -1 &&
          ruleName !== 'primaryColor' &&
          ruleName !== 'backgroundColor' &&
          ruleName !== 'foregroundColor' &&
          ruleName.indexOf('body') === -1
        ) {
          abridgedTheme[ruleName] = themeRules[ruleName];
        }
      }
    }

    jsonTheme = JSON.stringify(ThemeGenerator.getThemeAsJson(abridgedTheme), void 0, 2);
    powershellTheme = ThemeGenerator.getThemeForPowerShell(abridgedTheme);
    themeAsCode = ThemeGenerator.getThemeAsCode(abridgedTheme);
  };

  private onRenderFooterContent = () => {
    return (
      <div>
        <CodepenComponent jsContent={codepenHeader + themeAsCode + codepenSamples} buttonAs={PrimaryButton} />
      </div>
    );
  };

  private showPanel = () => {
    this.setState({ showPanel: true });
    this.exportToJson();
  };

  private hidePanel = () => {
    this.setState({ showPanel: false });
  };
}
