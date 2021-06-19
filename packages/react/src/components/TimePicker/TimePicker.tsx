import * as React from 'react';
import { KeyCodes } from '../../Utilities';
import { TimeConstants, addMinutes, formatTimeString, ceilMinuteToIncrement } from '@fluentui/date-time-utilities';
import { ComboBox, IComboBox, IComboBoxOption } from '../../ComboBox';
import { ITimePickerProps, ITimeRange } from './TimePicker.types';

export const TimePicker: React.FunctionComponent<ITimePickerProps> = ({
  label,
  increments = 30,
  showSeconds = false,
  allowFreeform = true,
  useHour12 = false,
  timeRange,
  onFormatDate,
  onValidateUserInput,
  onChange,
  ...rest
}: ITimePickerProps) => {
  const [selectedKey, setSelectedKey] = React.useState<string | number | undefined>('');
  const [userText, setUserText] = React.useState<string>('');
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const defaultTime = generateDefaultTime(increments, timeRange);
  const optionsCount = getDropdownOptionsCount(increments, timeRange);
  const timePickerOptions: IComboBoxOption[] = React.useMemo(() => {
    const optionsList = Array(optionsCount);
    for (let i = 0; i < optionsCount; i++) {
      optionsList[i] = 0;
    }
    return optionsList.map((_, index) => {
      const option = addMinutes(defaultTime, increments * index);
      option.setSeconds(0);
      const optionText = onFormatDate ? onFormatDate(option) : formatTimeString(option, showSeconds, useHour12);
      if (index === 0) {
        setSelectedKey(optionText);
      }
      return {
        key: optionText,
        text: optionText,
      };
    });
  }, []);

  const onInputChange = React.useCallback(
    (event: React.FormEvent<IComboBox>, option?: IComboBoxOption, index?: number, value?: string): void => {
      if (onChange) {
        onChange(event, option, index, value);
      }

      const validateUserInput = (userInput: string): string => {
        let errorMessageToDisplay = '';
        let regex: RegExp;
        if (useHour12) {
          regex = showSeconds
            ? /((1[0-2]|0?[1-9]):([0-5][0-9]):(?:[0-5]\d) ?([AaPp][Mm]))$/
            : /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/;
        } else {
          regex = showSeconds
            ? /([0-9]|0[0-9]|1[0-9]|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/
            : /([0-9]|0[0-9]|1[0-9]|2[0-3]):(?:[0-5]\d)$/;
        }
        if (!regex.test(userInput)) {
          const useHour12ErrorMessage = useHour12 ? '12-hour' : '24-hour';
          showSeconds
            ? (errorMessageToDisplay =
                `TimePicker format must be valid and in the ${useHour12ErrorMessage} ` + `format hh:mm:ss A.`)
            : (errorMessageToDisplay =
                `TimePicker format must be valid and in the ${useHour12ErrorMessage} ` + `format hh:mm A.`);
        }
        return errorMessageToDisplay;
      };

      const key = option?.key;
      let updatedUserText = '';
      let errorMessageToDisplay = '';
      if (value) {
        if (allowFreeform && !option) {
          if (!onFormatDate) {
            // Validate only if user did not add onFormatDate
            errorMessageToDisplay = validateUserInput(value);
          } else {
            // Use user provided validation if onFormatDate is provided
            if (onValidateUserInput) {
              errorMessageToDisplay = onValidateUserInput(value);
            }
          }
        }
        updatedUserText = value;
      } else if (option) {
        updatedUserText = option.text;
      }

      setErrorMessage(errorMessageToDisplay);
      setUserText(updatedUserText);
      setSelectedKey(key);
    },
    [allowFreeform, onFormatDate, onValidateUserInput, showSeconds, useHour12],
  );

  const evaluatePressedKey = (event: React.KeyboardEvent<IComboBox>) => {
    if (
      !onFormatDate &&
      // Only permit input of digits, space, colon, A/P/M characters
      !(
        (event.charCode >= KeyCodes.zero && event.charCode <= KeyCodes.colon) ||
        event.charCode === KeyCodes.space ||
        event.charCode === KeyCodes.a ||
        event.charCode === KeyCodes.m ||
        event.charCode === KeyCodes.p
      )
    ) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <ComboBox
        allowFreeform={allowFreeform}
        selectedKey={selectedKey}
        label={label}
        errorMessage={errorMessage}
        options={timePickerOptions}
        onChange={onInputChange}
        text={userText}
        //eslint-disable-next-line
        onKeyPress={evaluatePressedKey}
        {...rest}
      />
    </div>
  );
};

const clampTimeRange = (timeRange: ITimeRange) => {
  if (timeRange.start < 0) timeRange.start = 0;
  if (timeRange.start > 23) timeRange.start = 23;
  if (timeRange.end < 0) timeRange.end = 0;
  if (timeRange.end > 23) timeRange.end = 23;
  return timeRange;
};

const generateDefaultTime = (increments: number, timeRange: ITimeRange | undefined) => {
  const defaultTime = new Date();
  if (timeRange) {
    const clampedTimeRange = clampTimeRange(timeRange);
    defaultTime.setHours(clampedTimeRange.start);
  }

  return ceilMinuteToIncrement(defaultTime, increments);
};

const getDropdownOptionsCount = (increments: number, timeRange: ITimeRange | undefined) => {
  let hoursInRange = TimeConstants.HoursInOneDay;
  if (timeRange) {
    const clampedTimeRange = clampTimeRange(timeRange);
    if (clampedTimeRange.start > clampedTimeRange.end) {
      hoursInRange = TimeConstants.HoursInOneDay - timeRange.start - timeRange.end;
    } else if (timeRange.end > timeRange.start) {
      hoursInRange = timeRange.end - timeRange.start;
    }
  }
  return Math.floor((TimeConstants.MinutesInOneHour * hoursInRange) / increments);
};
