import * as React from 'react';
import { ISpinnerProps, SpinnerType } from './Spinner.Props';
import { css } from '../../utilities/css';
import './Spinner.scss';

export class Spinner extends React.Component<ISpinnerProps, any> {
  public static defaultProps: ISpinnerProps = {
    type: SpinnerType.normal
  };

  public render() {
    let { type, label, className } = this.props;

    return (
      <div className='ms-Spinner'>
        <div className={ css('normal', className, {
            'large': type === SpinnerType.large
          }) }>
          <div className='ms-Spinner-circle'></div>
        </div>
        { label && (
          <div className='ms-Spinner-label'>{label}</div>
        ) }
      </div>
    );
  }
}