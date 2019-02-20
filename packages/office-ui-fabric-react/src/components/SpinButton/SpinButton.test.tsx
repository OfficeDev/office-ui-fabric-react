import { Promise } from 'es6-promise';
import * as React from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as renderer from 'react-test-renderer';
import { SpinButton } from './SpinButton';
import { ISpinButton } from './SpinButton.types';
import { KeyCodes, resetIds } from '../../Utilities';
import { mockEvent, renderIntoDocument } from '../../common/testUtilities';
import { DefaultButton } from '../Button';

describe('SpinButton', () => {
  beforeEach(() => {
    resetIds();
  });

  it('should render SpinButton correctly', () => {
    const component = renderer.create(<SpinButton label="label" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should allow value updates when no props are defined', () => {
    const ref = React.createRef<ISpinButton>();
    const renderedDOM: HTMLElement = renderIntoDocument(<SpinButton label="label" componentRef={ref} />);
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    ReactTestUtils.Simulate.keyDown(inputDOM, {
      which: KeyCodes.up
    });

    expect(inputDOM.value).toEqual('1');
    expect(ref.current!.value).toEqual('1');
  });

  it('should render SpinButton correctly with values that the user passes in', () => {
    const component = renderer.create(<SpinButton label="label" value={'0'} ariaValueNow={0} ariaValueText={'0 pt'} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a spinner with the default value on the input element', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const labelDOM: HTMLLabelElement = renderedDOM.getElementsByTagName('label')[0];

    expect(inputDOM.value).toEqual(exampleDefaultValue);
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(String(exampleDefaultValue));
    expect(inputDOM.getAttribute('aria-labelledby')).toEqual(labelDOM.id);

    expect(labelDOM.textContent).toEqual(exampleLabelValue);
    expect(labelDOM.htmlFor).toEqual(inputDOM.id);
  });

  it('should increment the value in the spin button by mouse click the up button', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const buttonDOM: Element = renderedDOM.getElementsByClassName('ms-UpButton')[0];

    expect(buttonDOM.tagName).toEqual('BUTTON');

    ReactTestUtils.Simulate.mouseDown(buttonDOM, {
      type: 'mousedown',
      clientX: 0,
      clientY: 0
    });

    ReactTestUtils.Simulate.mouseUp(buttonDOM, {
      type: 'mouseup',
      clientX: 0,
      clientY: 0
    });

    expect(inputDOM.value).toEqual('13');
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual('13');
  });

  it('should decrement the value in the spin button by mouse click the down button', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const buttonDOM: Element = renderedDOM.getElementsByClassName('ms-DownButton')[0];

    expect(buttonDOM.tagName).toEqual('BUTTON');

    ReactTestUtils.Simulate.mouseDown(buttonDOM, {
      type: 'mousedown',
      clientX: 0,
      clientY: 0
    });

    ReactTestUtils.Simulate.mouseUp(buttonDOM, {
      type: 'mouseup',
      clientX: 0,
      clientY: 0
    });

    expect(inputDOM.value).toEqual('11');
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual('11');
  });

  it('should increment the value in the spin button by keyboard press the up arrow key', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    ReactTestUtils.Simulate.keyDown(inputDOM, {
      which: KeyCodes.up
    });

    ReactTestUtils.Simulate.keyUp(inputDOM, {
      which: KeyCodes.up
    });

    expect(inputDOM.value).toEqual('13');
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual('13');
  });

  it('should decrement the value in the spin button by keyboard press the down arrow key', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    ReactTestUtils.Simulate.keyDown(inputDOM, {
      which: KeyCodes.down
    });

    ReactTestUtils.Simulate.keyUp(inputDOM, {
      which: KeyCodes.down
    });

    expect(inputDOM.value).toEqual('11');
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual('11');
  });

  it('should increment the value in the spin button by a step value of 2', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} step={2} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    ReactTestUtils.Simulate.keyDown(inputDOM, {
      which: KeyCodes.up
    });

    ReactTestUtils.Simulate.keyUp(inputDOM, {
      which: KeyCodes.up
    });

    expect(inputDOM.value).toEqual('14');
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual('14');
  });

  it('should decrement the value in the spin button by a step value of 2', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} step={2} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    ReactTestUtils.Simulate.keyDown(inputDOM, {
      which: KeyCodes.down
    });

    ReactTestUtils.Simulate.keyUp(inputDOM, {
      which: KeyCodes.down
    });

    expect(inputDOM.value).toEqual('10');
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual('10');
  });

  it('should set the value of the spin button when input valid text', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';
    const exampleNewValue = '21';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(exampleNewValue));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(inputDOM.value).toEqual(exampleNewValue);
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(String(exampleNewValue));
  });

  it('should reset the value of the spin when input invalid text', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';
    const exampleNewValue = 'garbage';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(exampleNewValue));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(inputDOM.value).toEqual(exampleDefaultValue);
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(String(exampleDefaultValue));
  });

  it('should reset the value of the spin button when input empty text', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    // Before commit the user input value, keep display nothing.
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(''));
    expect(inputDOM.value).toEqual('');

    // After commit the value (blur), reset to the default value.
    ReactTestUtils.Simulate.blur(inputDOM);
    expect(inputDOM.value).toEqual(exampleDefaultValue);
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(String(exampleDefaultValue));
  });

  it('should revert to max value when input value is higher than the max of the spin button', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';
    const exampleNewValue = '23';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(exampleNewValue));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(inputDOM.value).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(String(exampleMaxValue));
  });

  it('should revert existing value when input value is lower than the min of the spin button', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';
    const exampleNewValue = '0';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(String(exampleNewValue)));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(inputDOM.value).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(String(exampleMinValue));
  });

  it('should use validator passed to the spin button', () => {
    const errorMessage = 'The value is invalid';
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 20;
    const exampleDefaultValue = '12';
    const exampleNewValue = '21';

    const validator = jest.fn(value => (value > exampleMaxValue || value < exampleMinValue ? errorMessage : value));

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={exampleLabelValue}
        min={exampleMinValue}
        max={exampleMaxValue}
        defaultValue={exampleDefaultValue}
        onValidate={validator}
      />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(String(exampleNewValue)));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(inputDOM.value).toEqual(String(errorMessage));
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toBeFalsy();
    expect(inputDOM.getAttribute('aria-valuetext')).toEqual(errorMessage);

    expect(validator).toBeCalled();
  });

  it('should have correct value after increment and using defaultValue', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';
    const exampleStepValue = 2;
    const exampleNewValue: string = String(Number(exampleDefaultValue) + exampleStepValue);

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={exampleLabelValue}
        min={exampleMinValue}
        max={exampleMaxValue}
        defaultValue={exampleDefaultValue}
        step={exampleStepValue}
      />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const upButtonDOM: HTMLButtonElement = renderedDOM.getElementsByClassName('ms-UpButton')[0] as HTMLButtonElement;
    ReactTestUtils.Simulate.mouseDown(upButtonDOM);
    ReactTestUtils.Simulate.mouseUp(upButtonDOM);

    expect(inputDOM.value).toEqual(String(exampleNewValue));
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(String(exampleNewValue));
  });

  it('should have correct value after decrement and using defaultValue', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';
    const exampleStepValue = 2;
    const exampleNewValue: string = String(Number(exampleDefaultValue) - exampleStepValue);

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={exampleLabelValue}
        min={exampleMinValue}
        max={exampleMaxValue}
        defaultValue={exampleDefaultValue}
        step={exampleStepValue}
      />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const downButtonDOM: HTMLButtonElement = renderedDOM.getElementsByClassName('ms-DownButton')[0] as HTMLButtonElement;
    ReactTestUtils.Simulate.mouseDown(downButtonDOM);
    ReactTestUtils.Simulate.mouseUp(downButtonDOM);

    expect(inputDOM.value).toEqual(String(exampleNewValue));
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(String(exampleNewValue));
  });

  it('should use min as default value if neither value nor defaultValue are passed', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleStepValue = 2;

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} step={exampleStepValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    expect(inputDOM.value).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(String(exampleMinValue));
  });

  it('should use 0 as default value if neither value, defaultValue nor min are passed', () => {
    const exampleLabelValue = 'SpinButton';

    const renderedDOM: HTMLElement = renderIntoDocument(<SpinButton label={exampleLabelValue} />);

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    expect(inputDOM.value).toEqual(String(0));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(String(0));
  });

  it('should use the default onIncrement function when no value, defaultValue nor onIncrement function is passed', () => {
    const exampleLabelValue = 'SpinButton';

    const renderedDOM: HTMLElement = renderIntoDocument(<SpinButton label={exampleLabelValue} />);

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const upButtonDOM: HTMLButtonElement = renderedDOM.getElementsByClassName('ms-UpButton')[0] as HTMLButtonElement;
    ReactTestUtils.Simulate.mouseDown(upButtonDOM);
    ReactTestUtils.Simulate.mouseUp(upButtonDOM);

    expect(inputDOM.value).toEqual(String(1));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(String(1));
  });

  it('should stop spinning if text field is focused while actively spinning', () => {
    const exampleLabelValue = 'SpinButton';
    const exampleMinValue = 2;
    const exampleMaxValue = 22;
    const exampleDefaultValue = '12';

    function delay(millisecond: number): Promise<string> {
      return new Promise<string>(resolve => setTimeout(resolve, millisecond));
    }

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton label={exampleLabelValue} min={exampleMinValue} max={exampleMaxValue} defaultValue={exampleDefaultValue} />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const buttonDOM: Element = renderedDOM.getElementsByClassName('ms-UpButton')[0];

    expect(buttonDOM.tagName).toEqual('BUTTON');

    ReactTestUtils.Simulate.mouseDown(buttonDOM, {
      type: 'mousedown',
      clientX: 0,
      clientY: 0
    });

    delay(500).then(() => ReactTestUtils.Simulate.focus(inputDOM));

    const currentValue = inputDOM.value;
    expect(currentValue).not.toEqual('2');
    expect(inputDOM.getAttribute('aria-valuemin')).toEqual(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).toEqual(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).toEqual(currentValue);

    const newCurrentValue = inputDOM.value;
    expect(currentValue).toEqual(newCurrentValue);
  });

  it('should fire custom onIncrement handler (with minimal properties)', () => {
    const onIncrement: jest.Mock = jest.fn();

    const renderedDOM: HTMLElement = renderIntoDocument(<SpinButton label="label" onIncrement={onIncrement} />);

    const buttonDOM: Element = renderedDOM.getElementsByClassName('ms-UpButton')[0];

    ReactTestUtils.Simulate.mouseDown(buttonDOM, {
      type: 'mousedown',
      clientX: 0,
      clientY: 0
    });

    expect(onIncrement).toBeCalled();
  });

  it('should fire custom onDecrement handler (with minimal properties)', () => {
    const onDecrement: jest.Mock = jest.fn();

    const renderedDOM: HTMLElement = renderIntoDocument(<SpinButton label="label" onDecrement={onDecrement} />);

    const buttonDOM: Element = renderedDOM.getElementsByClassName('ms-DownButton')[0];

    ReactTestUtils.Simulate.mouseDown(buttonDOM, {
      type: 'mousedown',
      clientX: 0,
      clientY: 0
    });

    expect(onDecrement).toBeCalled();
  });

  it('should fire custom onValidate handler (with minimal properties)', () => {
    const onValidate: jest.Mock = jest.fn();
    const exampleNewValue = '99';

    const renderedDOM: HTMLElement = renderIntoDocument(<SpinButton label="label" onValidate={onValidate} />);

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(String(exampleNewValue)));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(onValidate).toBeCalled();
  });

  it('should pass enter key code to onValidate handler', () => {
    let keyCode;
    const onValidate: jest.Mock = jest.fn((value, event) => {
      keyCode = event.which;
      return value;
    });
    const exampleNewValue = '99';

    const renderedDOM: HTMLElement = renderIntoDocument(<SpinButton label="label" onValidate={onValidate} />);

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.focus(inputDOM);
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(String(exampleNewValue)));
    ReactTestUtils.Simulate.keyDown(inputDOM, { which: KeyCodes.enter });
    expect(keyCode).toEqual(KeyCodes.enter);
    expect(onValidate).toBeCalled();
    ReactTestUtils.Simulate.blur(inputDOM);
    expect(onValidate).toHaveBeenCalledTimes(1);
  });

  it('should not call onValidate when press enter key without input changes', () => {
    const onValidate: jest.Mock = jest.fn((value, event) => {
      return value;
    });
    const exampleNewValue = '99';
    const exampleChangedValue = '10';

    const renderedDOM: HTMLElement = renderIntoDocument(<SpinButton label="label" onValidate={onValidate} />);

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(String(exampleNewValue)));
    ReactTestUtils.Simulate.keyDown(inputDOM, { which: KeyCodes.enter });
    expect(onValidate).toHaveBeenCalledTimes(1);
    ReactTestUtils.Simulate.keyDown(inputDOM, { which: KeyCodes.enter });
    expect(onValidate).toHaveBeenCalledTimes(1);
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(String(exampleChangedValue)));
    ReactTestUtils.Simulate.keyDown(inputDOM, { which: KeyCodes.enter });
    expect(onValidate).toHaveBeenCalledTimes(2);
  });

  describe('in uncontrolled mode', () => {
    it('should call onChange handler when commit new value', () => {
      const newValue = '21';
      const onChange = jest.fn();

      const renderedDOM: HTMLElement = renderIntoDocument(<SpinButton label="SpinButton" defaultValue="12" onChange={onChange} />);
      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

      ReactTestUtils.Simulate.input(inputDOM, mockEvent(newValue));
      expect(onChange).not.toBeCalled();

      ReactTestUtils.Simulate.blur(inputDOM);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toBeCalledWith(newValue);
    });
  });

  describe('in controlled mode', () => {
    it('should not change display value if no onChange handler is passed', () => {
      const value = '37';

      const renderedDOM: HTMLElement = renderIntoDocument(<SpinButton label="SpinButton" value={value} />);
      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

      ReactTestUtils.Simulate.input(inputDOM, mockEvent('44'));
      ReactTestUtils.Simulate.blur(inputDOM);
      expect(inputDOM.value).toEqual(value);
    });

    it('should not change back the display value if onChange handler does not set value', () => {
      const value = '37';
      const newValue = '45';
      const onChange = jest.fn();

      const renderedDOM: HTMLElement = renderIntoDocument(<SpinButton label="SpinButton" value={value} onChange={onChange} />);
      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

      ReactTestUtils.Simulate.input(inputDOM, mockEvent(newValue));
      expect(inputDOM.value).toEqual(newValue);

      ReactTestUtils.Simulate.blur(inputDOM);
      expect(inputDOM.value).toEqual(value);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toBeCalledWith(newValue);
    });

    function createTestSpinButton(initialValue: number, newValue: number) {
      return class extends React.Component<{}, { value: number }> {
        public constructor(props: {}) {
          super(props);
          this.state = { value: initialValue };
        }

        public render() {
          return (
            <>
              <SpinButton label="SpinButton" value={this.state.value.toString()} onChange={this._updateValue} />
              <DefaultButton label="reset" onClick={this._updateValue} />
            </>
          );
        }

        private _updateValue = () => this.setState({ value: newValue });
      };
    }

    it('should show the display value after the parent pass the value', () => {
      const initialValue = 61;
      const newValue = 47;
      const TestSpinButton = createTestSpinButton(initialValue, newValue);
      const renderedDOM: HTMLElement = renderIntoDocument(<TestSpinButton />);
      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

      ReactTestUtils.Simulate.input(inputDOM, mockEvent(newValue.toString()));
      ReactTestUtils.Simulate.blur(inputDOM);
      expect(inputDOM.value).toEqual(newValue.toString());
    });

    it('should respect the value passed from the parent even it is different', () => {
      const initialValue = 62;
      const newValue = 96;
      const TestSpinButton = createTestSpinButton(initialValue, newValue);
      const renderedDOM: HTMLElement = renderIntoDocument(<TestSpinButton />);
      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

      ReactTestUtils.Simulate.input(inputDOM, mockEvent(newValue.toString()));
      expect(inputDOM.value).toEqual(newValue.toString());

      ReactTestUtils.Simulate.blur(inputDOM);
      expect(inputDOM.value).toEqual('88');
    });

    it('should keep input value if SpinButton re-render with same value and user is inputting value', () => {
      const initialValue = 63;
      const inputValue = 96;
      const TestSpinButton = createTestSpinButton(initialValue, initialValue);
      const renderedDOM: HTMLElement = renderIntoDocument(<TestSpinButton />);
      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
      const resetButtonDOM: HTMLButtonElement = renderedDOM.getElementsByTagName('button')[0];

      // The user is inputting a new value without committed (without blur).
      ReactTestUtils.Simulate.input(inputDOM, mockEvent(inputValue.toString()));
      expect(inputDOM.value).toEqual(inputValue.toString());

      // Then, reset the SpinButton with same committed value. The user inputting value is kept.
      resetButtonDOM.click();
      expect(inputDOM.value).toEqual(inputValue.toString());
    });

    it('should set to new value if SpinButton re-render with different value and user is inputting value', () => {
      const initialValue = 64;
      const newValue = 76;
      const inputValue = 96;
      const TestSpinButton = createTestSpinButton(initialValue, newValue);
      const renderedDOM: HTMLElement = renderIntoDocument(<TestSpinButton />);
      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
      const resetButtonDOM: HTMLButtonElement = renderedDOM.getElementsByTagName('button')[0];

      // The user is inputting a new value without committed (without blur).
      ReactTestUtils.Simulate.input(inputDOM, mockEvent(inputValue.toString()));
      expect(inputDOM.value).toEqual(inputValue.toString());

      // Then, reset the SpinButton with a new value different than the committed value. Throw the user value away and set to new value.
      resetButtonDOM.click();
      expect(inputDOM.value).toEqual(newValue.toString());
    });
  });
});
