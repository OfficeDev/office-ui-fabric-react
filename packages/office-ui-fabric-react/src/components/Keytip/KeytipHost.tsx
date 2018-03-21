import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BaseComponent, IKeySequence, convertSequencesToKeytipID, IRenderComponent } from '../../Utilities';
import { IKeytip, IKeytipProps } from './Keytip.types';
import { getNativeKeytipProps, registerKeytip, unregisterKeytip, updateKeytip } from '../../utilities/keytips';

export interface IKeytipHostProps {
  keytipProps?: IKeytipProps;
  ariaDescribedBy?: string;
}

/**
 * A small element to help the target element correctly read out its aria-describedby for its Keytip
 *
 * @export
 * @class KeytipHost
 * @extends {BaseComponent<IKeytipProps, {}}>}
 */
export class KeytipHost extends BaseComponent<IKeytipHostProps & IRenderComponent<{}>, {}> {

  public componentDidMount() {
    // Register Keytip in KeytipManager
    this.props.keytipProps && registerKeytip({ ...this.props.keytipProps });
  }

  public componentWillUnmount() {
    // Unregister Keytip in KeytipManager
    this.props.keytipProps && unregisterKeytip({ ...this.props.keytipProps });
  }

  public componentDidUpdate() {
    // Update Keytip in KeytipManager
    this.props.keytipProps && updateKeytip({ ...this.props.keytipProps });
  }

  public render(): JSX.Element {
    const { children, keytipProps, ariaDescribedBy } = this.props;
    let nativeKeytipProps: any = {};
    if (keytipProps) {
      nativeKeytipProps = getNativeKeytipProps(keytipProps);
      if (ariaDescribedBy) {
        // Append our aria-describedby to the one given
        nativeKeytipProps['aria-describedby'] = ariaDescribedBy + nativeKeytipProps['aria-describedby'];
      }
    }
    return children(nativeKeytipProps);
  }
}
