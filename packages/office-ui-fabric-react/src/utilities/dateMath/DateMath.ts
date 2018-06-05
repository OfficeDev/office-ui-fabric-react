import { DayOfWeek, MonthOfYear, FirstWeekOfYear, DateRangeType } from '../dateValues/DateValues';
import TimeConstants from '../dateValues/TimeConstants';
import { assertNever } from '../../Utilities';

/**
 * Returns a date offset from the given date by the specified number of days.
 * @param {Date} date - The origin date
 * @param {number} days - The number of days to offset. 'days' can be negative.
 * @return {Date} A new Date object offset from the origin date by the given number of days
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date.getTime());
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Returns a date offset from the given date by the specified number of weeks.
 * @param {Date} date - The origin date
 * @param {number} weeks - The number of weeks to offset. 'weeks' can be negative.
 * @return {Date} A new Date object offset from the origin date by the given number of weeks
 */
export function addWeeks(date: Date, weeks: number): Date {
  return addDays(date, weeks * TimeConstants.DaysInOneWeek);
}

/**
 * Returns a date offset from the given date by the specified number of months.
 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param {Date} date - The origin date
 * @param {number} months - The number of months to offset. 'months' can be negative.
 * @return {Date} A new Date object offset from the origin date by the given number of months
 */
export function addMonths(date: Date, months: number): Date {
  let result = new Date(date.getTime());
  const newMonth = result.getMonth() + months;
  result.setMonth(newMonth);

  // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
  // Loop until we back up to a day the new month has.
  // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
  if (
    result.getMonth() !==
    ((newMonth % TimeConstants.MonthInOneYear) + TimeConstants.MonthInOneYear) % TimeConstants.MonthInOneYear
  ) {
    result = addDays(result, -result.getDate());
  }
  return result;
}

/**
 * Returns a date offset from the given date by the specified number of years.
 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param {Date} date - The origin date
 * @param {number} years - The number of years to offset. 'years' can be negative.
 * @return {Date} A new Date object offset from the origin date by the given number of years
 */
export function addYears(date: Date, years: number): Date {
  let result = new Date(date.getTime());
  result.setFullYear(date.getFullYear() + years);

  // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
  // Loop until we back up to a day the new month has.
  // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
  if (
    result.getMonth() !==
    ((date.getMonth() % TimeConstants.MonthInOneYear) + TimeConstants.MonthInOneYear) % TimeConstants.MonthInOneYear
  ) {
    result = addDays(result, -result.getDate());
  }
  return result;
}

/**
 * Returns a date that is the first day of the month of the provided date.
 * @param {Date} date - The origin date
 * @return {Date} A new Date object with the day set to the first day of the month.
 */
export function getMonthStart(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
}

/**
 * Returns a date that is the last day of the month of the provided date.
 * @param {Date} date - The origin date
 * @return {Date} A new Date object with the day set to the last day of the month.
 */
export function getMonthEnd(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0, 0);
}

/**
 * Returns a date that is the first day of the year of the provided date.
 * @param {Date} date - The origin date
 * @return {Date} A new Date object with the day set to the first day of the year.
 */
export function getYearStart(date: Date): Date {
  return new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0);
}

/**
 * Returns a date that is the last day of the year of the provided date.
 * @param {Date} date - The origin date
 * @return {Date} A new Date object with the day set to the last day of the year.
 */
export function getYearEnd(date: Date): Date {
  return new Date(date.getFullYear() + 1, 0, 0, 0, 0, 0, 0);
}

/**
 * Returns a date that is a copy of the given date, aside from the month changing to the given month.
 *  The method tries to preserve the day-of-month; however, if the new month does not have enough days
 * to contain the original day-of-month, we'll use the last day of the new month.
 * @param {Date} date - The origin date
 * @param {number} month - The 0-based index of the month to set on the date.
 * @return {Date} A new Date object with the given month set.
 */
export function setMonth(date: Date, month: number): Date {
  return addMonths(date, month - date.getMonth());
}

/**
 * Compares two dates, and returns true if the two dates (not accounting for time-of-day) are equal.
 * @return {boolean} True if the two dates represent the same date (regardless of time-of-day), false otherwise.
 */
