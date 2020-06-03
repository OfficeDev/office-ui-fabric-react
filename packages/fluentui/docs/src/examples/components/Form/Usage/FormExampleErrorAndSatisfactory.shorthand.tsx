import * as React from 'react';
import { Form, Button } from '@fluentui/react-northstar';
import { PresenceAvailableIcon } from '@fluentui/react-icons-northstar';

const fields = [
  {
    label: 'First name',
    name: 'firstName',
    id: 'first-name-shorthand',
    key: 'first-name',
    errorMessage: 'ERROR',
    required: true,
  },
  {
    label: 'Last name',
    name: 'lastName',
    id: 'last-name-shorthand',
    key: 'last-name',
    successIndicator: <PresenceAvailableIcon />,
    required: true,
  },
  { control: { as: Button, content: 'Submit' }, key: 'submit' },
];

const FormExampleErrorAndSatisfactory = () => (
  <Form
    onSubmit={() => {
      alert('Form submitted');
    }}
    fields={fields}
  />
);

export default FormExampleErrorAndSatisfactory;
