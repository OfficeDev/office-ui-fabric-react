import * as React from 'react';
import { DatePicker } from '@uifabric/date-time';
import './DatePicker.Examples.scss';

const min = new Date('2020-04-01');
const max = new Date('2020-04-03');

const description = `DatePicker controlled using useState with min/max validation.
${min.toLocaleDateString()} - ${max.toLocaleDateString()}.`;

const ControlledDatePicker = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date('2020-04-03'));
  const selectedDateCallback = (newDate: Date | null | undefined) => setDate(newDate || undefined);
  return (
    <div>
      <DatePicker allowTextInput value={date} onSelectDate={selectedDateCallback} minDate={min} maxDate={max} />
      <div>Selected date: {date?.toLocaleDateString()}</div>
    </div>
  );
};

export const DatePickerControlledExample: React.FC = () => (
  <div className="docs-DatePickerExample">
    <p>{description}</p>
    <ControlledDatePicker />
  </div>
);
