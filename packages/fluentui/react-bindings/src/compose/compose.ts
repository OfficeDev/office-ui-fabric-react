import * as React from 'react';
import { ComposeInputOptions, ComposePreparedOptions } from './types';

export const COMPOSE_PROP = 'FLUENT_COMPOSE_CONFIG';

function computeDisplayNames(
  InputComponent: React.FunctionComponent & { [COMPOSE_PROP]?: ComposePreparedOptions },
  options: ComposeInputOptions<any, any, any>
): string[] {
  if (options.overrideStyles) {
    return [options.displayName || InputComponent.displayName].filter(Boolean) as string[];
  }

  // To support styles composition we need to properly pick up display names
  const previousOptions = InputComponent[COMPOSE_PROP];

  if (previousOptions) {
    return [...previousOptions.displayNames, options.displayName].filter(Boolean) as string[];
  }

  return [InputComponent.displayName, options.displayName].filter(Boolean) as string[];
}

function compose<OverrideProps, BehaviorProps, StylesProps, ComponentProps>(
  InputComponent: React.FunctionComponent<ComponentProps> & { [COMPOSE_PROP]?: ComposePreparedOptions },
  options: ComposeInputOptions<ComponentProps & OverrideProps, BehaviorProps, StylesProps> = {}
): React.FunctionComponent<ComponentProps & OverrideProps> & {
  [COMPOSE_PROP]: ComposePreparedOptions;
} {
  const ComposedComponent: React.FunctionComponent<ComponentProps & OverrideProps> & {
    [COMPOSE_PROP]: ComposePreparedOptions;
  } = InputComponent.bind(null);

  ComposedComponent.displayName = options.displayName || InputComponent.displayName;

  ComposedComponent[COMPOSE_PROP] = {
    className: options.className || process.env.NODE_ENV === 'production' ? '' : 'no-classname-🙉',
    displayNames: computeDisplayNames(InputComponent, options),

    mapPropsToBehaviorChain: [...(InputComponent[COMPOSE_PROP]?.mapPropsToBehaviorChain || []), options.mapPropsToBehavior].filter(
      Boolean
    ) as any /* TODO */,
    mapPropsToStylesChain: [...(InputComponent[COMPOSE_PROP]?.mapPropsToStylesChain || []), options.mapPropsToStyles].filter(
      Boolean
    ) as any /* TODO */,

    handledProps: [...(InputComponent[COMPOSE_PROP]?.handledProps || []), ...(options.handledProps || [])] as any /* TODO */,
    overrideStyles: options.overrideStyles || false
  };

  return ComposedComponent;
}

export default compose;