export function compareDates(date1: Date, date2: Date): boolean {
  if (!date1 && !date2) {
    return true;
  } else if (!date1 || !date2) {
    return false;
  } else {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}

/**
 * Compare the date parts of two dates
 * @param {Date} date1 - The first date to compare
 * @param {Date} date2 - The second date to compare
 * @returns {Number} A negative value if date1 is earlier than date2, 0 if the dates are equal, or a positive value
 * if date1 is later than date2.
 */
export function compareDatePart(date1: Date, date2: Date): Number {
  return getDatePartHashValue(date1) - getDatePartHashValue(date2);
}

/**
 * Gets the date range array including the specified date. The date range array is calculated as the list
 * of dates accounting for the specified first day of the week and date range type.
 * @param {Date} date - The input date
 * @param {DateRangeType} dateRangeType - The desired date range type, i.e., day, week, month, etc.
 * @param {DayOfWeek} firstDayOfWeek - The first day of the week.
 * @param {DayOfWeek[]} workWeekDays - The allowed days in work week. If not provided, assumes all days are allowed.
 * @returns {Date[]} An array of dates representing the date range containing the specified date.
 */
export function getDateRangeArray(
  date: Date,
  dateRangeType: DateRangeType,
  firstDayOfWeek: DayOfWeek,
  workWeekDays?: DayOfWeek[]
): Date[] {
  const datesArray = new Array<Date>();
  let startDate: Date;
  let endDate = null;

  if (!workWeekDays) {
    workWeekDays = [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday];
  }

  switch (dateRangeType) {
    case DateRangeType.Day:
      startDate = getDatePart(date);
      endDate = addDays(startDate, 1);
      break;

    case DateRangeType.Week:
    case DateRangeType.WorkWeek:
      startDate = getStartDateOfWeek(getDatePart(date), firstDayOfWeek);
      endDate = addDays(startDate, TimeConstants.DaysInOneWeek);
      break;

    case DateRangeType.Month:
      startDate = new Date(date.getFullYear(), date.getMonth(), 1);
      endDate = addMonths(startDate, 1);
      break;

    default:
      return assertNever(dateRangeType);
  }

  // Populate the dates array with the dates in range
  let nextDate = startDate;

  do {
    if (dateRangeType !== DateRangeType.WorkWeek) {
      // push all days not in work week view
      datesArray.push(nextDate);
    } else if (workWeekDays.includes(nextDate.getDay())) {
      datesArray.push(nextDate);
    }
    nextDate = addDays(nextDate, 1);
  } while (!compareDates(nextDate, endDate));

  return datesArray;
}

/**
 * Checks whether the specified date is in the given date range.
 * @param {Date} date - The origin date
 * @param {Date[]} dateRange - An array of dates to do the lookup on
 * @returns {bool} True if the date matches one of the dates in the specified array, false otherwise.
 */
export function isInDateRangeArray(date: Date, dateRange: Date[]): boolean {
  for (const dateInRange of dateRange) {
    if (compareDates(date, dateInRange)) {
      return true;
    }
  }
  return false;
}

/**
 * Returns the week number for a date.
 * Week numbers are 1 - 52 (53) in a year
 * @param {navigatedDate} Date - A date to find the week number for.
 * @param {firstDayOfWeek} DayOfWeek - The first day of the week (0-6, Sunday = 0)
 * @param {firstWeekOfYear} FirstWeekOfYear - The first week of the year (1-2)
 * @return {weeksArray} The weeks number array for the current month.
 */
export function getWeekNumbersInMonth(
  weeksInMonth: number,
  firstDayOfWeek: DayOfWeek,
  firstWeekOfYear: FirstWeekOfYear,
  navigatedDate: Date
): number[] {
  const selectedYear = navigatedDate.getFullYear();
  const selectedMonth = navigatedDate.getMonth();
  let dayOfMonth = 1;
  const fistDayOfMonth = new Date(selectedYear, selectedMonth, dayOfMonth);
  const endOfFirstWeek =
    dayOfMonth +
    (firstDayOfWeek + TimeConstants.DaysInOneWeek - 1) -
    adjustWeekDay(firstDayOfWeek, fistDayOfMonth.getDay());
  let endOfWeekRange = new Date(selectedYear, selectedMonth, endOfFirstWeek);
  dayOfMonth = endOfWeekRange.getDate();

  const weeksArray = [];
  for (let i = 0; i < weeksInMonth; i++) {
    // Get week number for end of week
    weeksArray.push(getWeekNumber(endOfWeekRange, firstDayOfWeek, firstWeekOfYear));
    dayOfMonth += TimeConstants.DaysInOneWeek;
    endOfWeekRange = new Date(selectedYear, selectedMonth, dayOfMonth);
  }
  return weeksArray;
}

/**
 * Returns the week number for a date.
 * Week numbers are 1 - 52 (53) in a year
 * @param {Date} date - A date to find the week number for.
 * @param {DayOfWeek} firstDayOfWeek - The first day of the week (0-6, Sunday = 0)
 * @param {firstWeekOfYear} firstWeekOfYear - The first week of the year (1-2)
 * @return {Number} The week's number in the year.
 */
export function getWeekNumber(date: Date, firstDayOfWeek: DayOfWeek, firstWeekOfYear: FirstWeekOfYear): number {
  // First four-day week of the year - minumum days count
  const fourDayWeek = 4;

  switch (firstWeekOfYear) {
    case FirstWeekOfYear.FirstFullWeek:
      return getWeekOfYearFullDays(date, firstDayOfWeek, TimeConstants.DaysInOneWeek);

    case FirstWeekOfYear.FirstFourDayWeek:
      return getWeekOfYearFullDays(date, firstDayOfWeek, fourDayWeek);

    default:
      return getFirstDayWeekOfYear(date, firstDayOfWeek);
  }
}

/**
 * Gets a new date with the time portion zeroed out, i.e., set to midnight
 * @param {Date} date - The origin date
 * @returns {Date} A new date with the time set to midnight
 */
function getDatePart(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/**
 * Gets the date for the first day of the week based on the given date assuming
 * the specified first day of the week.
 * @param {Date} date - The date to find the beginning of the week date for.
 * @return {Date} A new date object representing the first day of the week containing the input date.
 */
function getStartDateOfWeek(date: Date, firstDayOfWeek: DayOfWeek): Date {
  let daysOffset = firstDayOfWeek - date.getDay();
  if (daysOffset > 0) {
    // If first day of week is > date, go 1 week back, to ensure resulting date is in the past.
    daysOffset -= TimeConstants.DaysInOneWeek;
  }
  return addDays(date, daysOffset);
}

/**
 * Helper function to assist in date comparisons
 */
function getDatePartHashValue(date: Date): number {
  // Generate date hash value created as sum of Date (up to 31 = 5 bits), Month (up to 11 = 4 bits) and Year.
  /* tslint:disable:no-bitwise */
  return date.getDate() + (date.getMonth() << 5) + (date.getFullYear() << 9);
  /* tslint:enable:no-bitwise */
}

/**
 * Helper function for getWeekNumber.
 * Returns week number for a date
 * @param {date} Date - current selected date.
 * @param {firstDayOfWeek} DayOfWeek - The first day of week (0-6, Sunday = 0)
 * @param {numberOfFullDays} number - week settings.
 * @return {Number} The week's number in the year.
 */
function getWeekOfYearFullDays(date: Date, firstDayOfWeek: DayOfWeek, numberOfFullDays: number): number {
  const dayOfYear = getDayOfYear(date) - 1;
  let num = date.getDay() - (dayOfYear % TimeConstants.DaysInOneWeek);

  const lastDayOfPrevYear = new Date(date.getFullYear() - 1, MonthOfYear.December, 31);
  const daysInYear = getDayOfYear(lastDayOfPrevYear) - 1;

  let num2 = (firstDayOfWeek - num + 2 * TimeConstants.DaysInOneWeek) % TimeConstants.DaysInOneWeek;
  if (num2 !== 0 && num2 >= numberOfFullDays) {
    num2 -= TimeConstants.DaysInOneWeek;
  }

  let num3 = dayOfYear - num2;
  if (num3 < 0) {
    num -= daysInYear % TimeConstants.DaysInOneWeek;
    num2 = (firstDayOfWeek - num + 2 * TimeConstants.DaysInOneWeek) % TimeConstants.DaysInOneWeek;
    if (num2 !== 0 && num2 + 1 >= numberOfFullDays) {
      num2 -= TimeConstants.DaysInOneWeek;
    }

    num3 = daysInYear - num2;
  }

  return Math.floor(num3 / TimeConstants.DaysInOneWeek + 1);
}

/**
 * Helper function for getWeekNumber.
 * Returns week number for a date
 * @param {date} Date - current selected date.
 * @param {firstDayOfWeek} DayOfWeek - The first day of week (0-6, Sunday = 0)
 * @return {Number} The week's number in the year.
 */
function getFirstDayWeekOfYear(date: Date, firstDayOfWeek: number): number {
  const num = getDayOfYear(date) - 1;
  const num2 = date.getDay() - (num % TimeConstants.DaysInOneWeek);
  const num3 = (num2 - firstDayOfWeek + 2 * TimeConstants.DaysInOneWeek) % TimeConstants.DaysInOneWeek;

  return Math.floor((num + num3) / TimeConstants.DaysInOneWeek + 1);
}

/**
 * Helper function for getWeekNumber.
 * Returns adjusted week day number when firstDayOfWeek is other than Sunday
 * For Week Day Number comparison checks
 * @param {firstDayOfWeek} DayOfWeek - The first day of week (0-6, Sunday = 0)
 * @param {dateWeekDay} DayOfWeek - shifts number forward to 1 week in case passed as true
 * @return {DayOfWeek} The day of week adjusted to firstDayOfWeek. E.g. when FirstDyOfWeek is Monday (1), Sunday becomes = 7 (7 > 1).
 */
function adjustWeekDay(firstDayOfWeek: DayOfWeek, dateWeekDay: DayOfWeek): number {
  return firstDayOfWeek !== DayOfWeek.Sunday && dateWeekDay < firstDayOfWeek
    ? dateWeekDay + TimeConstants.DaysInOneWeek
    : dateWeekDay;
}

/**
 * Returns the day number for a date in a year
 * The number of days since January 1st in the particular year.
 * @param {Date} date - A date to find the day number for.
 * @return {Number} The day's number in the year.
 */
function getDayOfYear(date: Date): number {
  const month = date.getMonth();
  const year = date.getFullYear();
  let daysUntilDate = 0;

  for (let i = 0; i < month; i++) {
    daysUntilDate += daysInMonth(i + 1, year);
  }

  daysUntilDate += date.getDate();

  return daysUntilDate;
}

/**
 * Returns the number of days in the month
 * @param {number} month - The month number to target (months 1-12).
 * @param {number} year - The year to target.
 * @return {Number} The number of days in the month.
 */
function daysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}
