import * as React from 'react';
import { DatePicker } from '@uifabric/date-time';
import { DefaultButton } from '@fluentui/react/lib/compat/Button';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';

const styles = mergeStyleSets({
  root: { selectors: { '> *': { marginBottom: 15 } } },
  control: { maxWidth: 300, marginBottom: 15 },
});

const onFormatDate = (date: Date): string => {
  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
};

export const DatePickerFormatExample: React.FunctionComponent = () => {
  const [value, setValue] = React.useState<Date | undefined>();

  const onClick = React.useCallback((): void => {
    setValue(undefined);
  }, []);

  const onParseDateFromString = React.useCallback(
    (newValue: string): Date => {
      const previousValue = value || new Date();
      const newValueParts = (newValue || '').trim().split('/');
      const day =
        newValueParts.length > 0 ? Math.max(1, Math.min(31, parseInt(newValueParts[0], 10))) : previousValue.getDate();
      const month =
        newValueParts.length > 1
          ? Math.max(1, Math.min(12, parseInt(newValueParts[1], 10))) - 1
          : previousValue.getMonth();
      let year = newValueParts.length > 2 ? parseInt(newValueParts[2], 10) : previousValue.getFullYear();
      if (year < 100) {
        year += previousValue.getFullYear() - (previousValue.getFullYear() % 100);
      }
      return new Date(year, month, day);
    },
    [value],
  );

  return (
    <div className={styles.root}>
      <div>
        Applications can customize how dates are formatted and parsed. Formatted dates can be ambiguous, so the control
        will avoid parsing the formatted strings of dates selected using the UI when text input is allowed. In this
        example, we are formatting and parsing dates as dd/MM/yy.
      </div>
      <DatePicker
        label="Start date"
        allowTextInput
        ariaLabel="Select a date. Input format is day slash month slash year."
        value={value as Date | undefined}
        onSelectDate={setValue as (date: Date | null | undefined) => void}
        formatDate={onFormatDate}
        parseDateFromString={onParseDateFromString}
        className={styles.control}
      />
      <DefaultButton onClick={onClick} text="Clear" />
      <div>Selected date: {(value || '').toString()}</div>
    </div>
  );
};
