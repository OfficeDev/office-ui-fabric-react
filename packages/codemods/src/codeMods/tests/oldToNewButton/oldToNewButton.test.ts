import { Project } from 'ts-morph';
import { findJsxTag, renameProp } from '../../utilities';
const buttonPath = '/**/tests/mock/**/button/**/*.tsx';
const dropDownPath = '/**/tests/mock/**/dropdown/**/*.tsx';

describe('Persona props mod tests', () => {
  let project: Project;

  beforeEach(() => {
    project = new Project();
    project.addSourceFilesAtPaths(`${process.cwd()}${buttonPath}`);
    project.addSourceFilesAtPaths(`${process.cwd()}${dropDownPath}`);
  });

  it('can rename the toggled feature in Button', () => {
    const file = project.getSourceFileOrThrow('mButtonProps.tsx');
    const tags = findJsxTag(file, 'Button');
    renameProp(tags, 'toggled', 'checked');
    tags.forEach(val => {
      expect(val.getAttribute('toggled')).not.toBeTruthy();
    });
  });

  it('can work on the dropdown example', () => {
    const file = project.getSourceFileOrThrow('mDropdownSpreadProps.tsx');
    const tags = findJsxTag(file, 'Dropdown');
    renameProp(tags, 'isDisabled', 'disabled');
    tags.forEach(val => {
      expect(val.getText().includes('disabled={isDisabled}')).toBeTruthy();
    });
  });

  it('can rename a prop in a spread operator with complex spread examples', () => {
    const file = project.getSourceFileOrThrow('mCompoundButtonProps.tsx');
    const tags = findJsxTag(file, 'CompoundButton');
    renameProp(tags, 'toggled', 'checked');
    tags.forEach(val => {
      expect(val.getText().includes('checked={toggled}')).toBeTruthy();
    });
    console.log(file);
  });
});
