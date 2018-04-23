import { IKeytipStyleProps, IKeytipStyles } from './Keytip.types';
import { ICalloutContentStyleProps, ICalloutContentStyles } from '../../Callout';
import { IStyleFunction, IPoint } from '../../Utilities';
import { mergeStyleSets } from '../../Styling';

export const getStyles = (props: IKeytipStyleProps): IKeytipStyles => {
  const { theme, disabled, visible } = props;
  return {
    container: [
      {
        backgroundColor: theme.palette.neutralDark
      },
      disabled && {
        opacity: 0.5,
      },
      !visible && {
        visibility: 'hidden'
      }
    ],
    root: [{
      textAlign: 'center',
      paddingLeft: '3px',
      paddingRight: '3px',
      backgroundColor: theme.palette.neutralDark,
      color: theme.palette.neutralLight,
      minWidth: '11px',
      lineHeight: '17px',
      height: '17px',
      display: 'inline-block'
    },
    disabled && {
      color: theme.semanticColors.keytipDisabled
    }]
  };
};

export const getCalloutStyles = (props: ICalloutContentStyleProps): ICalloutContentStyles => {
  return {
    container: [
    ],
    root: [{
      border: 'none',
      boxShadow: 'none'
    }],
    beak: [
    ],
    beakCurtain: [
    ],
    calloutMain: [{
      backgroundColor: 'transparent'
    }]
  };
};

export const getCalloutOffsetStyles = (offset: IPoint): IStyleFunction<ICalloutContentStyleProps, ICalloutContentStyles> => {
  return (props: ICalloutContentStyleProps): ICalloutContentStyles => {
    return mergeStyleSets(getCalloutStyles(props), {
      root: [{
        marginLeft: offset.x,
        // Reverse the margin from the bottom so the callout positioning
        // doesn't auto-correct it
        marginBottom: -1 * offset.y
      }]
    });
  };
};