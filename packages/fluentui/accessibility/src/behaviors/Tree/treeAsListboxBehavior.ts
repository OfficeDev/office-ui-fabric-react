import * as _ from 'lodash';

import { Accessibility } from '../../types';
import { treeBehavior, TreeBehaviorProps } from './treeBehavior';
import { treeItemAsOptionBehavior } from './treeItemAsOptionBehavior';
import { treeTitleAsOptionBehavior } from './treeTitleAsOptionBehavior';

/**
 * @specification
 * Adds role='listbox'.
 * Adds attribute 'aria-multiselectable=true' to 'root' slot if 'selectable' property is true. Does not set the attribute otherwise.
 */
export const treeAsListboxBehavior: Accessibility<TreeBehaviorProps> = props => {
  const behavior = treeBehavior(props);
  const definition = _.merge(behavior, {
    attributes: {
      root: {
        role: 'listbox',
      },
    },
    childBehaviors: {
      item: treeItemAsOptionBehavior,
      title: treeTitleAsOptionBehavior,
    },
  });

  if (process.env.NODE_ENV !== 'production') {
    definition.attributes.root['data-aa-class'] = 'TreeListbox';
  }
  return definition;
};
