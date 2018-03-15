import { IKeySequence, convertSequencesToKeytipID, dataKtpId, keySequencesAreEqual } from '../../Utilities';
import { IKeytipProps } from '../../Keytip';
import { KeytipManager } from './KeytipManager';

/**
 * Adds an IKeySequence to a list of sequences
 * Returns a new array of IKeySequence
 *
 * @param sequences - Array of sequences to append to
 * @param seq1 - IKeySequence to append
 */
export function addKeytipSequence(sequences: IKeySequence[], seq1: IKeySequence): IKeySequence[] {
  return [...sequences, { keys: [...seq1.keys] }];
}

/**
 * Utility funciton to register a keytip in the KeytipManager
 *
 * @param keytipProps - Keytip to register
 */

export function registerKeytip(keytipProps: IKeytipProps): void {
  const ktpMgr = KeytipManager.getInstance();
  ktpMgr.registerKeytip(keytipProps);
}

/**
 * Utility funciton to unregister a keytip in the KeytipManager
 *
 * @param keytipProps - Keytip to unregister
 */
export function unregisterKeytip(keytipProps: IKeytipProps): void {
  const ktpMgr = KeytipManager.getInstance();
  ktpMgr.unregisterKeytip(keytipProps);
}

/**
 * Constructs the data-ktp-id attribute selector from a full key sequence
 *
 * @param keySequences - Full IKeySequence for a Keytip
 */
export function constructKeytipTargetFromSequences(keySequences: IKeySequence[]): string {
  return '[' + dataKtpId + '="' + convertSequencesToKeytipID(keySequences) + '"]';
}

/**
 * Constructs the data-ktp-id attribute selector from a keytip ID
 *
 * @param keytipId - ID of the Keytip
 */
export function constructKeytipTargetFromId(keytipId: string): string {
  return '[' + dataKtpId + '="' + keytipId + '"]';
}

/**
 *
 * @param keySequences
 * @param overflowSetSequence
 */
export function constructAriaDescribedByString(keySequences: IKeySequence[], overflowSetSequence?: IKeySequence): string {
  // Remove overflowSetSequence if in keySequences
  if (overflowSetSequence) {
    keySequences = keySequences.filter((keySequence: IKeySequence) => {
      return !keySequencesAreEqual(keySequence, overflowSetSequence);
    });
  }

  // TODO: need comma separator? and turn into constant
  return keySequences.reduce((prevValue: string, sequence: IKeySequence): string => {
    return prevValue + sequence.keys.join('') + ' ';
  }, '');
}

/**
 *
 *
 * @param keytipProps - Keytip to register
 * @returns - any {} containing the aria-describedby and data-ktp-id to add to the relevant element
 */
// tslint:disable-next-line:no-any
export function getNativeKeytipProps(keytipProps?: IKeytipProps): any {
  if (keytipProps) {
    const ktpMgr = KeytipManager.getInstance();
    // Construct aria-describedby and data-ktp-id attributes and return
    const ariaDescribedBy = ktpMgr.getAriaDescribedBy(keytipProps.keySequences, keytipProps.overflowSetSequence);
    const ktpId = convertSequencesToKeytipID(keytipProps.keySequences);

    return {
      'aria-describedby': ariaDescribedBy,
      'data-ktp-id': ktpId
    };
  }
  return undefined;
}