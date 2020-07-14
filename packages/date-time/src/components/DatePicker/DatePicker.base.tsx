import * as React from 'react';
import {
  IDatePicker,
  IDatePickerProps,
  IDatePickerStrings,
  IDatePickerStyleProps,
  IDatePickerStyles,
} from './DatePicker.types';
import {
  KeyCodes,
  classNamesFunction,
  getNativeProps,
  divProperties,
  css,
  initializeComponentRef,
  getPropsWithDefaults,
} from '@uifabric/utilities';
import { Calendar, ICalendar, DayOfWeek } from '../../Calendar';
import { FirstWeekOfYear, getDatePartHashValue, compareDatePart } from '@fluentui/date-time-utilities';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { DirectionalHint } from 'office-ui-fabric-react/lib/common/DirectionalHint';
import { TextField, ITextField } from 'office-ui-fabric-react/lib/TextField';
import { FocusTrapZone } from 'office-ui-fabric-react/lib/FocusTrapZone';
import { useId, useAsync, useControllableValue } from '@uifabric/react-hooks';

const getClassNames = classNamesFunction<IDatePickerStyleProps, IDatePickerStyles>();

const DEFAULT_STRINGS: IDatePickerStrings = {
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
  prevYearRangeAriaLabel: 'Previous year range',
  nextYearRangeAriaLabel: 'Next year range',
  closeButtonAriaLabel: 'Close date picker',
  weekNumberFormatString: 'Week number {0}',
};

const DEFAULT_PROPS = {
  allowTextInput: false,
  formatDate: (date: Date) => {
    if (date) {
      return date.toDateString();
    }

    return '';
  },
  parseDateFromString: (dateStr: string) => {
    const date = Date.parse(dateStr);
    if (date) {
      return new Date(date);
    }

    return null;
  },
  firstDayOfWeek: DayOfWeek.Sunday,
  initialPickerDate: new Date(),
  isRequired: false,
  isMonthPickerVisible: true,
  showMonthPickerAsOverlay: false,
  strings: DEFAULT_STRINGS,
  highlightCurrentMonth: false,
  highlightSelectedMonth: false,
  borderless: false,
  pickerAriaLabel: 'Calendar',
  showWeekNumbers: false,
  firstWeekOfYear: FirstWeekOfYear.FirstDay,
  showGoToToday: true,
  showCloseButton: false,
  underlined: false,
  allFocusable: false,
} as const;

function useFocusLogic() {
  const textFieldRef = React.useRef<ITextField>(null);

  const focus = () => {
    textFieldRef.current?.focus?.();
  };

  return [textFieldRef, focus] as const;
}

function useCalendarVisibility({ allowTextInput, onAfterMenuDismiss }: IDatePickerProps, focus: () => void) {
  const [isCalendarShown, setIsCalendarShown] = React.useState(false);
  const isMounted = React.useRef(false);
  const async = useAsync();

  React.useEffect(() => {
    if (isMounted.current && !isCalendarShown) {
      // In browsers like IE, textfield gets unfocused when datepicker is collapsed
      if (allowTextInput) {
        async.requestAnimationFrame(focus);
      }

      // If DatePicker's menu (Calendar) is closed, run onAfterMenuDismiss
      onAfterMenuDismiss?.();
    }
    isMounted.current = true;
  }, [isCalendarShown]);

  return [isCalendarShown, setIsCalendarShown] as const;
}

function useSelectedDate({ formatDate, value, onSelectDate }: IDatePickerProps) {
  const [selectedDate, setSelectedDateState] = useControllableValue(value, undefined, (ev, newValue) =>
    onSelectDate?.(newValue),
  );
  const [formattedDate, setFormattedDate] = React.useState(() => formatDate?.(value) ?? '');

  const setSelectedDate = (newDate: Date | undefined) => {
    setSelectedDateState(newDate);
    setFormattedDate(formatDate?.(newDate) ?? '');
  };

  React.useEffect(() => {
    setFormattedDate(formatDate?.(selectedDate) ?? '');
  }, [formatDate]);

  return [selectedDate, formattedDate, setSelectedDate, setFormattedDate] as const;
}

