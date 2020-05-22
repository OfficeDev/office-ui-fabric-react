import * as React from 'react';
import { compose } from '@fluentui/react-compose';
import { KeytipData } from '../../KeytipData';
import { classNamesFunction } from '../../Utilities';
import { ILink, ILinkProps, ILinkStyleProps, ILinkStyles } from './Link.types';
import { useLink } from './useLink';

const getClassNames = classNamesFunction<ILinkStyleProps, ILinkStyles>({ useStaticStyles: true });

export const LinkBase = compose<'a', ILinkProps, ILinkProps, {}, {}>(
  (props, ref, composeOptions) => {
    const { slots, slotProps } = useLink(props, composeOptions);
    useComponentRef(props, ref as React.RefObject<ILink>);

    const { 'aria-describedby': ariaDescribedBy, className, disabled, href, keytipProps, styles, theme } = props;
    const classNames = getClassNames(styles!, {
      className,
      isButton: !href,
      isDisabled: disabled,
      theme: theme!,
    });

    return (
      <KeytipData ariaDescribedBy={ariaDescribedBy} disabled keytipProps={keytipProps}>
        {(keytipAttributes: any): JSX.Element => (
          <slots.root {...keytipAttributes} ref={ref} {...slotProps.root} className={classNames.root} />
        )}
      </KeytipData>
    );
  },
  {
    slots: {},
    displayName: 'LinkBase',
  },
);

const useComponentRef = (props: ILinkProps, link: React.RefObject<ILink>) => {
  React.useImperativeHandle(
    props.componentRef,
    () => ({
      focus() {
        if (link.current) {
          link.current.focus();
        }
      },
    }),
    [],
  );
};

LinkBase.defaultProps = {};
