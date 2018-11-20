import { ICalloutContentStyleProps } from 'office-ui-fabric-react/lib/Callout';
import { Depths } from '../FluentDepths';
import { fluentBorderRadius } from './styleConstants';

export const CalloutContentStyles = (props: ICalloutContentStyleProps) => {
  return {
    root: {
      borderRadius: fluentBorderRadius,
      boxShadow: Depths.depth16
    }
  };
};
