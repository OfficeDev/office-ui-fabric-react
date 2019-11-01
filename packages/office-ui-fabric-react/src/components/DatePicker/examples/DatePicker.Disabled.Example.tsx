import * as React from 'react';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { css, classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';
import { datePickerExampleStyles, IDatePickerExampleStyles } from './DatePicker.Examples.Styles';

const DayPickerStrings: IDatePickerStrings = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker'
};

export interface IDatePickerDisabledExampleState {
  firstDayOfWeek?: DayOfWeek;
}

const getClassNames = classNamesFunction<{}, IDatePickerExampleStyles>();
const classnames = getClassNames(datePickerExampleStyles, {});

export class DatePickerDisabledExample extends React.Component<{}, IDatePickerDisabledExampleState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      firstDayOfWeek: DayOfWeek.Sunday
    };
  }

  public render() {
    const { firstDayOfWeek } = this.state;

    return (
      <div className="docs-DatePickerExample">
        <DatePicker
          className={css(classnames.msDatePicker)}
          firstDayOfWeek={firstDayOfWeek}
          strings={DayPickerStrings}
          placeholder="Select a date..."
          ariaLabel="Select a date"
          disabled={true}
        />

        <DatePicker
          className={css(classnames.msDatePicker)}
          label="Disabled (with label)"
          firstDayOfWeek={firstDayOfWeek}
          strings={DayPickerStrings}
          placeholder="Select a date..."
          ariaLabel="Select a date"
          disabled={true}
        />
      </div>
    );
  }
}
