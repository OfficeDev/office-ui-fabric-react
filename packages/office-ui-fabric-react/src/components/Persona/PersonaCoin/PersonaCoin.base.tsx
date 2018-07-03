import * as React from 'react';
import {
  BaseComponent,
  classNamesFunction,
  customizable,
  divProperties,
  getInitials,
  getNativeProps,
  getRTL
} from '../../../Utilities';
import { mergeStyles } from '../../../Styling';
import { PersonaPresence } from '../PersonaPresence/index';
import { Icon } from '../../../Icon';
import { Image, ImageFit, ImageLoadState } from '../../../Image';
import {
  IPersonaCoinProps,
  IPersonaCoinStyleProps,
  IPersonaCoinStyles,
  IPersonaPresenceProps,
  PersonaPresence as PersonaPresenceEnum,
  PersonaSize
} from '../Persona.types';
import { initialsColorPropToColorCode } from '../PersonaInitialsColor';

const getClassNames = classNamesFunction<IPersonaCoinStyleProps, IPersonaCoinStyles>();

const SIZE_TO_PIXELS: { [key: number]: number } = {
  [PersonaSize.tiny]: 20,
  [PersonaSize.extraExtraSmall]: 24,
  [PersonaSize.extraSmall]: 28,
  [PersonaSize.small]: 40,
  [PersonaSize.regular]: 48,
  [PersonaSize.large]: 72,
  [PersonaSize.extraLarge]: 100,

  [PersonaSize.size24]: 24,
  [PersonaSize.size28]: 28,
  [PersonaSize.size10]: 20,
  [PersonaSize.size32]: 32,
  [PersonaSize.size40]: 40,
  [PersonaSize.size48]: 48,
  [PersonaSize.size72]: 72,
  [PersonaSize.size100]: 100
};

export interface IPersonaState {
  isImageLoaded?: boolean;
  isImageError?: boolean;
}

/**
 * PersonaCoin with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Styling)
 */
@customizable('PersonaCoin', ['theme', 'styles'])
export class PersonaCoinBase extends BaseComponent<IPersonaCoinProps, IPersonaState> {
  public static defaultProps: IPersonaCoinProps = {
    size: PersonaSize.size48,
    presence: PersonaPresenceEnum.none,
    imageAlt: ''
  };

  constructor(props: IPersonaCoinProps) {
    super(props);

    this._warnDeprecations({ primaryText: 'text' });

    this.state = {
      isImageLoaded: false,
      isImageError: false
    };
  }

  public render(): JSX.Element | null {
    const { className, coinProps, showUnknownPersonaCoin, coinSize, styles, presence, theme } = this.props;

    const size = this.props.size as PersonaSize;
    const divProps = getNativeProps(this.props, divProperties);

    const personaPresenceProps: IPersonaPresenceProps = {
      coinSize,
      presence,
      size,
      theme
    };

    // Use getStyles from props, or fall back to getStyles from styles file.
    const classNames = getClassNames(styles, {
      theme: theme!,
      className: coinProps && coinProps.className ? coinProps.className : className,
      size,
      showUnknownPersonaCoin
    });

    // Render PersonaCoin if size is not size10
    if (size !== PersonaSize.size10 && size !== PersonaSize.tiny) {
      return this._onRenderRegularCoin();
    }

    // If the size === 10 or tiny render just PersonaPresence.
    if (this.props.presence) {
      return <PersonaPresence {...personaPresenceProps} />;
    }

    // Just render Contact Icon if there isn't a Presence prop.
    return <Icon {...divProps} iconName="Contact" className={classNames.size10WithoutPresenceIcon} />;
  }

  private _onRenderRegularCoin = (): JSX.Element => {
    const { imageUrl } = this.props;
    const noImageAvailableOrIsLoading = !this.state.isImageLoaded && (!imageUrl || this.state.isImageError);

    return noImageAvailableOrIsLoading ? this._onRenderCoinWithInitials() : this._onRenderCoinWithImage();
  };

