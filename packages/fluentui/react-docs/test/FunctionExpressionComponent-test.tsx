import { getComponentInfo } from '@fluentui/react-docs';

describe('getFunctionExpressionComponent', () => {
  it('creates an untyped function expression component', () => {
    const componentInfo = getComponentInfo('./test/fixtures/imports/FunctionExpressionComponent.tsx');
    expect(componentInfo.displayName).toEqual('FunctionExpressionComponent');
  });

  it('creates a function expression component with no props argument and throws', () => {
    expect(() => {
      getComponentInfo('./test/fixtures/imports/FunctionExpressionComponentNoProps.tsx');
    }).toThrow();
  });

  it('creates an untyped function expression component with props typed with an interface', () => {
    const componentInfo = getComponentInfo('./test/fixtures/imports/FunctionExpressionComponentPropsInterface.tsx');
    expect(componentInfo.displayName).toEqual('FunctionExpressionComponentPropsInterface');
  });

  it('creates an untyped function expression component with props typed with an Type', () => {
    const componentInfo = getComponentInfo('./test/fixtures/imports/FunctionExpressionComponentPropsType.tsx');
    expect(componentInfo.displayName).toEqual('FunctionExpressionComponentPropsType');
  });

  it('creates an untyped function expression component with props typed with an imported interface', () => {
    const componentInfo = getComponentInfo('./test/fixtures/imports/FunctionExpressionComponentPropsInterfaceImported.tsx');
    expect(componentInfo.displayName).toEqual('FunctionExpressionComponentPropsInterfaceImported');
  });

  it('creates an untyped function expression component with props typed with an Type', () => {
    const componentInfo = getComponentInfo('./test/fixtures/imports/FunctionExpressionComponentPropsTypeImported.tsx');
    expect(componentInfo.displayName).toEqual('FunctionExpressionComponentPropsTypeImported');
  });

  it('throws on an untyped function expression component with props typed Inline', () => {
    const componentInfo = getComponentInfo('./test/fixtures/imports/FunctionExpressionComponentPropsInline.tsx');
    expect(componentInfo.displayName).toEqual('FunctionExpressionComponentPropsInline');
  });
});
