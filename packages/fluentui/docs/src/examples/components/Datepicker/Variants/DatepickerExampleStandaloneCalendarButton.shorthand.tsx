import { Datepicker, Button } from '@fluentui/react-northstar';
import * as React from 'react';

const DatepickerExampleStandaloneCalendarButton = () => {
  return (
    <Datepicker
      onDateChange={(e, v) => {
        alert(`You picked '${v.value}'.`);
      }}
      today={new Date(2020, 7, 30, 0, 0, 0, 0)}
      iconOnly
      popup={{
        trigger: <Button title="Open calendar" content="Click to Open " />,
      }}
    />
  );
};
export default DatepickerExampleStandaloneCalendarButton;
