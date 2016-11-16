import * as React from 'react';
import { DatePicker } from './DatePicker';

export interface IDatePickerProps extends React.Props<DatePicker> {
  /**
   * Callback issued when a date is selected
   */
  onSelectDate?: (date: Date) => void;

  /**
   * Callback issued when date picker is closed
   */
  onDismiss?: () => void;

  /**
   * Label for the DatePicker
   */
  label?: string;

  /**
   * Whether the DatePicker is a required field or not
   * @defaultvalue false
   */
  isRequired?: boolean;

  /**
   * Aria Label for TextField of the DatePicker for screen reader users.
   */
  ariaLabel?: string;

  /**
   * Whether the month picker is shown beside the day picker or hidden.
   * @defaultvalue true
   */
  isMonthPickerVisible?: boolean;

  /**
   * Whether the DatePicker allows input a date string directly or not
   * @defaultvalue false
   */
  allowTextInput?: boolean;

  /**
   * Whether the DatePicker should hide the TextField
   * @defaultvalue false
   */
  hideTextField?: boolean;

  /**
   * Whether the DatePicker should be seen
   * This field is used when hideTextField is true and an outside action
   * (like a button click) is used to open the date picker
   */
  showDatePicker?: boolean;

  /**
   * Placeholder text for the DatePicker
   */
  placeholder?: string;

  /**
   * Default value of the DatePicker, if any
   */
  value?: Date;

  /**
   * Optional method to format the chosen date to a string to display in the DatePicker
   * @defaultvalue date.toString()
   */
  formatDate?: (date: Date) => string;

  /**
   * Optional method to parse the text input value to date, it is only useful when allowTextInput is set to true
   * @defaultvalue new Date(Date.parse(dateStr))
   */
  parseDateFromString?: (dateStr: string) => Date;

  /**
   * The first day of the week for your locale.
   * @defaultvalue DayOfWeek.Sunday
   */
  firstDayOfWeek?: DayOfWeek;

  /**
   * Localized strings to use in the DatePicker
   */
  strings: IDatePickerStrings;
}

export enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export interface IDatePickerStrings {
  /**
   * An array of strings for the full names of months.
   * The array is 0-based, so months[0] should be the full name of January.
   */
  months: string[];

  /**
   * An array of strings for the short names of months.
   * The array is 0-based, so shortMonths[0] should be the short name of January.
   */
  shortMonths: string[];

  /**
   * An array of strings for the full names of days of the week.
   * The array is 0-based, so days[0] should be the full name of Sunday.
   */
  days: string[];

  /**
   * An array of strings for the initials of the days of the week.
   * The array is 0-based, so days[0] should be the initial of Sunday.
   */
  shortDays: string[];

  /**
   * String to render for button to direct the user to today's date.
   */
  goToToday: string;

  /**
   * Error message to render for TextField if isRequired validation fails.
   */
  isRequiredErrorMessage?: string;

  /**
   * Error message to render for TextField if input date string parsing fails.
   */
  invalidInputErrorMessage?: string;
}