function useErrorMessage(
  {
    isRequired,
    allowTextInput,
    strings,
    parseDateFromString,
    onSelectDate,
    formatDate,
    minDate,
    maxDate,
  }: IDatePickerProps,
  selectedDate: Date | undefined,
  setSelectedDate: (date: Date | undefined) => void,
  formattedDate: string,
  isCalendarShown: boolean,
) {
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();
  const isMounted = React.useRef(false);

  const validateTextInput = (inputValue: string = formattedDate): void => {
    if (allowTextInput) {
      let date = null;

      if (inputValue) {
        // Don't parse if the selected date has the same formatted string as what we're about to parse.
        // The formatted string might be ambiguous (ex: "1/2/3" or "New Year Eve") and the parser might
        // not be able to come up with the exact same date.
        if (selectedDate && !errorMessage && formatDate && formatDate(selectedDate) === inputValue) {
          return;
        }
        date = parseDateFromString!(inputValue);

        // Check if date is null, or date is Invalid Date
        if (!date || isNaN(date.getTime())) {
          // Reset invalid input field, if formatting is available
          setSelectedDate(selectedDate);
          setErrorMessage(strings!.invalidInputErrorMessage || ' ');
        } else {
          // Check against optional date boundaries
          if (isDateOutOfBounds(date, minDate, maxDate)) {
            setErrorMessage(strings!.isOutOfBoundsErrorMessage || ' ');
          } else {
            setSelectedDate(date);
            setErrorMessage(undefined);
          }
        }
      } else {
        // Only show error for empty inputValue if it is a required field
        setErrorMessage(isRequired ? strings!.isRequiredErrorMessage || ' ' : undefined);
      }

      // If no input date string or input date string is invalid
      // date variable will be null, callback should expect null value for this case
      onSelectDate?.(date);
    } else if (isRequired && !inputValue) {
      // Check when DatePicker is a required field but has NO input value
      setErrorMessage(strings!.isRequiredErrorMessage || ' ');
    } else {
      // Cleanup the error message
      setErrorMessage(undefined);
    }
  };

  React.useEffect(() => {
    if (isMounted.current) {
      validateTextInput();
    }
    isMounted.current = true;
  }, [
    minDate && getDatePartHashValue(minDate),
    maxDate && getDatePartHashValue(maxDate),
    selectedDate && getDatePartHashValue(selectedDate),
    isRequired,
  ]);

  return [isCalendarShown ? undefined : errorMessage, validateTextInput] as const;
}

export const DatePickerBase = React.forwardRef(
  (propsWithoutDefaults: IDatePickerProps, forwardedRef: React.Ref<HTMLDivElement>) => {
    const props = getPropsWithDefaults(DEFAULT_PROPS, propsWithoutDefaults);

    const id = useId('DatePicker', props.id);
    const calloutId = useId('DatePicker-Callout');

    const [textFieldRef, focus] = useFocusLogic();
    const [isCalendarShown, setIsCalendarShown] = useCalendarVisibility(props, focus);
    const [selectedDate, formattedDate, setSelectedDate, setFormattedDate] = useSelectedDate(props);
    const [errorMessage, validateTextInput] = useErrorMessage(
      props,
      selectedDate,
      setSelectedDate,
      formattedDate,
      isCalendarShown,
    );

    return (
      <DatePickerBaseClass
        {...props}
        hoisted={{
          forwardedRef,
          id,
          calloutId,
          isCalendarShown,
          setIsCalendarShown,
          textFieldRef,
          focus,
          selectedDate,
          formattedDate,
          setSelectedDate,
          setFormattedDate,
          errorMessage,
          validateTextInput,
        }}
      />
    );
  },
);
DatePickerBase.displayName = 'DatePickerBase';

interface IDatePickerBaseClassProps extends IDatePickerProps {
  hoisted: {
    forwardedRef: React.Ref<HTMLDivElement>;
    id: string;
    calloutId: string;
    textFieldRef: React.RefObject<ITextField>;
    isCalendarShown: boolean;
    selectedDate?: Date;
    formattedDate: string;
    errorMessage?: string;
    validateTextInput(newValue?: string): void;
    setSelectedDate(newValue: Date | undefined): void;
    setFormattedDate(newValue: string): void;
    setIsCalendarShown(newValue: boolean): void;
    focus(): void;
  };
}

class DatePickerBaseClass extends React.Component<IDatePickerBaseClassProps, never> implements IDatePicker {
  private _calendar = React.createRef<ICalendar>();
  private _datePickerDiv = React.createRef<HTMLDivElement>();
  private _preventFocusOpeningPicker: boolean;

  constructor(props: IDatePickerBaseClassProps) {
    super(props);

    initializeComponentRef(this);

    this._preventFocusOpeningPicker = false;
  }

