import { GridVariables } from './gridVariables';
import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import { GridProps } from '../../../../components/Grid/Grid';

const getCSSTemplateValue = (template: number, gap: string = ''): string => {
  return Array.from({ length: template }, () => '1fr').join(` ${gap} `);
};

const gridStyles: ComponentSlotStylesPrepared<GridProps, GridVariables> = {
  root: ({ props, variables: { height, width, defaultColumnCount, gridGap, padding } }): ICSSInJSStyle => {
    const { rows, columns = !props.rows && defaultColumnCount } = props;

    return {
      height,
      width,
      padding,
      gridGap,
      display: ['grid', '-ms-grid'],
      justifyContent: 'space-evenly',

      ...(rows && !columns && { gridAutoFlow: 'column' }),
      ...(rows && {
        gridTemplateRows: getCSSTemplateValue(rows, gridGap),
        msGridRows: getCSSTemplateValue(rows),
      }),
      ...(columns && {
        gridTemplateColumns: getCSSTemplateValue(columns, gridGap),
        msGridColumns: getCSSTemplateValue(columns),
      }),

      '& > *': { outlineOffset: '-3px' },
    };
  },
};

export default gridStyles;
