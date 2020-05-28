import * as React from 'react';
import { compose } from '@fluentui/react-compose';
import { KeytipData } from '../../KeytipData';
import { ILinkProps } from './Link.types';
import { useLink } from './useLink';

export const LinkBase = compose<'a', ILinkProps, ILinkProps, {}, {}>(
  (props, ref, composeOptions) => {
    const { slots, slotProps } = useLink({ ...props, ref }, composeOptions);

    const { 'aria-describedby': ariaDescribedBy, disabled, keytipProps } = props;

    return (
      <KeytipData ariaDescribedBy={ariaDescribedBy} disabled={disabled} keytipProps={keytipProps}>
        {(keytipAttributes: any): JSX.Element => <slots.root {...keytipAttributes} ref={ref} {...slotProps.root} />}
      </KeytipData>
    );
  },
  {
    slots: {},
    displayName: 'LinkBase',
  },
);

LinkBase.defaultProps = {};