  public render(): JSX.Element {
    const {
      firstDayOfWeek,
      strings,
      label,
      theme,
      className,
      styles,
      initialPickerDate,
      isRequired,
      disabled,
      ariaLabel,
      pickerAriaLabel,
      placeholder,
      allowTextInput,
      borderless,
      minDate,
      maxDate,
      showCloseButton,
      calendarProps,
      calloutProps,
      textField: textFieldProps,
      underlined,
      allFocusable,
      calendarAs: CalendarType = Calendar,
      tabIndex,
      hoisted: { isCalendarShown, formattedDate, selectedDate },
    } = this.props;

    const classNames = getClassNames(styles, {
      theme: theme!,
      className,
      disabled,
      label: !!label,
      isDatePickerShown: isCalendarShown,
    });

    const nativeProps = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(this.props, divProperties, ['value']);
    const iconProps = textFieldProps && textFieldProps.iconProps;

    return (
      <div {...nativeProps} className={classNames.root} ref={this.props.hoisted.forwardedRef}>
        <div
          ref={this._datePickerDiv}
          aria-haspopup="true"
          aria-owns={isCalendarShown ? this.props.hoisted.calloutId : undefined}
        >
          <TextField
            role="combobox"
            label={label}
            aria-expanded={isCalendarShown}
            ariaLabel={ariaLabel}
            aria-controls={isCalendarShown ? this.props.hoisted.calloutId : undefined}
            required={isRequired}
            disabled={disabled}
            errorMessage={this.props.hoisted.errorMessage}
            placeholder={placeholder}
            borderless={borderless}
            value={formattedDate}
            componentRef={this.props.hoisted.textFieldRef}
            underlined={underlined}
            tabIndex={tabIndex}
            readOnly={!allowTextInput}
            {...textFieldProps}
            id={this.props.hoisted.id + '-label'}
            className={css(classNames.textField, textFieldProps && textFieldProps.className)}
            iconProps={{
              iconName: 'Calendar',
              ...iconProps,
              className: css(classNames.icon, iconProps && iconProps.className),
              onClick: this._onIconClick,
            }}
            onKeyDown={this._onTextFieldKeyDown}
            onFocus={this._onTextFieldFocus}
            onBlur={this._onTextFieldBlur}
            onClick={this._onTextFieldClick}
            onChange={this._onTextFieldChanged}
          />
        </div>
        {isCalendarShown && (
          <Callout
            id={this.props.hoisted.calloutId}
            role="dialog"
            ariaLabel={pickerAriaLabel}
            isBeakVisible={false}
            gapSpace={0}
            doNotLayer={false}
            target={this._datePickerDiv.current}
            directionalHint={DirectionalHint.bottomLeftEdge}
            {...calloutProps}
            className={css(classNames.callout, calloutProps && calloutProps.className)}
            onDismiss={this._calendarDismissed}
            onPositioned={this._onCalloutPositioned}
          >
            <FocusTrapZone isClickableOutsideFocusTrap={true} disableFirstFocus={this.props.disableAutoFocus}>
              <CalendarType
                {...calendarProps}
                onSelectDate={this._onSelectDate}
                onDismiss={this._calendarDismissed}
                isMonthPickerVisible={this.props.isMonthPickerVisible}
                showMonthPickerAsOverlay={this.props.showMonthPickerAsOverlay}
                today={this.props.today}
                value={selectedDate || initialPickerDate}
                firstDayOfWeek={firstDayOfWeek}
                strings={strings!}
                highlightCurrentMonth={this.props.highlightCurrentMonth}
                highlightSelectedMonth={this.props.highlightSelectedMonth}
                showWeekNumbers={this.props.showWeekNumbers}
                firstWeekOfYear={this.props.firstWeekOfYear}
                showGoToToday={this.props.showGoToToday}
                dateTimeFormatter={this.props.dateTimeFormatter}
                minDate={minDate}
                maxDate={maxDate}
                componentRef={this._calendar}
                showCloseButton={showCloseButton}
                allFocusable={allFocusable}
              />
            </FocusTrapZone>
          </Callout>
        )}
      </div>
    );
  }

  public focus(): void {
    this.props.hoisted.focus();
  }

  public reset(): void {
    // this.setState(this._getDefaultState());
    // return {
    //   // selectedDate: props.value || undefined,
    //   // formattedDate: props.formatDate && props.value ? props.formatDate(props.value) : '',
    //   // isDatePickerShown: false,
    //   // errorMessage: undefined,
    // };
  }

