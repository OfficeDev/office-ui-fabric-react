import * as React from 'react';
import { css } from '../../Utilities';
import { IDocumentCardActionsProps } from './DocumentCard.Props';
import { IconButton, ButtonType } from '../../Button';
import styles = require('./DocumentCard.scss');

export class DocumentCardActions extends React.Component<IDocumentCardActionsProps, any> {
  public render() {
    let { actions, views } = this.props;

    return (
      <div className={ css('ms-DocumentCardActions', styles.actions) }>

        { actions && actions.map((action, index) => {
          return (
            <div className={ css('ms-DocumentCardActions-action', styles.action) } key={ index }>
              <IconButton { ...action } />
            </div>
          );
        }) }

        { views > 0 && (
          <div className={ css('ms-DocumentCardActions-views', styles.views) }>
            <i className='ms-Icon ms-Icon--View' />
            { views }
          </div>
        ) }
      </div>
    );
  }
}
