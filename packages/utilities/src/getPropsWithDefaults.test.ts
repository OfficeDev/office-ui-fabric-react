import { getPropsWithDefaults } from './getPropsWithDefaults';

interface Props {
  num?: number;
  bool?: boolean;
  str?: string;
  fn?: () => void;
  nul?: string | null;
}

const defaultProps: Props = {
  num: 4,
  bool: true,
  str: 'default',
  fn: () => {
    console.log('default');
  },
  nul: 'not null',
};

describe('getPropsWithDefaults', () => {
  it("doesn't override non-undefined specified values", () => {
    const propsWithoutDefaults: Props = {
      num: 0,
      bool: false,
      str: '',
      fn: jasmine.createSpy('fn'),
      nul: null,
    };

    const props = getPropsWithDefaults(defaultProps, propsWithoutDefaults);

    expect(props.num).toEqual(propsWithoutDefaults.num);
    expect(props.bool).toEqual(propsWithoutDefaults.bool);
    expect(props.str).toEqual(propsWithoutDefaults.str);
    expect(props.fn).toEqual(propsWithoutDefaults.fn);
    expect(props.nul).toEqual(propsWithoutDefaults.nul);
  });

  it('overrides specified undefined values', () => {
    const propsWithoutDefaults: Props = {
      num: undefined,
      bool: undefined,
      str: undefined,
      fn: undefined,
      nul: undefined,
    };

    const props = getPropsWithDefaults(defaultProps, propsWithoutDefaults);

    expect(props.num).toEqual(defaultProps.num);
    expect(props.bool).toEqual(defaultProps.bool);
    expect(props.str).toEqual(defaultProps.str);
    expect(props.fn).toEqual(defaultProps.fn);
    expect(props.nul).toEqual(defaultProps.nul);
  });

  it('overrides unspecified values', () => {
    const propsWithoutDefaults: Props = {};

    const props = getPropsWithDefaults(defaultProps, propsWithoutDefaults);

    expect(props.num).toEqual(defaultProps.num);
    expect(props.bool).toEqual(defaultProps.bool);
    expect(props.str).toEqual(defaultProps.str);
    expect(props.fn).toEqual(defaultProps.fn);
    expect(props.nul).toEqual(defaultProps.nul);
  });
});
