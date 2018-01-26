import * as React from 'react';
import {
  BaseComponent,
  autobind,
  css
} from '../../Utilities';
import { IColorPickerProps } from './ColorPicker.types';
import { DefaultTextField, ITextField } from '../../TextField';
import { ColorRectangle } from './ColorRectangle';
import { ColorSlider } from './ColorSlider';
import {
  MAX_COLOR_HUE,
  IColor,
  getColorFromString,
  getColorFromRGBA,
  updateA,
  updateH,
  updateSV
} from '../../utilities/color/colors';
import { FontClassNames } from '../../Styling';
import * as stylesImport from './ColorPicker.scss';
const styles: any = stylesImport;

export interface IColorPickerState {
  isOpen: boolean;
  color: IColor;
}

export class ColorPicker extends BaseComponent<IColorPickerProps, IColorPickerState> {
  public static defaultProps = {
    hexLabel: 'Hex',
    redLabel: 'Red',
    greenLabel: 'Green',
    blueLabel: 'Blue',
    alphaLabel: 'Alpha'
  };

  private hexText: ITextField;
  private rText: ITextField;
  private gText: ITextField;
  private bText: ITextField;
  private aText: ITextField;

  constructor(props: IColorPickerProps) {
    super(props);

    this.state = {
      color: getColorFromString(props.color)
    } as IColorPickerState;
  }

  public componentWillReceiveProps(newProps: IColorPickerProps) {
    if (newProps.color) {
      this._updateColor(getColorFromString(newProps.color));
    }
  }

  public render() {
    let { color } = this.state;

    return (
      <div className={ css('ms-ColorPicker', styles.root) }>
        <div className={ css('ms-ColorPicker-panel', styles.panel) }>
          <ColorRectangle color={ color } onSVChanged={ this._onSVChanged } />
          <ColorSlider
            className={ css('is-hue', styles.colorSliderIsHue) }
            minValue={ 0 }
            maxValue={ MAX_COLOR_HUE }
            value={ color.h }
            onChanged={ this._onHChanged }
          />
          { !this.props.alphaSliderHidden && (
            <ColorSlider
              className={ css('is-alpha', styles.colorSliderIsAlpha) }
              overlayStyle={ { background: `linear-gradient(to right, transparent 0, ${color.str} 100%)` } }
              minValue={ 0 }
              maxValue={ 100 }
              value={ color.a }
              onChanged={ this._onAChanged }
            />) }
          <table className={ css('ms-ColorPicker-table', styles.table) } cellPadding='0' cellSpacing='0'>
            <thead>
              <tr className={ FontClassNames.small }>
                <td className={ styles.tableHexCell }>{ this.props.hexLabel }</td>
                <td>{ this.props.redLabel }</td>
                <td>{ this.props.greenLabel }</td>
                <td>{ this.props.blueLabel }</td>
                { !this.props.alphaSliderHidden && (
                  <td>{ this.props.alphaLabel }</td>) }
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <DefaultTextField
                    className={ css('ms-ColorPicker-input', styles.input) }
                    value={ color.hex }
                    /* tslint:disable:jsx-no-lambda*/
                    componentRef={ (ref) => this.hexText = ref! }
                    /* tslint:enable:jsx-no-lambda*/
                    onBlur={ this._onHexChanged }
                    spellCheck={ false }
                  />
                </td>
                <td style={ { width: '18%' } }>
                  <DefaultTextField
                    className={ css('ms-ColorPicker-input', styles.input) }
                    onBlur={ this._onRGBAChanged }
                    value={ String(color.r) }
                    /* tslint:disable:jsx-no-lambda*/
                    componentRef={ (ref) => this.rText = ref! }
                    /* tslint:enable:jsx-no-lambda*/
                    spellCheck={ false }
                  />
                </td>
                <td style={ { width: '18%' } }>
                  <DefaultTextField
                    className={ css('ms-ColorPicker-input', styles.input) }
                    onBlur={ this._onRGBAChanged }
                    value={ String(color.g) }
                    /* tslint:disable:jsx-no-lambda*/
                    componentRef={ (ref) => this.gText = ref! }
                    /* tslint:enable:jsx-no-lambda*/
                    spellCheck={ false }
                  />
                </td>
                <td style={ { width: '18%' } }>
                  <DefaultTextField
                    className={ css('ms-ColorPicker-input', styles.input) }
                    onBlur={ this._onRGBAChanged }
                    value={ String(color.b) }
                    /* tslint:disable:jsx-no-lambda*/
                    componentRef={ (ref) => this.bText = ref! }
                    /* tslint:enable:jsx-no-lambda*/
                    spellCheck={ false }
                  />
                </td>
                { !this.props.alphaSliderHidden && (
                  <td style={ { width: '18%' } }>
                    <DefaultTextField
                      className={ css('ms-ColorPicker-input', styles.input) }
                      onBlur={ this._onRGBAChanged }
                      value={ String(color.a) }
                      /* tslint:disable:jsx-no-lambda*/
                      componentRef={ (ref) => this.aText = ref! }
                      /* tslint:enable:jsx-no-lambda*/
                      spellCheck={ false }
                    />
                  </td>
                ) }
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  @autobind
  private _onSVChanged(s: number, v: number) {
    this._updateColor(updateSV(this.state.color, s, v));
  }

  @autobind
  private _onHChanged(h: number) {
    this._updateColor(updateH(this.state.color, h));
  }

  @autobind
  private _onAChanged(a: number) {
    this._updateColor(updateA(this.state.color, a));
  }

  @autobind
  private _onHexChanged() {
    this._updateColor(getColorFromString('#' + this.hexText.value));
  }

  @autobind
  private _onRGBAChanged() {
    this._updateColor(getColorFromRGBA({
      r: Number(this.rText.value),
      g: Number(this.gText.value),
      b: Number(this.bText.value),
      a: Number(this.aText.value)
    }));
  }

  private _updateColor(newColor?: IColor) {
    if (!newColor) {
      return;
    }

    let { onColorChanged } = this.props;

    if (newColor.str !== this.state.color.str) {
      this.setState({
        color: newColor
      } as IColorPickerState, () => {
        if (onColorChanged) {
          onColorChanged(newColor.str);
        }
      });
    }
  }
}
