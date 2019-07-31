import { ICalloutContentStyleProps, ICalloutContentStyles } from 'office-ui-fabric-react/lib/Callout';

export const CalloutContentStyles = (props: ICalloutContentStyleProps): Partial<ICalloutContentStyles> => {
  const { theme } = props;
  const { effects } = theme;

  return {
    root: {
      borderRadius: effects.roundedCorner2,
      borderWidth: 0,
      boxShadow: effects.elevation16,
      selectors: {
        '&.ms-Tooltip, &.ms-ComboBox-callout': {
          boxShadow: effects.elevation8
        }
      }
    },
    beakCurtain: {
      borderRadius: effects.roundedCorner2
    },
    calloutMain: {
      borderRadius: effects.roundedCorner2
    }
  };
};
