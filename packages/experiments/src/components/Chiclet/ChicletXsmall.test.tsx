import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { ChicletXsmall } from './ChicletXsmall';
import { IChicletCardProps } from './ChicletCard.types';

describe('Dialog', () => {
  it('renders chiclet with title, icon, onClick, and url', () => {
    const chicletCardProps: IChicletCardProps = {
      title: 'My Daily Notes',
      itemType: 'docx',
      onClick: () => alert('test')
    };
    const component = renderer.create(<ChicletXsmall {...chicletCardProps} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
