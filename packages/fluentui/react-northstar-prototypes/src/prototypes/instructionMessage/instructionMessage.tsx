import * as React from 'react';
import * as _ from 'lodash';
import { useFluentContext } from '@fluentui/react-bindings';
import { Box, Ref } from '@fluentui/react-northstar';

interface InstructionMessageProps {
  message: string;
  role?: string;
  'aria-label'?: string;
}

const InstructionMessage: React.FunctionComponent<InstructionMessageProps> = props => {
  const { children, message, ...rest } = props;

  const narrationHappened = React.useRef(false);
  const instructionRef = React.useRef<HTMLElement>();
  const timeoutMessageNarrate = React.useRef<number>();
  const timeoutMessageRemove = React.useRef<number>();
  const context = useFluentContext();
  const areaFocusableElements = () =>
    instructionRef?.current?.querySelectorAll('a, button, input, textarea, select, details, [tabindex]');

  const narrate = (instructionMessage, priority = 'polite') => {
    const element = document.createElement('div');
    element.setAttribute(
      'style',
      'position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;',
    );
    element.setAttribute('aria-live', priority);
    document.body.appendChild(element);

    timeoutMessageNarrate.current = context.target.defaultView.setTimeout(() => {
      element.innerText = instructionMessage;
    }, 2000);

    timeoutMessageRemove.current = context.target.defaultView.setTimeout(() => {
      document.body.removeChild(element);
    }, 2300);
  };

  const handleFocus = React.useCallback(
    event => {
      const focElements = areaFocusableElements();
      if (!narrationHappened.current && focElements && Array.from(focElements).includes(event.target)) {
        narrate(message);
        narrationHappened.current = true;
      }
    },
    [areaFocusableElements],
  );

  const handleBlur = React.useCallback(
    event => {
      const focElements = areaFocusableElements();
      if (areaFocusableElements && !Array.from(focElements).includes(event.relatedTarget)) {
        clearTimeout(timeoutMessageNarrate.current);
        narrationHappened.current = false;
      }
    },
    [areaFocusableElements],
  );

  return (
    <Ref innerRef={instructionRef}>
      <Box onFocus={handleFocus} onBlur={handleBlur} {...rest}>
        {children}
      </Box>
    </Ref>
  );
};

export default InstructionMessage;