  private _onRenderCoinWithInitials(): JSX.Element {
    const {
      className,
      coinProps,
      showUnknownPersonaCoin,
      coinSize,
      styles,
      presence,
      onRenderInitials = this._onRenderInitials,
      theme
    } = this.props;

    const divProps = getNativeProps(this.props, divProperties);

    const size = this.props.size as PersonaSize;
    const coinSizeStyle = coinSize ? { width: coinSize, height: coinSize } : undefined;

    // Use getStyles from props, or fall back to getStyles from styles file.
    const classNames = getClassNames(styles, {
      theme: theme!,
      className: coinProps && coinProps.className ? coinProps.className : className,
      size,
      showUnknownPersonaCoin
    });

    const personaPresenceProps: IPersonaPresenceProps = {
      coinSize,
      presence,
      size,
      theme
    };

    return (
      <div
        {...divProps}
        {...coinProps}
        className={mergeStyles(
          classNames.coin,
          classNames.imageArea,
          classNames.initials,
          !showUnknownPersonaCoin && { backgroundColor: initialsColorPropToColorCode(this.props) }
        )}
        style={coinSizeStyle}
        aria-hidden="true"
      >
        {onRenderInitials(this.props, this._onRenderInitials)}
        <PersonaPresence {...personaPresenceProps} />
      </div>
    );
  }

  private _onRenderCoinWithImage(): JSX.Element {
    const {
      className,
      coinProps,
      showUnknownPersonaCoin,
      coinSize,
      styles,
      presence,
      onRenderCoin = this._onRenderCoin,
      theme
    } = this.props;

    const size = this.props.size as PersonaSize;
    const coinSizeStyle = coinSize ? { width: coinSize, height: coinSize } : undefined;

    // Use getStyles from props, or fall back to getStyles from styles file.
    const classNames = getClassNames(styles, {
      theme: theme!,
      className: coinProps && coinProps.className ? coinProps.className : className,
      size,
      showUnknownPersonaCoin
    });

    const personaPresenceProps: IPersonaPresenceProps = {
      coinSize,
      presence,
      size,
      theme
    };

    return (
      <div {...coinProps} className={classNames.imageArea} style={coinSizeStyle}>
        {onRenderCoin(this.props, this._onRenderCoin)}
        <PersonaPresence {...personaPresenceProps} />
      </div>
    );
  }

  private _onRenderCoin = (props: IPersonaCoinProps): JSX.Element | null => {
    const {
      coinSize,
      styles,
      imageUrl,
      imageAlt,
      imageShouldFadeIn,
      imageShouldStartVisible,
      theme,
      showUnknownPersonaCoin
    } = props;

    const size = props.size as PersonaSize;

    const classNames = getClassNames(styles, {
      theme: theme!,
      size,
      showUnknownPersonaCoin
    });

    return (
      <Image
        className={[classNames.coin, classNames.image].join(' ')}
        imageFit={ImageFit.cover}
        src={imageUrl}
        width={coinSize || SIZE_TO_PIXELS[size]}
        height={coinSize || SIZE_TO_PIXELS[size]}
        alt={imageAlt}
        shouldFadeIn={imageShouldFadeIn}
        shouldStartVisible={imageShouldStartVisible}
        onLoadingStateChange={this._onPhotoLoadingStateChange}
      />
    );
  };

  /**
   * Deprecation helper for getting text.
   */
  private _getText(): string {
    return this.props.text || this.props.primaryText || '';
  }

  private _onRenderInitials = (props: IPersonaCoinProps): JSX.Element => {
    let { imageInitials } = props;
    const { allowPhoneInitials, showUnknownPersonaCoin } = props;

    if (showUnknownPersonaCoin) {
      return <Icon iconName="Help" />;
    }

    const isRTL = getRTL();

    imageInitials = imageInitials || getInitials(this._getText(), isRTL, allowPhoneInitials);

    return imageInitials !== '' ? <React.Fragment>{imageInitials}</React.Fragment> : <Icon iconName="Contact" />;
  };

  private _onPhotoLoadingStateChange = (loadState: ImageLoadState) => {
    this.setState({
      isImageLoaded: loadState === ImageLoadState.loaded,
      isImageError: loadState === ImageLoadState.error
    });

    this.props.onPhotoLoadingStateChange && this.props.onPhotoLoadingStateChange(loadState);
  };
}