  public showDatePickerPopup(): void {
    if (!this.props.hoisted.isCalendarShown) {
      this._preventFocusOpeningPicker = true;
      this.props.hoisted.setIsCalendarShown(true);
    }
  }

  private _onSelectDate = (date: Date): void => {
    const { onSelectDate } = this.props;

    if (this.props.calendarProps && this.props.calendarProps.onSelectDate) {
      this.props.calendarProps.onSelectDate(date);
    }

    this.props.hoisted.setSelectedDate(date);

    onSelectDate?.(date);

    this._calendarDismissed();
  };

  private _onCalloutPositioned = (): void => {
    let shouldFocus = true;
    // If the user has specified that the callout shouldn't use initial focus, then respect
    // that and don't attempt to set focus. That will default to true within the callout
    // so we need to check if it's undefined here.
    if (this.props.calloutProps && this.props.calloutProps.setInitialFocus !== undefined) {
      shouldFocus = this.props.calloutProps.setInitialFocus;
    }
    if (this._calendar.current && shouldFocus) {
      this._calendar.current.focus();
    }
  };

  private _onTextFieldFocus = (ev: React.FocusEvent<HTMLElement>): void => {
    if (this.props.disableAutoFocus) {
      return;
    }

    if (!this.props.allowTextInput) {
      if (!this._preventFocusOpeningPicker) {
        this.showDatePickerPopup();
      } else {
        this._preventFocusOpeningPicker = false;
      }
    }
  };

  private _onTextFieldBlur = (ev: React.FocusEvent<HTMLElement>): void => {
    this.props.hoisted.validateTextInput();
  };

  private _onTextFieldChanged = (
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue: string,
  ): void => {
    const { allowTextInput, textField } = this.props;

    if (allowTextInput) {
      if (this.props.hoisted.isCalendarShown) {
        this._dismissDatePickerPopup();
      }

      this.props.hoisted.setFormattedDate(newValue);
    }

    if (textField && textField.onChange) {
      textField.onChange(ev, newValue);
    }
  };

  private _onTextFieldKeyDown = (ev: React.KeyboardEvent<HTMLElement>): void => {
    switch (ev.which) {
      case KeyCodes.enter:
        ev.preventDefault();
        ev.stopPropagation();
        if (!this.props.hoisted.isCalendarShown) {
          this.props.hoisted.validateTextInput();
          this.showDatePickerPopup();
        } else {
          // When DatePicker allows input date string directly,
          // it is expected to hit another enter to close the popup
          if (this.props.allowTextInput) {
            this._dismissDatePickerPopup();
          }
        }
        break;

      case KeyCodes.escape:
        this._handleEscKey(ev);
        break;

      default:
        break;
    }
  };

  private _onTextFieldClick = (ev: React.MouseEvent<HTMLElement>): void => {
    if (!this.props.disableAutoFocus && !this.props.hoisted.isCalendarShown && !this.props.disabled) {
      this.showDatePickerPopup();
      return;
    }
    if (this.props.allowTextInput) {
      this._dismissDatePickerPopup();
    }
  };

  private _onIconClick = (ev: React.MouseEvent<HTMLElement>): void => {
    ev.stopPropagation();
    if (!this.props.hoisted.isCalendarShown && !this.props.disabled) {
      this.showDatePickerPopup();
    } else if (this.props.allowTextInput) {
      this._dismissDatePickerPopup();
    }
  };

  private _dismissDatePickerPopup = (): void => {
    if (this.props.hoisted.isCalendarShown) {
      this.props.hoisted.setIsCalendarShown(false);

      this.setState({}, () => {
        // setState is async, so we must call validate in a callback
        this.props.hoisted.validateTextInput();
      });
    }
  };

  /**
   * Callback for closing the calendar callout
   */
  private _calendarDismissed = (): void => {
    this._preventFocusOpeningPicker = true;
    this._dismissDatePickerPopup();
    // don't need to focus the text box, if necessary the focusTrapZone will do it
  };

  private _handleEscKey = (ev: React.KeyboardEvent<HTMLElement>): void => {
    ev.stopPropagation();
    this._calendarDismissed();
  };
}

function isDateOutOfBounds(date: Date, minDate?: Date, maxDate?: Date): boolean {
  return (!!minDate && compareDatePart(minDate!, date) > 0) || (!!maxDate && compareDatePart(maxDate!, date) < 0);
}
