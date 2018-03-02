import { IDialogStyleProps, IDialogStyles } from './Dialog.types';
import {
  IStyle,
  ITheme,
  FontWeights,
  ScreenWidthMinMedium,
} from '../../Styling';

export const getStyles = (
  props: IDialogStyleProps
): IDialogStyles => {
  const {
    className,
    containerClassName,
    contentClassName,
    dialogDefaultMinWidth = '288px',
    dialogDefaultMaxWidth = '340px',
    theme,
    hidden,
  } = props;

  return ({
    root: [
      'ms-Dialog',
      className,
    ],

    main: [
      {
        width: dialogDefaultMinWidth,

        selectors: {
          [`@media (min-width: ${ScreenWidthMinMedium}px)`]: {
            width: 'auto',
            maxWidth: dialogDefaultMaxWidth,
            minWidth: dialogDefaultMinWidth,
          }
        }
      },
      !hidden && { display: 'flex' },
      containerClassName,
    ]
  });
};
