import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { resetIds } from '../Utilities';

import * as DataUtil from '@uifabric/example-app-base/lib-commonjs/utilities/data';

const excludedFiles: string[] = [
  // NOTE: Please consider modifying your component example to work with this test instead
  //        of adding it to the exclusion list as this will make regression harder to detect.

  // Most of these can probably be resolved by modifying the test or having some underlying function mocked,
  //  but are excluded for now to get base test coverage up immediately.

  'Calendar.Inline.Example.tsx', // date mocking appears to trigger infinite loop
  'ExampleHelper.tsx', // Helper file with no actual component
  'GroupedList.Basic.Example.tsx',
  'GroupedList.Custom.Example.tsx',
  'List.Basic.Example.tsx',
  'List.Ghosting.Example.tsx',
  'List.Grid.Example.tsx',
  'List.Scrolling.Example.tsx',
  'Nav.FabricDemoApp.Example.tsx',
  'Picker.CustomResult.Example.tsx',
  'ScrollablePane.Default.Example.tsx',
  'ScrollablePane.DetailsList.Example.tsx',
  'SelectedPeopleList.Basic.Example.tsx'
];

declare const global: any;

/**
 * Automatically connsume and test any component examples that are added to the codebase.
 *
 * If you are here and are getting a failure due to a component you recently added,
 *    here are some options:
 *    1) Does your test have a random or time element that causes its output to change every time?
 *       If so, you can mock the random/time function for consistent output, remove random/time element
 *       from the example, or add your component to the excluded list above.
 *    2) If there is some other run-time issue you can either modify the example or add your component
 *       to the exclusion list above.
 *
 * In any case, adding your component to the exclusion list is discouraged as this will make regression
 *    harder to catch.
 *
 * If you didn't recently add a component, please review the snapshot output changes to confirm they are
 *    what you expect before submitting a PR.
 */
describe('Component Examples', () => {
  const glob = require('glob');
  const path = require('path');
  const realDate = Date;
  const constantDate = new Date('2017-06-13T04:41:20');
  const files: string[] = glob.sync(path.resolve(process.cwd(), 'src/components/**/examples/*Example*.tsx'));

  beforeEach(() => {
    // Resetting ids to create predictability in generated ids.
    resetIds();
  });

  beforeAll(() => {
    // Prevent random and time elements from failing repeated tests.
    global.Date = class {
      public static now() {
        return constantDate;
      }

      constructor() {
        return constantDate;
      }
    };

    jest.spyOn(DataUtil, 'lorem').mockImplementation(() => {
      return 'lorem text';
    });
    jest.spyOn(Math, 'random').mockImplementation(() => {
      return 0;
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
    global.Date = realDate;
  });

  files
    .filter((componentFile: string) => {
      return excludedFiles.find(excludedFile => componentFile.endsWith(excludedFile)) === undefined;
    })
    .forEach((componentFile: string) => {
      const componentFileName = componentFile.substring(componentFile.lastIndexOf('/') + 1);
      it('renders ' + componentFileName + ' correctly', () => {
        try {
          const ExampleFile = require(componentFile);
          Object.keys(ExampleFile).forEach(key => {
            const ComponentUnderTest: React.ComponentClass = ExampleFile[key];
            const component = renderer.create(<ComponentUnderTest />);
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
          });
        } catch (e) {
          console.warn(
            'TEST NOTE: Failure with ' +
              componentFile +
              '. ' +
              'Have you recently added a component? If so, please see notes in ComponentExamples.test.tsx.'
          );
        }
      });
    });
});
