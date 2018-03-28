/* tslint:disable */
import * as React from 'react';
/* tslint:enable */

import { BaseComponent } from '../../Utilities';
import { IActivityItemProps, IActivityItemStyles } from './ActivityItem.types';
import { IActivityItemClassNames, getClassNames } from './ActivityItem.classNames';
import { getStyles } from './ActivityItem.styles';
import { PersonaSize, PersonaCoin, IPersonaSharedProps } from '../../Persona';

export class ActivityItem extends BaseComponent<IActivityItemProps, {}> {
  constructor(props: IActivityItemProps) {
    super(props);
  }

  public render() {
    const {
      onRenderIcon = this._onRenderIcon,
      onRenderActivityDescription = this._onRenderActivityDescription,
      onRenderComments = this._onRenderComments,
      onRenderTimeStamp = this._onRenderTimeStamp,
      styles: customStyles
    } = this.props;

    const classNames = this._getClassNames(this.props);

    return (
      <div className={ classNames.root } style={ this.props.style } >

        { (this.props.activityPersonas || this.props.activityIcon || this.props.onRenderIcon) &&
          <div className={ classNames.activityTypeIcon }>
            { onRenderIcon(this.props) }
          </div>
        }

        <div className={ classNames.activityContent }>
          { onRenderActivityDescription(this.props, this._onRenderActivityDescription) }
          { onRenderComments(this.props, this._onRenderComments) }
          { onRenderTimeStamp(this.props, this._onRenderTimeStamp) }
        </div>

      </div>
    );
  }

  private _onRenderIcon = (props: IActivityItemProps): JSX.Element | React.ReactNode | null => {
    if (props.activityPersonas) {
      return this._onRenderPersonaArray(props);
    } else {
      return this.props.activityIcon;
    }
  }

  private _onRenderActivityDescription = (props: IActivityItemProps): JSX.Element | null => {
    const classNames = this._getClassNames(props);

    const activityDescription = props.activityDescription || props.activityDescriptionText;

    if (activityDescription) {
      return (<span className={ classNames.activityText }>{ activityDescription }</span>);
    }

    return null;
  }

  private _onRenderComments = (props: IActivityItemProps): JSX.Element | null => {
    const classNames = this._getClassNames(props);

    const comments = props.comments || props.commentText;

    if (!props.isCompact && comments) {
      return (<div className={ classNames.commentText }>{ comments }</div>);
    }

    return null;
  }

  private _onRenderTimeStamp = (props: IActivityItemProps): JSX.Element | null => {
    const classNames = this._getClassNames(props);

    if (!props.isCompact && props.timeStamp) {
      return (<div className={ classNames.timeStamp }>{ props.timeStamp }</div>);
    }

    return null;
  }

  // If activityPersonas is an array of persona props, build the persona cluster element.
  private _onRenderPersonaArray = (props: IActivityItemProps): JSX.Element | null => {
    const classNames = this._getClassNames(props);

    let personaElement: JSX.Element | null = null;
    const activityPersonas = props.activityPersonas as Array<IPersonaSharedProps & { key?: string | number }>;
    if (activityPersonas[0].imageUrl || activityPersonas[0].imageInitials) {
      const personaList: Array<JSX.Element> = [];
      const showSize16Personas = (activityPersonas.length > 1 || props.isCompact);
      const personaLimit = props.isCompact ? 3 : 4;
      let style: React.CSSProperties | undefined = undefined;
      if (props.isCompact) {
        style = {
          display: 'inline-block',
          width: '10px',
          minWidth: '10px',
          overflow: 'visible'
        };
      }
      activityPersonas.filter((person, index) => index < personaLimit).forEach((person, index) => {
        personaList.push(
          <PersonaCoin
            { ...person }
            // tslint:disable-next-line:no-string-literal
            key={ person['key'] ? person['key'] : index }
            className={ classNames.activityPersona }
            size={ showSize16Personas ? PersonaSize.size16 : PersonaSize.size32 }
            style={ style }
          />
        );
      });
      personaElement = <div className={ classNames.personaContainer }>{ personaList }</div>;
    }
    return personaElement;
  }

  private _getClassNames(props: IActivityItemProps): IActivityItemClassNames {
    return getClassNames(getStyles(undefined, props.styles), props.className!, props.activityPersonas!, props.isCompact!);
  }
}
