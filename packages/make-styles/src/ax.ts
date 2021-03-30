import { DEFINITION_LOOKUP_TABLE, HASH_LENGTH, RTL_PREFIX, SEQUENCE_PREFIX } from './constants';
import { hashString } from './runtime/utils/hashString';
import { MakeStylesMatchedDefinitions } from './types';

// Contains a mapping of previously resolved sequences of atomic classnames
const axCachedResults: Record<string, string> = {};

const SEQUENCE_SIZE = SEQUENCE_PREFIX.length + HASH_LENGTH;

/**
 * Function can take any number of arguments, joins classes together and deduplicates atomic declarations generated by
 * `makeStyles()`. Handles scoped directional styles.
 *
 * Classnames can be of any length, this function can take both atomic declarations and class names.
 *
 * Input:
 * ```
 * // not real classes
 * ax('ltr', ['ui-button', 'displayflex', 'displaygrid'])
 * ax('rtl', ['ui-button', 'displayflex', 'displaygrid'])
 * ```
 *
 * Output:
 * ```
 * 'ui-button displaygrid'
 * 'rtl ui-button displaygrid'
 * ```
 */
export function ax(dir: 'ltr' | 'rtl', classNames: (string | false | undefined)[]): string {
  const isRtl = dir === 'rtl';

  let resultClassName = '';
  // Is used as a cache key to avoid object merging
  let sequenceMatch = '';

  const sequenceMappings: MakeStylesMatchedDefinitions[] = [];

  for (let i = 0; i < classNames.length; i++) {
    const className = classNames[i];

    if (typeof className === 'string') {
      // All classes generated by `makeStyles()` are prefixed by a sequence hash, this allows to identify class sets
      // without parsing each className in a string
      const sequenceIndex = className.indexOf(SEQUENCE_PREFIX);

      if (sequenceIndex === -1) {
        resultClassName += className + ' ';
      } else {
        const sequenceId = className.slice(sequenceIndex, sequenceIndex + SEQUENCE_SIZE);
        const sequenceMapping = DEFINITION_LOOKUP_TABLE[sequenceId];

        // Handles a case with mixed classnames, i.e. "ui-button ATOMIC_CLASSES"
        if (sequenceIndex > 0) {
          resultClassName += className.slice(0, sequenceIndex);
        }

        if (sequenceMapping) {
          sequenceMatch += sequenceId;
          sequenceMappings.push(sequenceMapping);
        }
      }

      if (process.env.NODE_ENV !== 'production') {
        if (className.indexOf(SEQUENCE_PREFIX, sequenceIndex + 1) !== -1) {
          // eslint-disable-next-line no-console
          console.error(
            'ax(): a passed string contains multiple identifiers of atomic classes (classes that start with ' +
              `"${SEQUENCE_PREFIX}"), it's possible that passed classes were concatenated in a wrong way. Source ` +
              `string: ${className}`,
          );
        }
      }
    }
  }

  // .slice() there allows to avoid trailing space for non-atomic classes
  // "ui-button ui-flex " => "ui-button ui-flex"
  if (sequenceMatch === '') {
    return resultClassName.slice(0, -1);
  }

  // Is required to have different results for cache lookups and avoid collisions:
  // - ltr "__seq1__seq2__seq3"
  // - rtl "__seq1__seq2__seq3r"
  if (isRtl) {
    sequenceMatch += RTL_PREFIX;
  }

  // It's safe to reuse results from continuous merging as results are stable
  // "__seq1 ... __seq2 ..." => "__seq12 ..."
  const axResult = axCachedResults[sequenceMatch];

  if (axResult !== undefined) {
    return resultClassName + axResult;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line prefer-spread
  const resultDefinitions: MakeStylesMatchedDefinitions = Object.assign.apply<MakeStylesMatchedDefinitions[]>(
    Object,
    // .assign() mutates the first object, we can't mutate mappings as it will produce invalid results later
    [{}].concat(sequenceMappings),
  );

  let atomicClassNames = '';

  // eslint-disable-next-line guard-for-in
  for (const property in resultDefinitions) {
    const resultDefinition = resultDefinitions[property];

    if (isRtl) {
      const rtlPrefix = isRtl && resultDefinition[2] ? RTL_PREFIX : '';

      atomicClassNames += rtlPrefix + resultDefinition[0] + ' ';
    } else {
      atomicClassNames += resultDefinition[0] + ' ';
    }
  }

  atomicClassNames = atomicClassNames.slice(0, -1);

  // Each merge of classes generates a new sequence of atomic classes that needs to be registered
  const newSequenceHash = SEQUENCE_PREFIX + hashString(atomicClassNames);
  atomicClassNames = newSequenceHash + ' ' + atomicClassNames;

  axCachedResults[sequenceMatch] = atomicClassNames;
  DEFINITION_LOOKUP_TABLE[newSequenceHash] = resultDefinitions;

  return resultClassName + atomicClassNames;
}
