import { Promise } from 'es6-promise';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import * as WarnUtil from '@uifabric/utilities/lib-commonjs/warn';

import { createRef, resetIds } from '../../Utilities';

import { ITextField, TextField } from './TextField';
import { TextFieldBase } from './TextField.base';
import { ITextFieldStyles } from './TextField.types';

describe('TextField', () => {
  beforeAll(() => {
    // Prevent warn deprecations from failing test
    jest.spyOn(WarnUtil, 'warnDeprecations').mockImplementation(() => {
      /** no impl **/
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    resetIds();
  });

  function renderIntoDocument(element: React.ReactElement<any>): HTMLElement {
    const component = ReactTestUtils.renderIntoDocument(element);
    const renderedDOM = ReactDOM.findDOMNode(component as React.ReactInstance);
    return renderedDOM as HTMLElement;
  }

  function mockEvent(targetValue: string = ''): ReactTestUtils.SyntheticEventData {
    const target: EventTarget = { value: targetValue } as HTMLInputElement;
    const event: ReactTestUtils.SyntheticEventData = { target };

    return event;
  }

  function delay(millisecond: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millisecond));
  }

  it('renders TextField correctly', () => {
    const component = renderer.create(<TextField label="Label" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders TextField multiline unresizable correctly', () => {
    const component = renderer.create(<TextField label="Label" multiline={true} resizable={false} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders TextField multiline resizable correctly', () => {
    const component = renderer.create(<TextField label="Label" multiline={true} resizable={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders multiline TextField correctly with props affecting styling', () => {
    const component = renderer.create(
      <TextField
        label="Label"
        errorMessage={'test message'}
        underlined={true}
        addonString={'test addonString'}
        prefix={'test prefix'}
        suffix={'test suffix'}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders multiline TextField correctly with errorMessage', () => {
    const component = renderer.create(
      <TextField
        label="Label"
        errorMessage={'test message'}
        underlined={true}
        addonString={'test addonString'}
        prefix={'test prefix'}
        suffix={'test suffix'}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should resepect user component and subcomponent styling', () => {
    const styles: Partial<ITextFieldStyles> = {
      root: 'root-testClassName',
      subComponentStyles: {
        label: {
          root: 'label-testClassName'
        }
      }
    };
    const component = renderer.create(
      <TextField
        label="Label"
        errorMessage={'test message'}
        underlined={true}
        addonString={'test addonString'}
        prefix={'test prefix'}
        suffix={'test suffix'}
        styles={styles}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render label and value to input element', () => {
    const exampleLabel = 'this is label';
    const exampleValue = 'this is value';

    const renderedDOM: HTMLElement = renderIntoDocument(<TextFieldBase label={exampleLabel} value={exampleValue} />);

    // Assert on the input element.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    expect(inputDOM.value).toEqual(exampleValue);

    // Assert on the label element.
    const labelDOM: HTMLLabelElement = renderedDOM.getElementsByTagName('label')[0];
    expect(labelDOM.textContent).toEqual(exampleLabel);
  });

  it('should render prefix in input element', () => {
    const examplePrefix = 'this is a prefix';

    const textField = mount(<TextField prefix={examplePrefix} />);

    // Assert on the prefix
    const prefixDOM: Element = textField.getDOMNode().getElementsByClassName('ms-TextField-prefix')[0];
    expect(prefixDOM.textContent).toEqual(examplePrefix);
  });

  it('should render suffix in input element', () => {
    const exampleSuffix = 'this is a suffix';

    const textField = mount(<TextField suffix={exampleSuffix} />);

    // Assert on the suffix
    const suffixDOM: Element = textField.getDOMNode().getElementsByClassName('ms-TextField-suffix')[0];
    expect(suffixDOM.textContent).toEqual(exampleSuffix);
  });

  it('should render both prefix and suffix in input element', () => {
    const examplePrefix = 'this is a prefix';
    const exampleSuffix = 'this is a suffix';

    const textField = mount(<TextField prefix={examplePrefix} suffix={exampleSuffix} />);

    // Assert on the prefix and suffix
    const prefixDOM: Element = textField.getDOMNode().getElementsByClassName('ms-TextField-prefix')[0];
    const suffixDOM: Element = textField.getDOMNode().getElementsByClassName('ms-TextField-suffix')[0];
    expect(prefixDOM.textContent).toEqual(examplePrefix);
    expect(suffixDOM.textContent).toEqual(exampleSuffix);
  });

  it('should render multiline as text area element', () => {
    const renderedDOM: HTMLElement = renderIntoDocument(
      <TextFieldBase value="This\nIs\nMultiline\nText\n" multiline />
    );

    // Assert on the input element.
    const inputDOM: HTMLTextAreaElement = renderedDOM.getElementsByTagName('textarea')[0];
    expect(inputDOM.value).toBeDefined();
  });

  it('should associate the label and input box', () => {
    const renderedDOM: HTMLElement = renderIntoDocument(
      <TextFieldBase label="text-field-label" value="whatever value" />
    );

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    const labelDOM: HTMLLabelElement = renderedDOM.getElementsByTagName('label')[0];

    // Assert the input ID and label FOR attribute are the same.
    expect(inputDOM.id).toBeDefined();
    expect(inputDOM.id).toEqual(labelDOM.htmlFor);
  });

  it('should render a disabled input element', () => {
    const renderedDOM: HTMLElement = renderIntoDocument(<TextFieldBase disabled={true} />);

    // Assert the input box is disabled.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    expect(inputDOM.disabled).toEqual(true);
  });

  it('should render a readonly input element', () => {
    const renderedDOM: HTMLElement = renderIntoDocument(<TextFieldBase readOnly={true} />);

    // Assert the input box is readOnly.
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
    expect(inputDOM.readOnly).toEqual(true);
  });

  it('should render a value of 0 when given the number 0', () => {
    const renderedDOM: HTMLElement = renderIntoDocument(<TextFieldBase value={0 as any} />);

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    // Assert on the input element.
    expect(inputDOM.value).toEqual('0');
  });

  it('should render a default value of 0 when given the number 0', () => {
    const renderedDOM: HTMLElement = renderIntoDocument(<TextFieldBase defaultValue={0 as any} />);

    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    // Assert on the input element.
    expect(inputDOM.defaultValue).toEqual('0');
  });

  it('should NOT update state when props value remains undefined on props update', () => {
    const stateValue = 'state value';
    const textField = mount(<TextFieldBase />);
    expect(textField.state('value')).toEqual('');

    textField.setState({ value: stateValue });
    expect(textField.state('value')).toEqual(stateValue);

    // Trigger a props update, but value prop remains the same undefined value,
    //    so state should not be affected.
    textField.setProps({ id: 'unimportantValue' });
    expect(textField.state('value')).toEqual(stateValue);
  });

  it('should update state when props value changes from defined to undefined', () => {
    const propsValue = 'props value';

    const textField = mount(<TextFieldBase value={propsValue} />);
    expect(textField.state('value')).toEqual(propsValue);

    textField.setProps({ value: undefined });
    expect(textField.state('value')).toEqual('');
  });

  describe('error message', () => {
    const errorMessage = 'The string is too long, should not exceed 3 characters.';

    function assertErrorMessage(renderedDOM: HTMLElement, expectedErrorMessage: string | boolean): void {
      const errorMessageDOM: HTMLElement = renderedDOM.querySelector(
        '[data-automation-id=error-message]'
      ) as HTMLElement;

      if (expectedErrorMessage === false) {
        expect(errorMessageDOM).toBeNull(); // element not exists
      } else {
        expect(errorMessageDOM.textContent).toEqual(expectedErrorMessage);
      }
    }

    it('should render error message when onGetErrorMessage returns a string', () => {
      function validator(value: string): string {
        return value.length > 3 ? errorMessage : '';
      }

      const renderedDOM: HTMLElement = renderIntoDocument(
        <TextFieldBase label="text-field-label" value="whatever value" onGetErrorMessage={validator} />
      );

      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
      ReactTestUtils.Simulate.change(inputDOM, mockEvent('the input value'));

      // The value is delayed to validate, so it must to query error message after a while.
      return delay(250).then(() => assertErrorMessage(renderedDOM, errorMessage));
    });

    it('should render error message when onGetErrorMessage returns a Promise<string>', () => {
      function validator(value: string): Promise<string> {
        return Promise.resolve(value.length > 3 ? errorMessage : '');
      }

      const renderedDOM: HTMLElement = renderIntoDocument(
        <TextFieldBase label="text-field-label" value="whatever value" onGetErrorMessage={validator} />
      );

      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
      ReactTestUtils.Simulate.change(inputDOM, mockEvent('the input value'));

      // The value is delayed to validate, so it must to query error message after a while.
      return delay(250).then(() => assertErrorMessage(renderedDOM, errorMessage));
    });

    it('should render error message on first render when onGetErrorMessage returns a string', () => {
      const renderedDOM: HTMLElement = renderIntoDocument(
        <TextFieldBase
          label="text-field-label"
          value="whatever value"
          // tslint:disable-next-line:jsx-no-lambda
          onGetErrorMessage={() => errorMessage}
        />
      );

      return delay(20).then(() => assertErrorMessage(renderedDOM, errorMessage));
    });

    it('should render error message on first render when onGetErrorMessage returns a Promise<string>', () => {
      const renderedDOM: HTMLElement = renderIntoDocument(
        <TextFieldBase
          label="text-field-label"
          value="whatever value"
          // tslint:disable-next-line:jsx-no-lambda
          onGetErrorMessage={() => Promise.resolve(errorMessage)}
        />
      );

      // The Promise based validation need to assert with async pattern.
      return delay(20).then(() => assertErrorMessage(renderedDOM, errorMessage));
    });

    it('should not render error message when onGetErrorMessage return an empty string', () => {
      const renderedDOM: HTMLElement = renderIntoDocument(
        <TextField
          label="text-field-label"
          value="whatever value"
          // tslint:disable-next-line:jsx-no-lambda
          onGetErrorMessage={() => ''}
        />
      );

      delay(20).then(() => assertErrorMessage(renderedDOM, /* exist */ false));
    });

    it('should not render error message when no value is provided', () => {
      let actualValue: string | undefined = undefined;

      const renderedDOM: HTMLElement = renderIntoDocument(
        <TextField
          label="text-field-label"
          // tslint:disable-next-line:jsx-no-lambda
          onGetErrorMessage={(value: string) => (actualValue = value)}
        />
      );

      delay(20).then(() => assertErrorMessage(renderedDOM, /* exist */ false));
      expect(actualValue).toEqual('');
    });

    it('should update error message when receive new value from props', () => {
      function validator(value: string): string {
        return value.length > 3 ? errorMessage : '';
      }

      const renderedDOM: HTMLElement = renderIntoDocument(
        <TextFieldBase value="initial value" onGetErrorMessage={validator} />
      );

      delay(20).then(() => assertErrorMessage(renderedDOM, errorMessage));

      ReactDOM.render(<TextField value="" onGetErrorMessage={validator} />, renderedDOM.parentElement);

      return delay(250).then(() => assertErrorMessage(renderedDOM, /* exist */ false));
    });

    it('should trigger validation only on focus', () => {
      let validationCallCount = 0;
      const validatorSpy = (value: string) => {
        validationCallCount++;
        return value.length > 3 ? errorMessage : '';
      };

      const renderedDOM: HTMLElement = renderIntoDocument(
        <TextFieldBase value="initial value" onGetErrorMessage={validatorSpy} validateOnFocusIn />
      );

      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
      ReactTestUtils.Simulate.input(inputDOM, mockEvent('the input value'));
      expect(validationCallCount).toEqual(1);

      ReactTestUtils.Simulate.focus(inputDOM);
      expect(validationCallCount).toEqual(2);

      ReactTestUtils.Simulate.input(inputDOM, mockEvent('the input '));
      ReactTestUtils.Simulate.input(inputDOM, mockEvent('the input value'));
      ReactTestUtils.Simulate.focus(inputDOM);
      expect(validationCallCount).toEqual(3);
    });

    it('should trigger validation only on blur', () => {
      let validationCallCount = 0;
      const validatorSpy = (value: string) => {
        validationCallCount++;
        return value.length > 3 ? errorMessage : '';
      };

      const renderedDOM: HTMLElement = renderIntoDocument(
        <TextFieldBase value="initial value" onGetErrorMessage={validatorSpy} validateOnFocusOut />
      );

      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
      ReactTestUtils.Simulate.input(inputDOM, mockEvent('the input value'));
      expect(validationCallCount).toEqual(1);

      ReactTestUtils.Simulate.blur(inputDOM);
      expect(validationCallCount).toEqual(2);

      ReactTestUtils.Simulate.input(inputDOM, mockEvent('the input va'));
      ReactTestUtils.Simulate.input(inputDOM, mockEvent('the input value'));

      ReactTestUtils.Simulate.blur(inputDOM);
      expect(validationCallCount).toEqual(3);
    });

    it('should trigger validation on both blur and focus', () => {
      let validationCallCount = 0;
      const validatorSpy = (value: string) => {
        validationCallCount++;
        return value.length > 3 ? errorMessage : '';
      };

      const renderedDOM: HTMLElement = renderIntoDocument(
        <TextFieldBase value="initial value" onGetErrorMessage={validatorSpy} validateOnFocusOut validateOnFocusIn />
      );

      const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];
      ReactTestUtils.Simulate.input(inputDOM, mockEvent('value before focus'));
      expect(validationCallCount).toEqual(1);

      ReactTestUtils.Simulate.focus(inputDOM);
      expect(validationCallCount).toEqual(2);

      ReactTestUtils.Simulate.input(inputDOM, mockEvent('value before foc'));
      ReactTestUtils.Simulate.input(inputDOM, mockEvent('value before focus'));
      ReactTestUtils.Simulate.focus(inputDOM);
      expect(validationCallCount).toEqual(3);

      ReactTestUtils.Simulate.input(inputDOM, mockEvent('value before blur'));
      ReactTestUtils.Simulate.blur(inputDOM);
      expect(validationCallCount).toEqual(4);

      ReactTestUtils.Simulate.input(inputDOM, mockEvent('value before bl'));
      ReactTestUtils.Simulate.input(inputDOM, mockEvent('value before blur'));
      ReactTestUtils.Simulate.blur(inputDOM);
      expect(validationCallCount).toEqual(5);
    });

    it('should not trigger validation on component mount', () => {
      let validationCallCount = 0;
      const validatorSpy = (value: string) => {
        validationCallCount++;
        return '';
      };

      renderIntoDocument(<TextField value="initial value" onGetErrorMessage={validatorSpy} validateOnLoad={false} />);
      expect(validationCallCount).toEqual(0);
    });
  });

  it('can render a default value', () => {
    const textField = mount(<TextField defaultValue="initial value" />);

    expect(textField.getDOMNode().querySelector('input')).toBeTruthy();
    expect(textField.getDOMNode().querySelector('input')!.value).toEqual('initial value');
  });

  it('can render a default value as a textarea', () => {
    const textField = mount(<TextField defaultValue="initial value" multiline={true} />);

    expect(textField.getDOMNode().querySelector('textarea')).toBeTruthy();
    expect(textField.getDOMNode().querySelector('textarea')!.value).toEqual('initial value');
  });

  it('can render description text', () => {
    const testDescription = 'A custom description';
    const textField = mount(<TextField description={testDescription} />);

    expect(textField.getDOMNode().querySelector('.ms-TextField-description')).toBeTruthy();
    expect(textField.getDOMNode().querySelector('.ms-TextField-description')!.textContent).toEqual(testDescription);
  });

  it('can render a static custom description without description text', () => {
    let callCount = 0;
    const onRenderDescription = () => {
      callCount++;
      return <strong>A custom description</strong>;
    };

    renderIntoDocument(<TextField onRenderDescription={onRenderDescription} />);

    expect(callCount).toEqual(1);
  });

  it('should call onChanged handler for input change', () => {
    let callCount = 0;
    const onChangedSpy = (value: string) => {
      callCount++;
    };

    const renderedDOM: HTMLElement = renderIntoDocument(
      <TextFieldBase
        defaultValue="initial value"
        onChanged={onChangedSpy}
        // tslint:disable-next-line:jsx-no-lambda
        onGetErrorMessage={value => (value.length > 0 ? '' : 'error')}
      />
    );

    expect(callCount).toEqual(0);
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    ReactTestUtils.Simulate.input(inputDOM, mockEvent('value change'));
    ReactTestUtils.Simulate.change(inputDOM, mockEvent('value change'));
    expect(callCount).toEqual(1);

    ReactTestUtils.Simulate.input(inputDOM, mockEvent(''));
    ReactTestUtils.Simulate.change(inputDOM, mockEvent(''));
    expect(callCount).toEqual(2);
  });

  it('should not call onChanged when initial value is undefined and input change is an empty string', () => {
    let callCount = 0;
    const onChangedSpy = (value: string) => {
      callCount++;
    };

    const renderedDOM: HTMLElement = renderIntoDocument(<TextFieldBase onChanged={onChangedSpy} />);

    expect(callCount).toEqual(0);
    const inputDOM: HTMLInputElement = renderedDOM.getElementsByTagName('input')[0];

    ReactTestUtils.Simulate.input(inputDOM, mockEvent(''));
    ReactTestUtils.Simulate.change(inputDOM, mockEvent(''));
    expect(callCount).toEqual(0);
  });

  it('should select a range of text', () => {
    const initialValue = 'initial value';
    const textFieldRef = createRef<ITextField>();

    const onSelect = () => {
      const selectedText = window.getSelection().toString();
      expect(selectedText).toEqual(initialValue);
    };

    renderIntoDocument(<TextField componentRef={textFieldRef} defaultValue={initialValue} onSelect={onSelect} />);

    textFieldRef.current!.setSelectionRange(0, initialValue.length);
  });
});
