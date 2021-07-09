import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { CheckboxState } from './Checkbox.types';
import { checkboxShorthandProps } from './useCheckbox';

/**
 * Render the final JSX of Checkbox
 */
export const renderCheckbox = (state: CheckboxState) => {
  const { slots, slotProps } = getSlots(state, checkboxShorthandProps);

  return (
    <slots.root {...slotProps.root}>
      {state.labelPosition === 'start' && <slots.label {...slotProps.label} />}
      <div className={state.checkboxClassName}>
        <slots.indicator {...slotProps.indicator} />
        <slots.input {...slotProps.input} />
      </div>
      {state.labelPosition === 'end' && <slots.label {...slotProps.label} />}
    </slots.root>
  );
};
