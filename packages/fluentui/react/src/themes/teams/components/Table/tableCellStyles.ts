import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import { TeamsTableVariables } from './tableVariables';
import { TableCellStylesProps } from '../../../../components/Table/TableCell';
import getBorderFocusStyles from '../../getBorderFocusStyles';

const tableCellStyles: ComponentSlotStylesPrepared<TableCellStylesProps, TeamsTableVariables> = {
  root: ({ variables: v, theme: { siteVariables } }): ICSSInJSStyle => {
    const borderFocusStyles = getBorderFocusStyles({
      siteVariables
    });

    return {
      display: 'flex',
      flexFlow: 'row nowrap',
      flexGrow: 1,
      flexBasis: 0,
      minWidth: v.minCellWidth,
      outline: 0,
      borderWidth: v.borderWidth,
      borderStyle: 'solid',
      borderColor: 'transparent',
      ...borderFocusStyles,
      padding: v.cellPadding,
      position: 'relative',
      height: '100%'
    };
  },
  content: ({ props: { truncateContent } }): ICSSInJSStyle => {
    return {
      alignSelf: 'center',
      ...(p.truncateContent && {
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      })
    };
  }
};

export default tableCellStyles;
