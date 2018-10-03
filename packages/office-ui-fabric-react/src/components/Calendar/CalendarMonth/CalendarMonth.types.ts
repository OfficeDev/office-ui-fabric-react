import { IBaseProps, IRefObject, IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities';
import { ICalendarStrings, ICalendarIconStrings, ICalendarFormatDateCallbacks } from 'office-ui-fabric-react/lib/Calendar';
import { IStyle, ITheme } from '@uifabric/styling';

export interface ICalendarMonth {
  focus(): void;
}

export interface ICalendarMonthProps extends IBaseProps<ICalendarMonth> {
  /**
   * Optional callback to access the ICalendarMonth interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: IRefObject<ICalendarMonth>;

  /**
   * Customized styles for the calendar month component
   */
  styles?: IStyleFunctionOrObject<ICalendarMonthStyleProps, ICalendarMonthStyles>;

  /**
   * Theme (provided through customization).
   */
  theme?: ITheme;

  /**
   * Localized strings to use in the Calendar
   */
  strings: ICalendarStrings;

  /**
   * The currently selected date
   */
  selectedDate: Date;

  /**
   * The currently navigated date
   */
  navigatedDate: Date;

  /**
   * Callback issued when a month is selected
   * @param date - The date the user selected
   * @param selectedDateRangeArray - The resultant list of dates that are selected based on the date range type set for the component.
   */
  onSelectDate?: (date: Date, selectedDateRangeArray?: Date[]) => void;

  /**
   * Callback issued when the year is navigated
   * @param date - The date that is navigated to
   * @param focusOnNavigatedDay - Whether to set the focus to the navigated date.
   */
  onNavigateDate: (date: Date, focusOnNavigatedDay: boolean) => void;

  /**
   * Customize navigation icons using ICalendarIconStrings
   */
  navigationIcons?: ICalendarIconStrings;

  /**
   * Value of today. If null, current time in client machine will be used.
   */
  today?: Date;

  /**
   * Callback function when the header is selected
   * @param focus whether to set focus when executing the callback
   */
  onHeaderSelect?: (focus: boolean) => void;

  /**
   * Apply additional formating to dates, for example localized date formatting.
   */
  dateTimeFormatter?: ICalendarFormatDateCallbacks;

  /**
   * If set the Calendar will not allow navigation to or selection of a date earlier than this value.
   */
  minDate?: Date;

  /**
   * If set the Calendar will not allow navigation to or selection of a date later than this value.
   */
  maxDate?: Date;

  /**
   * Whether the month picker should highlight the current month
   * @defaultvalue false
   */
  highlightCurrentMonth?: boolean;

  /**
   * Whether the month picker should highlight the selected month
   * @defaultvalue false
   */
  highlightSelectedMonth?: boolean;

  /**
   * Allows all dates and buttons to be focused, including disabled ones
   * @defaultvalue false
   */
  allFocusable?: boolean;

  /**
   * Additional CSS class(es) to apply to the CalendarMonth.
   */
  className?: string;
}


export interface ICalendarMonthStyleProps {
  /**
   * Theme provided by High-Order Component.
   */
  theme: ITheme;

  /**
   * Accept custom classNames
   */
  className?: string;

  /**
   * Whether the header can be clicked
   */
  hasHeaderClickCallback?: boolean;

  /**
   * Whether the month picker should highlight the current month
   */
  highlightCurrentMonth?: boolean;

  /**
   * Whether the month picker should highlight the selected month
   */
  highlightSelectedMonth?: boolean;
}

export interface ICalendarMonthStyles {
  /**
   * Style for the root element.
   */
  root: IStyle;

  headerContainer: IStyle;

  currentYearButton: IStyle;

  yearNavigationButtonsContainer: IStyle;

  yearNavigationButton: IStyle;

  monthGridContainer: IStyle;

  monthButton: IStyle;

  currentMonth: IStyle;

  selectedMonth: IStyle;

  disabledStyle: IStyle;
}
