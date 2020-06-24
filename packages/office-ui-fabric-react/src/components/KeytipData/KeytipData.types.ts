import { IKeytipProps } from '../../Keytip';

export interface IKeytipDataProps {
  /**
   * IKeytipProps to create from this KeytipData
   * If no keytipProps are defined, a keytip won't be registered
   */
  keytipProps?: IKeytipProps;

  /**
   * String to add to the aria-describedby generated by this KeytipData
   * It will prepend this string to the generated aria-describedby property
   */
  ariaDescribedBy?: string;

  /**
   * T/F if this keytip should be disabled upon creation
   */
  disabled?: boolean;
}
