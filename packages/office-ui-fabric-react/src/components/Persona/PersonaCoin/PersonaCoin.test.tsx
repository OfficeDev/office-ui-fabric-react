/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { setRTL, IRenderFunction } from '../../../Utilities';
import { PersonaCoin } from './PersonaCoin';
import { IPersonaSharedProps, IPersonaProps } from '../../../index';

const testImage1x1 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQImWP4DwQACfsD/eNV8pwAAAAASUVORK5CYII=';

const coinProp = {
  text: 'Swapnil Vaibhav',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
  size: 15
};

/**
 * function to override the default onRender callbacks
 */
const wrapPersona = (
  example: IPersonaSharedProps
): ((coinProps: IPersonaProps, defaultRenderer: IRenderFunction<IPersonaProps>) => JSX.Element | null) => {
  return (coinProps, defaultCoinRenderer): JSX.Element | null => {
    return defaultCoinRenderer(coinProps);
  };
};

describe('PersonaCoin', () => {
  beforeEach(() => {
    setRTL(false);
  });

  it('renders correctly', () => {
    const component = renderer.create(<PersonaCoin />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with text', () => {
    const component = renderer.create(<PersonaCoin text="Kat Larrson" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with provided initials', () => {
    const component = renderer.create(<PersonaCoin imageInitials="JG" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with image', () => {
    const component = renderer.create(<PersonaCoin text="Kat Larrson" imageUrl={testImage1x1} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the initials before the image is loaded', () => {
    const component = renderer.create(
      <PersonaCoin text="Kat Larrson" imageUrl={testImage1x1} showInitialsUntilImageLoads={true} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('does not render the initials when showInitialsUntilImageLoads is false', () => {
    const component = renderer.create(
      <PersonaCoin text="Kat Larrson" imageUrl={testImage1x1} showInitialsUntilImageLoads={false} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with onRender callback', () => {
    const component = renderer.create(
      <PersonaCoin {...coinProp} onRenderCoin={wrapPersona(coinProp)} onRenderInitials={wrapPersona(coinProp)} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
