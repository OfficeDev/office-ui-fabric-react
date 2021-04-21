import * as React from 'react';
import { Flex } from './Flex';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';
import { FlexDirectionProperty } from 'csstype';

describe('Flex', () => {
  isConformant({
    Component: Flex,
    displayName: 'Flex',
  });

  /**
   * Note: see more visual regression tests for Flex in /apps/vr-tests.
   */

  it('does not change node structure', () => {
    const { container } = render(
      <Flex>
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a default state', () => {
    const utils = render(
      <Flex data-testid="container">
        <span>item</span>
      </Flex>,
    );

    const container = utils.getByTestId('container');
    expect(container).toHaveStyle({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'normal',
      alignItems: 'normal',
      flexWrap: 'nowrap',
    });
  });

  it('renders default styles for immediate children', () => {
    const utils = render(
      <Flex data-testid="container">
        <span>affected</span>
        <span>
          <span>unaffected</span>
        </span>
      </Flex>,
    );

    // TODO: Test initial CSS var values

    const affected = utils.getByText('affected');
    expect(affected).toHaveStyle({
      order: 0,
      margin: 'var(--gap)',
      flexGrow: 'var(--grow)',
      flexShrink: 'var(--shrink)',
      flexBasis: 'auto',
      alignSelf: 'auto',
    });

    const unaffected = utils.getByText('unaffected');
    expect(unaffected).not.toHaveStyle({
      order: 0,
      margin: 'var(--gap)',
      flexGrow: 'var(--grow)',
      flexShrink: 'var(--shrink)',
      flexBasis: 'auto',
      alignSelf: 'auto',
    });
  });

  test.each([
    ['row', 'row'],
    ['row-reverse', 'row-reverse'],
    ['column', 'column'],
    ['column-reverse', 'column-reverse'],
  ])('changes direction to %s', (direction, expectation) => {
    const utils = render(
      <Flex direction={direction as FlexDirectionProperty} data-testid="container">
        <span>item</span>
      </Flex>,
    );

    const container = utils.getByTestId('container');
    expect(container).toHaveStyle({
      flexDirection: expectation,
    });
  });

  test.each([
    ['row', 'justifyContent'],
    ['row-reverse', 'justifyContent'],
    ['column', 'alignItems'],
    ['column-reverse', 'alignItems'],
  ])('sets horizontal alignment for %s display with prop %s', (direction, expectedStyle) => {
    const utils = render(
      <Flex direction={direction as FlexDirectionProperty} horizontalAlign="center" data-testid="container">
        <span>item</span>
      </Flex>,
    );

    const container = utils.getByTestId('container');
    expect(container).toHaveStyle({
      [expectedStyle]: 'center',
    });
  });

  test.each([
    ['row', 'alignItems'],
    ['row-reverse', 'alignItems'],
    ['column', 'justifyContent'],
    ['column-reverse', 'justifyContent'],
  ])('sets vertical alignment for %s display with prop %s', (direction, expectedStyle) => {
    const utils = render(
      <Flex direction={direction as FlexDirectionProperty} verticalAlign="center" data-testid="container">
        <span>item</span>
      </Flex>,
    );

    const container = utils.getByTestId('container');
    expect(container).toHaveStyle({
      [expectedStyle]: 'center',
    });
  });

  // TODO: Test CSS var value
  // fit('sets item gap', () => {
  //   const utils = render(
  //     <Flex gap="10px">
  //       <span>item</span>
  //     </Flex>,
  //   );

  //   const item = utils.getByText('item');
  //   expect(item).toHaveStyle({
  //     margin: 'var(--gap)',
  //   });
  // });

  // TODO: Test CSS var value
  // describe('sets flex wrap', () => {
  //   it('with prop', () => {
  //     const utils = render(
  //       <Flex wrap data-testid="container">
  //         <span>item</span>
  //       </Flex>,
  //     );

  //     const container = utils.getByTestId('container');
  //     expect(container).toHaveStyle({
  //       flexWrap: 'wrap',
  //     });
  //   });

  //   it('with true prop', () => {
  //     const utils = render(
  //       <Flex wrap={true} data-testid="container">
  //         <span>item</span>
  //       </Flex>,
  //     );

  //     const container = utils.getByTestId('container');
  //     expect(container).toHaveStyle({
  //       flexWrap: 'wrap',
  //     });
  //   });

  //   it('with false prop', () => {
  //     const utils = render(
  //       <Flex wrap={false} data-testid="container">
  //         <span>item</span>
  //       </Flex>,
  //     );

  //     const container = utils.getByTestId('container');
  //     expect(container).toHaveStyle({
  //       flexWrap: 'nowrap',
  //     });
  //   });
  // });

  // TODO: Test CSS var value
  // it('sets flex grow on the items', () => {
  //   const utils = render(
  //     <Flex grow={1}>
  //       <span>item 1</span>
  //       <span>item 2</span>
  //     </Flex>,
  //   );

  //   const item1 = utils.getByText('item 1');
  //   expect(item1).toHaveStyle({
  //     flexGrow: '1',
  //   });

  //   const item2 = utils.getByText('item 2');
  //   expect(item2).toHaveStyle({
  //     flexGrow: '1',
  //   });
  // });

  // TODO: Test CSS var value
  // it('sets flex shrink on the items', () => {
  //   const utils = render(
  //     <Flex shrink={0}>
  //       <span>item 1</span>
  //       <span>item 2</span>
  //     </Flex>,
  //   );

  //   const item1 = utils.getByText('item 1');
  //   expect(item1).toHaveStyle({
  //     flexShrink: '0',
  //   });

  //   const item2 = utils.getByText('item 2');
  //   expect(item2).toHaveStyle({
  //     flexShrink: '0',
  //   });
  // });

  it('sets inline display', () => {
    const utils = render(
      <Flex inline data-testid="container">
        <span>item 1</span>
        <span>item 2</span>
      </Flex>,
    );

    const container = utils.getByTestId('container');
    expect(container).toHaveStyle({
      display: 'inline-flex',
    });
  });
});
