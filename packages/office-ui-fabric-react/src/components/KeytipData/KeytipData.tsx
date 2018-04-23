import {
  BaseComponent,
  IRenderComponent,
  mergeOverflowKeySequences,
  convertSequencesToKeytipID,
  getAriaDescribedBy
} from '../../Utilities';
import { IKeytipProps } from '.';
import { KeytipManager } from '../../utilities/keytips/KeytipManager';

export interface IKeytipDataProps {
  keytipProps?: IKeytipProps;
  ariaDescribedBy?: string;
  disabled?: boolean;
}

/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 *
 * @export
 * @class KeytipData
 * @extends {BaseComponent<IKeytipDataProps & IRenderComponent<{}>, {}>}
 */
export class KeytipData extends BaseComponent<IKeytipDataProps & IRenderComponent<{}>, {}> {
  private _uniqueId: string;
  private _keytipManager: KeytipManager = KeytipManager.getInstance();

  public componentDidMount() {
    // Register Keytip in KeytipManager
    if (this.props.keytipProps) {
      this._uniqueId = this._keytipManager.registerKeytip(this._getKeytipProps());
    }
  }

  public componentWillUnmount() {
    // Unregister Keytip in KeytipManager
    this.props.keytipProps && this._keytipManager.unregisterKeytip(this._getKeytipProps(), this._uniqueId);
  }

  public componentDidUpdate() {
    // Update Keytip in KeytipManager
    this.props.keytipProps && this._keytipManager.updateKeytip(this._getKeytipProps(), this._uniqueId);
  }

  public render(): JSX.Element {
    const { children, keytipProps, ariaDescribedBy } = this.props;
    let nativeKeytipProps: any = {};
    if (keytipProps) {
      nativeKeytipProps = this._getNativeKeytipProps(keytipProps, ariaDescribedBy);
    }
    return children(nativeKeytipProps);
  }

  private _getKeytipProps(): IKeytipProps {
    return {
      disabled: this.props.disabled,
      ...this.props.keytipProps!,
    };
  }

  /**
   * Gets the aria- and data- attributes to attach to the component
   * @param keytipProps
   * @param describedByPrepend
   */
  private _getNativeKeytipProps(keytipProps: IKeytipProps, describedByPrepend?: string): any {
    if (keytipProps) {
      // Add the parent overflow sequence if necessary
      keytipProps = this._keytipManager.addParentOverflowSequence(keytipProps);

      // Construct aria-describedby and data-ktp-id attributes and return
      const ariaDescribedBy = getAriaDescribedBy(keytipProps.keySequences);
      let keySequences = keytipProps.keySequences;
      if (keytipProps.overflowSetSequence) {
        keySequences = mergeOverflowKeySequences(keySequences, keytipProps.overflowSetSequence);
      }
      const ktpId = convertSequencesToKeytipID(keySequences);

      return {
        'aria-describedby': (describedByPrepend || '') + ariaDescribedBy,
        'data-ktp-target': ktpId,
        'data-ktp-execute-target': ktpId
      };
    }
    return undefined;
  }
}
