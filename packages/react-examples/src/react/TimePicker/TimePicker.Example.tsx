import * as React from 'react';
import { ComboBox, IComboBox, IComboBoxOption } from '@fluentui/react';
import { TimeConstants } from '@fluentui/date-time-utilities';

// This should be added to TimeConstants
const HOURS_IN_ONE_DAY = 24;

// Can only be numbers between 0-23
interface TimeRange {
  start: number;
  end: number;
}

interface ITimePickerProps {
  /**
   * Label of the component
   */
  label?: string;
  /**
   * Time increments of the options in the dropdown
   */
  increments?: number;
  /**
   * Whether to show seconds in the component
   */
  showSeconds?: boolean;
  /**
   * Whether to show duration indicator for dropdown options;
   */
  durationIndicator?: boolean;
  /**
   * Custom time range to for time options
   */
  // TODO: Decide how this should be handled
  timeRange?: TimeRange;
}

const TimePicker = ({
  label,
  increments = 30,
  showSeconds = false,
  durationIndicator = false,
  timeRange = { start: -1, end: -1 },
}: ITimePickerProps) => {
  const defaultTime = generateDefaultTime(increments, timeRange);
  const optionsCount = getDropdownOptionsCount(increments, timeRange);
  const timePickerOptions: IComboBoxOption[] = Array(optionsCount)
    .fill(0)
    .map((_, index) => ({
      key: index,
      text: `${formatTimeString(addMinutes(defaultTime, increments * index), showSeconds)}${
        durationIndicator && index > 0 ? ` ${getDurationIndicator(index, increments)}` : ''
      }`,
    }));

  const comboBoxRef = React.useRef<IComboBox>(null);

  return (
    <div>
      <ComboBox
        componentRef={comboBoxRef}
        defaultSelectedKey={0}
        label={label}
        allowFreeform
        autoComplete="on"
        options={timePickerOptions}
      />
    </div>
  );
};

export const TimePickerBasicExample: React.FC = () => {
  const timeRange: TimeRange = {
    start: 2,
    end: 20,
  };
  return <TimePicker label={'TimePicker basic example'} durationIndicator timeRange={timeRange} />;
};

const generateDefaultTime = (increments: number, timeRange: TimeRange) => {
  const defaultTime = new Date();
  if (timeRange.start >= 0) {
    defaultTime.setHours(timeRange.start);
  }
  if (!(TimeConstants.MinutesInOneHour % increments)) {
    const minute = roundMinute(defaultTime.getMinutes(), increments);
    if (minute) {
      defaultTime.setMinutes(minute);
    }
  }
  return defaultTime;
};

const roundMinute = (minute: number, increments: number) => {
  if (minute === 0) return minute;
  const times = TimeConstants.MinutesInOneHour / increments;
  let rounded;
  for (let i = 1; i <= times; i++) {
    if (minute > increments * (i - 1) && minute <= increments * i) {
      rounded = increments * i;
      return rounded;
    }
  }
};

const getDurationIndicator = (index: number, increments: number) => {
  let displayHours = '';
  let displayMinutes = '';

  let timeDifferenceInMinutes = index * increments;
  let hours = Math.floor(timeDifferenceInMinutes / 60);
  if (hours >= 1) displayHours = `${hours}h`;
  let minutes = timeDifferenceInMinutes - hours * 60;
  if (minutes >= 1) displayMinutes = `${minutes}m`;

  if (displayHours && displayMinutes) return `(${displayHours} ${displayMinutes})`;
  else if (displayHours) return `(${displayHours})`;
  else if (displayMinutes) return `(${displayMinutes})`;
};

const getDropdownOptionsCount = (increments: number, timeRange: TimeRange) => {
  let hoursInRange = HOURS_IN_ONE_DAY;
  if (timeRange.start >= 0 && timeRange.end >= 0) {
    if (timeRange.start > timeRange.end) hoursInRange = 24 - timeRange.start - timeRange.end;
    else if (timeRange.end > timeRange.start) hoursInRange = timeRange.end - timeRange.start;
  }
  return Math.floor((TimeConstants.MinutesInOneHour * hoursInRange) / increments);
};

// This functions should be moved to date-time-utilities eventually
const addMinutes = (date: Date, minutes: number): Date => {
  const result = new Date(date.getTime());
  result.setTime(result.getTime() + minutes * TimeConstants.MinutesInOneHour * TimeConstants.MillisecondsIn1Sec);
  result.setSeconds(0);
  return result;
};

// This functions needs to be reimplemented later with proper handling of user region/timezone
const formatTimeString = (date: Date, showSeconds: boolean): string => {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: showSeconds ? '2-digit' : undefined,
  });
};
