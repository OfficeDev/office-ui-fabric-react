import * as React from 'react';
import { Icon } from '../../Icon';
import { IProcessedStyleSet } from '../../Styling';
import { BaseComponent, classNamesFunction, css } from '../../Utilities';
import { IDocumentCardLogoProps, IDocumentCardLogoStyleProps, IDocumentCardLogoStyles } from './DocumentCardLogo.types';

const getClassNames = classNamesFunction<IDocumentCardLogoStyleProps, IDocumentCardLogoStyles>();

export class DocumentCardLogoBase extends BaseComponent<IDocumentCardLogoProps, any> {
  private _classNames: IProcessedStyleSet<IDocumentCardLogoStyles>;

  public render() {
    const { logoIcon, styles, theme, className } = this.props;

    this._classNames = getClassNames(styles!, {
      theme: theme!,
      className
    });

    return (
      <div className={css('ms-DocumentCardLogo', this._classNames.root)}>
        <Icon iconName={logoIcon} />
      </div>
    );
  }
}
