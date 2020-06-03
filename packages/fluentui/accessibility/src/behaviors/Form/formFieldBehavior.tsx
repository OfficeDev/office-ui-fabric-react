import { Accessibility, AccessibilityDefinition } from '../../types';

/**
 * @specification
 */
const formFieldBehavior: Accessibility<FormFieldBehaviorProps> = props => {
  const definition: AccessibilityDefinition = {
    attributes: {
      root: {},
      control: {
        ...(props.hasErrorMessage && { 'aria-invalid': true }),
        ...(props.messageId && { 'aria-labelledby': `${props.id} ${props.messageId}` }),
      },
      message: {
        ...(props.hasErrorMessage && { role: 'alert' }),
      },
    },
  };

  return definition;
};

export default formFieldBehavior;

export type FormFieldBehaviorProps = {
  /** Field has error message */
  hasErrorMessage?: boolean;

  /** Field message have a id */
  messageId?: string;

  id?: string;
};
