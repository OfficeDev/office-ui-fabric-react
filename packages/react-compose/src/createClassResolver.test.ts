import { createClassResolver } from './createClassResolver';

describe('createClassResolver', () => {
  const classResolver = createClassResolver({
    root: 'root',
    slot1: 'slot1',
    slot2: 'slot2',
    _primary: 'primary',
    size_small: 'small',
    size_medium: 'medium',
  });

  it('can resolve slot classes', () => {
    expect(classResolver({})).toEqual({
      root: 'root',
      slot1: 'slot1',
      slot2: 'slot2',
    });
  });

  it('can resolve modifiers', () => {
    expect(classResolver({ primary: true })).toEqual({
      root: 'root primary',
      slot1: 'slot1 primary',
      slot2: 'slot2 primary',
    });
  });

  it("can ignore props which don't resolve to slots or modifiers", () => {
    expect(classResolver({ primary: true, secondary: true })).toEqual({
      root: 'root primary',
      slot1: 'slot1 primary',
      slot2: 'slot2 primary',
    });
  });

  it('can resolve enums', () => {
    // Can resolve
    expect(classResolver({ size: 'small' })).toEqual({
      root: 'root small',
      slot1: 'slot1 small',
      slot2: 'slot2 small',
    });
  });

  it('can resolve mixed content, including a className in props', () => {
    // Can resolve
    expect(classResolver({ className: 'foo', primary: true, size: 'medium' })).toEqual({
      root: 'foo root primary medium',
      slot1: 'slot1 primary medium',
      slot2: 'slot2 primary medium',
    });
  });
});
