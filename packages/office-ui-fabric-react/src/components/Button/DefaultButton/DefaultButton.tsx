/* tslint:disable:no-unused-variable no-unused-imports */
import * as React from 'react';
/* tslint:enable:no-unused-variable no-unused-imports*/
import {
  BaseComponent,
  getNativeProps,
  anchorProperties,
  buttonProperties
} from '../../../Utilities';

import { ButtonBase } from '../ButtonBase/ButtonBase';
import { IButtonProps } from '../ButtonBase/ButtonBase.Props';
import './DefaultButton.scss';

export class DefaultButton extends BaseComponent<IButtonProps, any> {
  public render() {
    return (
      <ButtonBase
        className='ms-Button--default'
        { ...getNativeProps(this.props, anchorProperties || buttonProperties) }
        { ...this.props }
      >
        <span className='ms-Button-label'>{ this.props.children }</span>
      </ButtonBase>
    );
  }
}
