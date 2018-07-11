import { IGroupSpacerStyleProps, IGroupSpacerStyles } from './GroupSpacer.types';
import { getGlobalClassNames } from '../../Styling';

const GlobalClassNames = {
  root: 'ms-GroupSpacer'
};

export const getStyles = (props: IGroupSpacerStyleProps): IGroupSpacerStyles => {
  const { theme } = props;
  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [classNames.root, { display: 'inline-block' }]
  };
};
