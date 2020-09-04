import { isConformant as baseIsConformant, IsConformantOptions } from '@fluentui/react-conformance';

export function isConformant(testInfo: Omit<IsConformantOptions, 'componentPath'>) {
  const defaultOptions = {
    disabledTests: ['has-docblock', 'kebab-aria-attributes', 'as-*'],
  };

  const path = { componentPath: module!.parent!.filename.replace('.test', '') };

  baseIsConformant(defaultOptions, testInfo, path);
}
