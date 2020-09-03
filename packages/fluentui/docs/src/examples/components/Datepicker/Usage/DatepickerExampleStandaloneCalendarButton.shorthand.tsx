import { Datepicker, DatepickerType, Button } from '@fluentui/react-northstar';
import { formatMonthDayYear, DEFAULT_CALENDAR_STRINGS } from '@fluentui/date-time-utilities';
import * as React from 'react';

const DatepickerExampleStandaloneCalendarButton = () => {
  return (
    <Datepicker
      onDateChange={(e, v) => {
        alert(`You selected '${formatMonthDayYear(v.value, DEFAULT_CALENDAR_STRINGS)}'.`);
      }}
      today={new Date(2020, 7, 30, 0, 0, 0, 0)}
      type={DatepickerType.ButtonOnly}
      popup={{
        trigger: <Button title="Open calendar" content="Click to Open " />,
      }}
    />
  );
};
export default DatepickerExampleStandaloneCalendarButton;
