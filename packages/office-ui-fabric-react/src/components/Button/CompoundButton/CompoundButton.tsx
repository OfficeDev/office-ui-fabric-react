import * as React from 'react';
import { BaseButton } from '../BaseButton';
import { BaseComponent, customizable } from '@uifabric/utilities';
import { IButtonProps, IButtonClassNames } from '../Button.Props';

import styles = require('./CompoundButton.scss');

export const CompoundButtonClassNames: IButtonClassNames = {
  base: 'ms-Button',
  variant: 'ms-Button--compound',
  description: styles.description,
  flexContainer: styles.flexContainer,
  icon: null,
  isDisabled: styles.isDisabled,
  isEnabled: styles.isEnabled,
  label: styles.label,
  root: styles.root
};

@customizable('CompoundButton')
export class CompoundButton extends BaseComponent<IButtonProps, {}> {
  /**
   * Tell BaseComponent to bypass resolution of componentRef.
   */
  protected _shouldUpdateComponentRef = false;

  public render() {
    return (
      <BaseButton
        classNames={ CompoundButtonClassNames }
        { ...this.props }
      />
    );
  }
}
