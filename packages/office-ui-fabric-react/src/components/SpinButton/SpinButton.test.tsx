import 'es6-promise';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-addons-test-utils';
import {
  SpinButton,
  ISpinButtonState
} from './SpinButton';
import { ISpinButtonProps } from './SpinButton.Props';
import { KeyCodes } from '../../Utilities';

const expect: Chai.ExpectStatic = chai.expect;

describe('SpinButton', () => {
  function renderIntoDocument(element: React.ReactElement<any>): HTMLElement {
    const component = ReactTestUtils.renderIntoDocument(element);
    const renderedDOM: Element = ReactDOM.findDOMNode(component as React.ReactInstance);
    return renderedDOM as HTMLElement;
  }

  function mockEvent(targetValue: string = ''): React.SyntheticEvent<HTMLElement> {
    const target: EventTarget = { value: targetValue } as HTMLInputElement;
    const event: React.SyntheticEvent<HTMLElement> = { target } as React.SyntheticEvent<HTMLElement>;
    return event;
  }

  it('should render a spinner with the default value on the input element', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const labelDOM: HTMLLabelElement = renderedDOM.getElementsByTagName('label')[0];

    expect(inputDOM.value).to.equal(exampleDefaultValue);
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal(String(exampleDefaultValue));
    expect(inputDOM.getAttribute('aria-labelledby')).to.equals(labelDOM.id);

    // // Assert on the label element.
    expect(labelDOM.textContent).to.equal(exampleLabelValue);
    expect(labelDOM.htmlFor).to.equal(inputDOM.id);
  });

  it('should increment the value in the spin button via the up button', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const buttonDOM: Element = renderedDOM.getElementsByClassName('ms-UpButton')[0];

    expect(buttonDOM.tagName).to.equal('BUTTON');

    ReactTestUtils.Simulate.mouseDown(buttonDOM,
      {
        type: 'mousedown',
        clientX: 0,
        clientY: 0
      });

    ReactTestUtils.Simulate.mouseUp(buttonDOM,
      {
        type: 'mouseup',
        clientX: 0,
        clientY: 0
      });

    expect(inputDOM.value).to.equal('13');
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal('13');

  });

  it('should decrement the value in the spin button by the down button', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const buttonDOM: Element = renderedDOM.getElementsByClassName('ms-DownButton')[0];

    expect(buttonDOM.tagName).to.equal('BUTTON');

    ReactTestUtils.Simulate.mouseDown(buttonDOM,
      {
        type: 'mousedown',
        clientX: 0,
        clientY: 0
      });

    ReactTestUtils.Simulate.mouseUp(buttonDOM,
      {
        type: 'mouseup',
        clientX: 0,
        clientY: 0
      });

    expect(inputDOM.value).to.equal('11');
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal('11');

  });

  it('should increment the value in the spin button by the up arrow', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    ReactTestUtils.Simulate.keyDown(inputDOM,
      {
        which: KeyCodes.up
      });

    ReactTestUtils.Simulate.keyUp(inputDOM,
      {
        which: KeyCodes.up
      });

    expect(inputDOM.value).to.equal('13');
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal('13');

  });

  it('should decrement the value in the spin button by the down arrow', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    ReactTestUtils.Simulate.keyDown(inputDOM,
      {
        which: KeyCodes.down
      });

    ReactTestUtils.Simulate.keyUp(inputDOM,
      {
        which: KeyCodes.down
      });

    expect(inputDOM.value).to.equal('11');
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal('11');

  });

  it('should increment the value in the spin button by a step value of 2', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
        step={ 2 }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    ReactTestUtils.Simulate.keyDown(inputDOM,
      {
        which: KeyCodes.up
      });

    ReactTestUtils.Simulate.keyUp(inputDOM,
      {
        which: KeyCodes.up
      });

    expect(inputDOM.value).to.equal('14');
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal('14');

  });

  it('should decrement the value in the spin button by a step value of 2', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
        step={ 2 }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    ReactTestUtils.Simulate.keyDown(inputDOM,
      {
        which: KeyCodes.down
      });

    ReactTestUtils.Simulate.keyUp(inputDOM,
      {
        which: KeyCodes.down
      });

    expect(inputDOM.value).to.equal('10');
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal('10');

  });

  it('should set the value of the spin button by manual entry', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';
    const exampleNewValue: string = '21';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(exampleNewValue));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(inputDOM.value).to.equal(exampleNewValue);
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal(String(exampleNewValue));
  });

  it('should reset the value of the spin button with invalid manual entry', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';
    const exampleNewValue: string = 'garbage';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(exampleNewValue));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(inputDOM.value).to.equal(exampleDefaultValue);
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal(String(exampleDefaultValue));
  });

  it('should revert to max value when input value is higher than the max of the spin button', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';
    const exampleNewValue: string = '23';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(exampleNewValue));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(inputDOM.value).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal(String(exampleMaxValue));
  });

  it('should revert existing value when input value is lower than the min of the spin button', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';
    const exampleNewValue: string = '0';

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(String(exampleNewValue)));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(inputDOM.value).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal(String(exampleMinValue));
  });

  it('should use onBlur passed to the spin button (with valid input)', () => {
    const errorMessage: string = 'The value is invalid';
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';
    const exampleNewValue: string = '21';

    function validator(newValue: string): string {
      let numberValue: number = +newValue;
      return (!isNaN(numberValue) && numberValue >= exampleMinValue && numberValue <= exampleMaxValue) ? newValue : errorMessage;
    }

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
        onBlur={ validator }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(String(exampleNewValue)));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(inputDOM.value).to.equal(String(exampleNewValue));
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal(String(exampleNewValue));
  });

  it('should use onBlur passed to the spin button (with invalid input)', () => {
    const errorMessage: string = 'The value is invalid';
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';
    const exampleNewValue: string = '100';

    function validator(newValue: string): string {
      let numberValue: number = Number(newValue);

      return (!isNaN(numberValue) && numberValue >= exampleMinValue && numberValue <= exampleMaxValue) ? newValue : errorMessage;
    }

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
        onBlur={ validator }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    ReactTestUtils.Simulate.input(inputDOM, mockEvent(String(exampleNewValue)));
    ReactTestUtils.Simulate.blur(inputDOM);

    expect(inputDOM.value).to.equal(String(errorMessage));
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal(String(errorMessage));
  });

  it('should stop spinning if text field is focused while actively spinning', () => {
    const exampleLabelValue: string = 'SpinButton';
    const exampleMinValue: number = 2;
    const exampleMaxValue: number = 22;
    const exampleDefaultValue: string = '12';

    function delay(millisecond: number): Promise<void> {
      return new Promise<void>((resolve) => setTimeout(resolve, millisecond));
    }

    const renderedDOM: HTMLElement = renderIntoDocument(
      <SpinButton
        label={ exampleLabelValue }
        min={ exampleMinValue }
        max={ exampleMaxValue }
        defaultValue={ exampleDefaultValue }
      />
    );

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const buttonDOM: Element = renderedDOM.getElementsByClassName('ms-UpButton')[0];

    expect(buttonDOM.tagName).to.equal('BUTTON');

    ReactTestUtils.Simulate.mouseDown(buttonDOM,
      {
        type: 'mousedown',
        clientX: 0,
        clientY: 0
      });

    delay(500).then(() => ReactTestUtils.Simulate.focus(inputDOM));

    let currentValue = inputDOM.value;
    expect(currentValue).to.not.equal('2');
    expect(inputDOM.getAttribute('aria-valuemin')).to.equal(String(exampleMinValue));
    expect(inputDOM.getAttribute('aria-valuemax')).to.equal(String(exampleMaxValue));
    expect(inputDOM.getAttribute('aria-valuenow')).to.equal(currentValue);

    let newCurrentValue = inputDOM.value;
    expect(currentValue).to.equal(newCurrentValue);
  });
});
