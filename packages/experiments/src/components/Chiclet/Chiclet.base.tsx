import * as React from 'react';
import { BaseComponent } from '../../Utilities';
import { ChicletCard } from './ChicletCard';
import { ChicletXsmall } from './ChicletXsmall';
import { IChicletProps, ChicletSize } from './Chiclet.types';
import { IChicletCardProps } from './ChicletCard.types';

export interface IChicletState {
  chicletCardProps?: IChicletCardProps;
}

export class ChicletBase extends BaseComponent<IChicletProps, IChicletState> {
  constructor(props: IChicletProps) {
    super(props);

    const chicletCardProps = this.props;
    this.state = { chicletCardProps: chicletCardProps };
  }

  public componentDidUpdate(prevProps: IChicletProps): void {
    if (this.props.url !== prevProps.url) {
      const chicletCardProps = this.props;
      this.setState({ chicletCardProps: chicletCardProps });
    }
  }

  public render(): JSX.Element {
    const { size, footer, description } = this.props;
    const { chicletCardProps } = this.state;

    switch (size) {
      case ChicletSize.medium:
        return <ChicletCard {...chicletCardProps} onClick={this._onClick} footer={footer} description={description} />;
      // @todo: handle other types of chiclets
      case ChicletSize.xSmall:
        return <ChicletXsmall {...chicletCardProps} onClick={this._onClick} footer={footer} />;
      default:
        return <ChicletCard {...chicletCardProps} onClick={this._onClick} footer={footer} description={description} />;
    }
  }

  public componentWillReceiveProps(nextProps: IChicletProps): void {
    if (this.props.url !== nextProps.url) {
      this.setState({ chicletCardProps: this.props });
    }
  }

  private _onClick(): void {
    // @todo: default click handler
  }
}
