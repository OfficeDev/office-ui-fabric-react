import { IKeySequence } from '../../Utilities';

export interface IKeytipTreeNode {
  /**
   * ID of the <Keytip> DOM element. Needed to locate the correct keytip in the KeytipLayer's 'keytip' state array
   */
  id: string;

  /**
   * KeySequence that invokes this KeytipTreeNode's onExecute function
   */
  keytipSequence: IKeySequence;

  /**
   * Control's execute function for when keytip is invoked, passed from the component to the Manager in the IKeytipProps
   */
  onExecute?: (el: HTMLElement | null) => void;

  /**
   * Function to execute when we return to this keytip
   */
  onReturn?: (el: HTMLElement | null) => void;

  /**
   * List of keytip IDs that should become visible when this keytip is pressed, can be empty
   */
  children: string[];

  /**
   * Parent keytip ID
   */
  parent: string;

  /**
   * Whether or not this keytip will have children keytips that are dynamically created (DOM is generated on keytip activation)
   * Common cases are keytips in a menu or modal
   */
  hasDynamicChildren?: boolean;

  /**
   * Whether or not this keytip belongs to a component that has a menu
   * Keytip mode will stay on when a menu is opened, even if the items in that menu have no keytips
   */
  hasMenu?: boolean;

  /**
   * T/F if this keytip's component is currently disabled
   */
  disabled?: boolean;

  /**
   * T/F if this keytip is a persisted keytip
   */
  persisted?: boolean;
}