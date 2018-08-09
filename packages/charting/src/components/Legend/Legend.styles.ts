import { ILegendStyles } from '@uifabric/charting/lib/components/Legend/Legend.types';
import { IStyle } from 'office-ui-fabric-react/lib/Styling';

export const getLegendStyles = (): ILegendStyles => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    legendContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginTop: '8px',
      marginBottom: '8px'
    },
    legendText: {
      fontSize: '12px',
      fontFamily: 'Segoe UI',
      paddingLeft: '7px',
      paddingRight: '16px'
    }
  };
};

export const getLegendColorStyle = (backgroundColor: string): IStyle => {
  return {
    height: '12px',
    width: '12px',
    backgroundColor: backgroundColor
  };
};
