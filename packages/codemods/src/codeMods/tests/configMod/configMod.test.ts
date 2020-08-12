import { Project } from 'ts-morph';
import { createCodeModFromJson } from '../../mods/configMod/configMod';
import { Maybe } from '../../../helpers/maybe';
import { runMods } from '../../../modRunner/runnerUtilities';

const buttonPath = '/**/tests/mock/**/button/**/*.tsx';
const dropDownPath = '/**/tests/mock/**/dropdown/**/*.tsx';

describe('Tests a simple data-driven codeMod', () => {
  let project: Project;

  beforeEach(() => {
    project = new Project();
    project.addSourceFilesAtPaths(`${process.cwd()}${buttonPath}`);
    project.addSourceFilesAtPaths(`${process.cwd()}${dropDownPath}`);
  });

  it('can rename the isDisabled feature in Dropdown', () => {
    const mod = Maybe(createCodeModFromJson());
    if (mod.something) {
      const mods = [];
      mods.push(mod.value);
      runMods(mods, project.getSourceFiles(), result => {
        if (result.error) {
          console.error(`Error running mod ${result.mod.name} on file ${result.file.getBaseName()}`, result.error);
        } else {
          console.log(`Upgraded file ${result.file.getBaseName()} with mod ${result.mod.name}`);
        }
      });
    }
    /* Visual inspection. TODO: make automated tests */
    console.log(project.getSourceFile('mCompoundButtonProps.tsx')?.getFullText());
    console.log(project.getSourceFile('mDropdownProps.tsx')?.getFullText());
  });
});
