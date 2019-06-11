import * as React from 'react';
import { BaseComponent, classNamesFunction } from '../../Utilities';
import { IChicletXsmallStyles, IChicletXsmallStyleProps } from './ChicletXsmall.types';
import { IChicletCardProps } from './ChicletCard.types';

const getClassNames = classNamesFunction<IChicletXsmallStyleProps, IChicletXsmallStyles>();

const ASSET_CDN_BASE_URL = 'https://static2.sharepointonline.com/files/fabric/assets';

const PREVIEW_IMAGE_WIDTH = '198px';
const PREVIEW_IMAGE_HEIGHT = '122px';

export class ChicletXsmallBase extends BaseComponent<IChicletCardProps, {}> {
  public static defaultProps: IChicletCardProps = {
    imageWidth: PREVIEW_IMAGE_WIDTH,
    imageHeight: PREVIEW_IMAGE_HEIGHT
  };

  private _classNames: { [key in keyof IChicletXsmallStyles]: string };

  public render(): JSX.Element {
    const { title, itemType, image, imageWidth, imageHeight, imageAlt, onClick, className, footer, theme, styles } = this.props;
    const actionable = onClick ? true : false;

    this._classNames = getClassNames(styles, { theme: theme!, className });

    // if this element is actionable it should have an aria role
    const role = actionable ? (onClick ? 'button' : 'link') : undefined;
    const tabIndex = actionable ? 0 : undefined;

    const preview = this._renderPreviewImage(image, imageHeight, imageWidth, itemType, imageAlt);

    return (
      <div tabIndex={tabIndex} role={role} onClick={actionable ? this._onClick : undefined} className={this._classNames.root}>
        <div className={this._classNames.preview}>{preview}</div>
        <div className={this._classNames.info}>
          <div title={title ? title : undefined} className={this._classNames.title} />
          <hr className={this._classNames.line} />
          {footer}
        </div>
      </div>
    );
  }

  private _renderPreviewImage(
    imageUrl?: string,
    imageHeight?: string,
    imageWidth?: string,
    itemType?: string,
    imageAlt?: string
  ): React.ReactElement<React.HTMLAttributes<HTMLDivElement>> {
    let src;
    let icon;

    if (itemType !== null) {
      src = `${ASSET_CDN_BASE_URL}/brand-icons/product/svg/` + itemType + `_16x1_5.svg`;
      icon = <img className={this._classNames.icon} src={src} />;
      switch (
        itemType // for "hero" apps, we'll use the app icons
      ) {
        case 'word':
        case 'docx':
          icon = <img className={this._classNames.icon} src={`${ASSET_CDN_BASE_URL}/brand-icons/product/svg/word_16x1_5.svg`} />;
          break;
        case 'powerpoint':
        case 'pptx':
          icon = <img className={this._classNames.icon} src={`${ASSET_CDN_BASE_URL}/brand-icons/product/svg/powerpoint_16x1_5.svg`} />;
          break;
        case 'excel':
          icon = <img className={this._classNames.icon} src={`${ASSET_CDN_BASE_URL}/brand-icons/product/svg/excel_16x1_5.svg`} />;
          break;
        default:
          icon = undefined;
          break;
      }
    }

    return <div>{icon}</div>;
  }

  private _onClick = (ev: React.MouseEvent<HTMLElement>): void => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(ev);
    }
  };
}
