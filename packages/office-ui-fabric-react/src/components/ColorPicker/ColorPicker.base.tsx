import * as React from 'react';
import { BaseComponent, classNamesFunction, createRef, customizable } from '../../Utilities';
import { IColorPickerProps, IColorPickerStyleProps, IColorPickerStyles } from './ColorPicker.types';
import { ITextField, TextField } from '../../TextField';
import { ColorRectangle } from './ColorRectangle/ColorRectangle';
import { ColorSlider } from './ColorSlider/ColorSlider';
import {
  MAX_COLOR_HUE,
  IColor,
  getColorFromString,
  getColorFromRGBA,
  updateA,
  updateH,
  updateSV
} from '../../utilities/color/colors';

export interface IColorPickerState {
  isOpen: boolean;
  color: IColor;
}

const getClassNames = classNamesFunction<IColorPickerStyleProps, IColorPickerStyles>();

@customizable('ColorPicker', ['theme'])
export class ColorPickerBase extends BaseComponent<IColorPickerProps, IColorPickerState> {
  public static defaultProps = {
    hexLabel: 'Hex',
    redLabel: 'Red',
    greenLabel: 'Green',
    blueLabel: 'Blue',
    alphaLabel: 'Alpha'
  };

  private _hexText = createRef<ITextField>();
  private _rText = createRef<ITextField>();
  private _gText = createRef<ITextField>();
  private _bText = createRef<ITextField>();
  private _aText = createRef<ITextField>();

  constructor(props: IColorPickerProps) {
    super(props);

    this.state = {
      color: getColorFromString(props.color)
    } as IColorPickerState;
  }

  public componentWillReceiveProps(newProps: IColorPickerProps): void {
    if (newProps.color) {
      this._updateColor(getColorFromString(newProps.color));
    }
  }

  public render(): JSX.Element {
    const { theme, className, styles } = this.props;
    const { color } = this.state;

    const classNames = getClassNames(styles!, {
      theme: theme!,
      className
    });

    return (
      <div className={classNames.root}>
        <div className={classNames.panel}>
          <ColorRectangle color={color} onSVChanged={this._onSVChanged} />
          <ColorSlider
            className="is-hue"
            minValue={0}
            maxValue={MAX_COLOR_HUE}
            value={color.h}
            onChanged={this._onHChanged}
          />
          {!this.props.alphaSliderHidden && (
            <ColorSlider
              className="is-alpha"
              isAlpha
              overlayStyle={{ background: `linear-gradient(to right, transparent 0, ${color.str} 100%)` }}
              minValue={0}
              maxValue={100}
              value={color.a}
              onChanged={this._onAChanged}
            />
          )}
          <table className={classNames.table} cellPadding="0" cellSpacing="0">
            <thead>
              <tr className={classNames.tableHeader}>
                <td className={classNames.tableHexCell}>{this.props.hexLabel}</td>
                <td>{this.props.redLabel}</td>
                <td>{this.props.greenLabel}</td>
                <td>{this.props.blueLabel}</td>
                {!this.props.alphaSliderHidden && <td>{this.props.alphaLabel}</td>}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <TextField
                    className={classNames.input}
                    value={color.hex}
                    componentRef={this._hexText}
                    onBlur={this._onHexChanged}
                    spellCheck={false}
                  />
                </td>
                <td style={{ width: '18%' }}>
                  <TextField
                    className={classNames.input}
                    onBlur={this._onRGBAChanged}
                    value={String(color.r)}
                    componentRef={this._rText}
                    spellCheck={false}
                  />
                </td>
                <td style={{ width: '18%' }}>
                  <TextField
                    className={classNames.input}
                    onBlur={this._onRGBAChanged}
                    value={String(color.g)}
                    componentRef={this._gText}
                    spellCheck={false}
                  />
                </td>
                <td style={{ width: '18%' }}>
                  <TextField
                    className={classNames.input}
                    onBlur={this._onRGBAChanged}
                    value={String(color.b)}
                    componentRef={this._bText}
                    spellCheck={false}
                  />
                </td>
                {!this.props.alphaSliderHidden && (
                  <td style={{ width: '18%' }}>
                    <TextField
                      className={classNames.input}
                      onBlur={this._onRGBAChanged}
                      value={String(color.a)}
                      componentRef={this._aText}
                      spellCheck={false}
                    />
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  private _onSVChanged = (s: number, v: number): void => {
    this._updateColor(updateSV(this.state.color, s, v));
  };

  private _onHChanged = (h: number): void => {
    this._updateColor(updateH(this.state.color, h));
  };

  private _onAChanged = (a: number): void => {
    this._updateColor(updateA(this.state.color, a));
  };

  private _onHexChanged = (): void => {
    this._updateColor(getColorFromString('#' + this._hexText.value));
  };

  private _onRGBAChanged = (): void => {
    this._updateColor(
      getColorFromRGBA({
        r: Number(this._rText.value),
        g: Number(this._gText.value),
        b: Number(this._bText.value),
        a: Number((this._aText && this._aText.value) || 100)
      })
    );
  };

  private _updateColor(newColor?: IColor): void {
    if (!newColor) {
      return;
    }

    const { onColorChanged } = this.props;

    if (newColor.str !== this.state.color.str) {
      this.setState(
        {
          color: newColor
        } as IColorPickerState,
        () => {
          if (onColorChanged) {
            onColorChanged(newColor.str);
          }
        }
      );
    }
  }
}
