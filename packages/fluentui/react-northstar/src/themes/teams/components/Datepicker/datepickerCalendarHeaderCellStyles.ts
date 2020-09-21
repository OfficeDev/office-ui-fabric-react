import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import { DatepickerVariables } from './datepickerVariables';
import { DatepickerCalendarHeaderCellStylesProps } from '../../../../components/Datepicker/DatepickerCalendarHeaderCell';

export const datepickerCalendarHeaderCellStyles: ComponentSlotStylesPrepared<
  DatepickerCalendarHeaderCellStylesProps,
  DatepickerVariables
> = {
  root: ({ variables: v }): ICSSInJSStyle => {
    return {
      textAlign: 'center',
      verticalAlign: 'middle',

      fontWeight: v.calendarHeaderCellFontWeight,

      height: v.calendarHeaderCellHeight,
      width: v.calendarHeaderCellWidth,

      paddingTop: v.calendarHeaderCellPaddingTop,
      paddingBottom: v.calendarHeaderCellPaddingBottom,
      paddingLeft: v.calendarHeaderCellPaddingLeft,
      paddingRight: v.calendarHeaderCellPaddingRight,

      display: 'table-cell',
    };
  },
};
