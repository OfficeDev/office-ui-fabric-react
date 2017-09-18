import * as React from 'react';
import {
  BaseComponent,
  autobind,
  css,
  divProperties,
  getNativeProps,
  IRenderFunction
} from '../../Utilities';
import { TooltipHost, TooltipOverflowMode } from '../../Tooltip';
import { PersonaCoin } from './PersonaCoin';
import {
  IPersonaProps,
  PersonaPresence as PersonaPresenceEnum,
  PersonaSize
} from './Persona.Props';
import * as stylesImport from './Persona.scss';
const styles: any = stylesImport;

export class Persona extends BaseComponent<IPersonaProps, {}> {
  public static defaultProps: IPersonaProps = {
    primaryText: '',
    size: PersonaSize.regular,
    presence: PersonaPresenceEnum.none,
    imageAlt: ''
  };

  constructor(props: IPersonaProps) {
    super(props);
  }

  public render() {
    let {
      hidePersonaDetails,
      onRenderPrimaryText,
      onRenderSecondaryText,
      onRenderTertiaryText,
      onRenderOptionalText,
    } = this.props;
    let size = this.props.size as PersonaSize;

    // These properties are to be explicitly passed into PersonaCoin because they are the only props directly used
    let {
      className,
      imageUrl,
      imageAlt,
      imageInitials,
      initialsColor,
      onRenderPersonaImage,
      presence,
      primaryText,
      imageShouldFadeIn,
      imageShouldStartVisible
     } = this.props;

    let personaCoinProps = {
      className,
      imageUrl,
      imageAlt,
      imageInitials,
      initialsColor,
      onRenderPersonaImage,
      presence,
      primaryText,
      imageShouldFadeIn,
      imageShouldStartVisible,
      size
    };

    let divProps = getNativeProps(this.props, divProperties);
    let personaDetails = (
      <div className={ css('ms-Persona-details', styles.details) }>
        { this._renderElement(
          this.props.primaryText,
          css('ms-Persona-primaryText', styles.primaryText),
          onRenderPrimaryText) }
        { this._renderElement(
          this.props.secondaryText,
          css('ms-Persona-secondaryText', styles.secondaryText),
          onRenderSecondaryText) }
        { this._renderElement(
          this.props.tertiaryText,
          css('ms-Persona-tertiaryText', styles.tertiaryText),
          onRenderTertiaryText) }
        { this._renderElement(
          this.props.optionalText,
          css('ms-Persona-optionalText', styles.optionalText),
          onRenderOptionalText) }
        { this.props.children }
      </div>
    );

    return (
      <div { ...divProps }>
        <PersonaCoin { ...personaCoinProps }>
          { (!hidePersonaDetails || (size === PersonaSize.tiny)) && personaDetails }
        </PersonaCoin>
      </div>
    );
  }

  @autobind
  private _renderElement(text: string | undefined, className: string, render?: IRenderFunction<IPersonaProps>): JSX.Element {
    return (
      <div className={ className }>
        { render
          ? render(this.props)
          : <TooltipHost content={ text } overflowMode={ TooltipOverflowMode.Parent }>{ text }</TooltipHost>
        }
      </div>
    );
  }
}
