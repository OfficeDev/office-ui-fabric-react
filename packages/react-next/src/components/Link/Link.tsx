import * as React from 'react';
import { getGlobalClassNames, ITheme } from '../../Styling';
import { css, memoizeFunction, styled } from '../../Utilities';
import { LinkBase } from './LinkBase';
import { LinkProps, ILinkStyleProps, ILinkStyles } from './Link.types';
import * as classes from './Link.scss';

const GlobalClassNames = {
  root: 'ms-Link',
};

const getStaticStylesMemoized = memoizeFunction(
  (theme: ITheme, className?: string, isButton?: boolean, isDisabled?: boolean) => {
    const globalClassNames = getGlobalClassNames(GlobalClassNames, theme);

    const propControlledClasses = [isButton && classes.button, isDisabled && classes.disabled];

    const rootStaticClasses = [isDisabled && 'is-disabled'];

    return {
      root: css(className, classes.root, globalClassNames.root, ...rootStaticClasses, ...propControlledClasses),
    };
  },
);

const getStaticStyles = (props: ILinkStyleProps): Required<ILinkStyles> => {
  const { className, isButton, isDisabled, theme } = props;

  return getStaticStylesMemoized(theme!, className, isButton, isDisabled);
};

export const Link: React.FunctionComponent<LinkProps> = styled<LinkProps, ILinkStyleProps, ILinkStyles>(
  LinkBase,
  getStaticStyles,
  undefined,
  {
    scope: 'Link',
  },
);
