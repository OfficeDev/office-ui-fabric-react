import * as React from 'react';
import { DatePicker, DayOfWeek, IDatePickerStrings } from '@fluentui/react/lib/DatePicker';
import { addMonths, addYears } from '@fluentui/date-time-utilities';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';

const today: Date = new Date(Date.now());
const minDate: Date = addMonths(today, -1);
const maxDate: Date = addYears(today, 1);
const description = `When date boundaries are set (via minDate and maxDate props) the DatePicker will not allow
out-of-bounds dates to be picked or entered. In this example, the allowed dates are
${minDate.toLocaleDateString()}-${maxDate.toLocaleDateString()}`;

const DayPickerStrings: IDatePickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
  monthPickerHeaderAriaLabel: '{0}, select to change the year',
  yearPickerHeaderAriaLabel: '{0}, select to change the month',

  isRequiredErrorMessage: 'Field is required.',

  invalidInputErrorMessage: 'Invalid date format.',

  isOutOfBoundsErrorMessage: `Date must be between ${minDate.toLocaleDateString()}-${maxDate.toLocaleDateString()}`,
};

const controlClass = mergeStyleSets({
  control: {
    margin: '0 0 15px 0',
    maxWidth: '300px',
  },
});

const firstDayOfWeek = DayOfWeek.Sunday;

export const DatePickerBoundedExample: React.FC = () => (
  <div>
    <p>{description}</p>
    <DatePicker
      className={controlClass.control}
      isRequired={false}
      firstDayOfWeek={firstDayOfWeek}
      strings={DayPickerStrings}
      placeholder="Select a date..."
      ariaLabel="Select a date"
      minDate={minDate}
      maxDate={maxDate}
      allowTextInput={true}
    />
  </div>
);
