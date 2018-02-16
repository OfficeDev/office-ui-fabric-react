import * as React from 'react';
import { css, classNamesFunction } from '../../../Utilities';
import {
  getStyles,
  IButtonBasicExampleStyleProps,
  IButtonBasicExampleStyles
} from './Button.Basic.Example.styles';
import { PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';

export class ButtonScreenReaderExample extends React.Component<IButtonProps, {}> {
  public render() {
    let { disabled, checked } = this.props;

    const getClassNames = classNamesFunction<IButtonBasicExampleStyleProps, IButtonBasicExampleStyles>();
    const classNames = getClassNames(getStyles);

    return (
      <div className={ css(classNames.example) }>
        <PrimaryButton
          data-automation-id='test'
          disabled={ disabled }
          checked={ checked }
          ariaDescription='This is aria description used for screen reader.'
        >
          Aria Description
        </PrimaryButton>
      </div>
    );
  }
}