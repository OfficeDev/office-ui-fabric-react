import * as React from 'react';
import { classNamesFunction, initializeComponentRef, EventGroup } from '../../../Utilities';
import { IColorSliderProps, IColorSliderStyleProps, IColorSliderStyles } from './ColorSlider.types';

const getClassNames = classNamesFunction<IColorSliderStyleProps, IColorSliderStyles>();

export interface IColorSliderState {
  currentValue?: number;
}

/**
 * {@docCategory ColorPicker}
 */
export class ColorSliderBase extends React.Component<IColorSliderProps, IColorSliderState> {
  public static defaultProps = {
    minValue: 0,
    maxValue: 100,
    thumbColor: 'inherit',
    value: 0
  };

  private _events: EventGroup;
  private _root = React.createRef<HTMLDivElement>();

  constructor(props: IColorSliderProps) {
    super(props);

    initializeComponentRef(this);
    this._events = new EventGroup(this);

    const { value } = this.props;

    this.state = {
      currentValue: value
    };
  }

  public componentWillReceiveProps(newProps: IColorSliderProps): void {
    if (newProps && newProps.value) {
      this.setState({ currentValue: newProps.value });
    }
  }

  public componentWillUnmount() {
    this._events.dispose();
  }

  public render(): JSX.Element {
    const { isAlpha, minValue, maxValue, overlayStyle, theme, className, styles } = this.props;
    const { currentValue } = this.state;

    const classNames = getClassNames(styles!, {
      theme: theme!,
      className
    });

    const currentPercentage = (100 * (currentValue! - minValue!)) / (maxValue! - minValue!);

    const hueStyle = {
      background:
        // tslint:disable-next-line:max-line-length
        'linear-gradient(to left,red 0,#f09 10%,#cd00ff 20%,#3200ff 30%,#06f 40%,#00fffd 50%,#0f6 60%,#35ff00 70%,#cdff00 80%,#f90 90%,red 100%)'
    };

    const alphaStyle = {
      backgroundImage:
        // tslint:disable-next-line:max-line-length
        'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==)'
    };

    const sliderStyle = isAlpha ? alphaStyle : hueStyle;

    return (
      <div ref={this._root} className={classNames.root} onMouseDown={this._onMouseDown} style={sliderStyle}>
        <div className={classNames.sliderOverlay} style={overlayStyle} />
        <div className={classNames.sliderThumb} style={{ left: currentPercentage + '%' }} />
      </div>
    );
  }

  private _onMouseDown = (ev: React.MouseEvent<HTMLElement>): void => {
    this._events.on(window, 'mousemove', this._onMouseMove, true);
    this._events.on(window, 'mouseup', this._onMouseUp, true);

    this._onMouseMove(ev);
  };

  private _onMouseMove = (ev: React.MouseEvent<HTMLElement>): void => {
    if (!this._root.current) {
      return;
    }

    const { onChange, minValue, maxValue } = this.props;
    const rectSize = this._root.current.getBoundingClientRect();

    const currentPercentage = (ev.clientX - rectSize.left) / rectSize.width;
    const newValue = Math.min(maxValue!, Math.max(minValue!, currentPercentage * maxValue!));

    this.setState({
      currentValue: newValue
    });

    if (onChange) {
      onChange(ev, newValue);
    }

    ev.preventDefault();
    ev.stopPropagation();
  };

  private _onMouseUp = (ev: React.MouseEvent<HTMLElement>): void => {
    this._events.off();
  };
}
