import * as React from 'react';
import { Checkbox } from '@fluentui/react-checkbox';
import { Stack } from '@fluentui/react/lib/Stack';

// Used to add spacing between example checkboxes
const stackTokens = { childrenGap: 10 };

export const CheckboxBasicExample: React.FunctionComponent = () => {
  // These checkboxes are uncontrolled because they don't set the `checked` prop.
  console.log('render checkbox');

  return (
    <Stack tokens={stackTokens}>
      <Checkbox label="Unchecked checkbox (uncontrolled)" onChange={_onChange} />

      <Checkbox label="Checked checkbox (uncontrolled)" defaultChecked onChange={_onChange} />

      <Checkbox label="Disabled checkbox" disabled />

      <Checkbox label="Disabled checked checkbox" disabled defaultChecked />
    </Stack>
  );
};

function _onChange(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, isChecked?: boolean) {
  console.log(`The option has been changed to ${isChecked}.`);
}
