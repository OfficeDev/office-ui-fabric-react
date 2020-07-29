import { SourceFile } from 'ts-morph';
import { CodeMod } from '../../types';
import { renameProp, findJsxTag } from '../../utilities';

const oldToNewButton: CodeMod = {
  run: (file: SourceFile) => {
    try {
      const tags = findJsxTag(file, 'CompoundButton');
      renameProp(tags, 'toggled', 'checked');
    } catch (e) {
      return { success: false };
    }
    return { success: true };
  },
  version: '100000',
  name: 'oldToNewButton',
  enabled: true,
};

export default oldToNewButton;
