/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import {
  css,
  getNativeProps,
  buttonProperties
} from '../../Utilities';

import { ButtonBase } from './ButtonBase';
import './sass/ButtonBase.scss';
import './sass/ButtonDefault.scss';

export class DefaultButton extends ButtonBase {
  protected getRootClassName() { return 'ms-Button--default'; }

  public render() {
    let { children } = this.props;

    return (
      <ButtonBase
        className={ css('ms-Button', this.getRootClassName()) }
        { ...getNativeProps(this.props, buttonProperties) }
      >
        { children }
      </ButtonBase>
    );
  }
}
