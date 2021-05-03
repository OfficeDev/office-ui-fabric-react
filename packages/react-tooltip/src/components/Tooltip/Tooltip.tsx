import * as React from 'react';
import { useTooltip } from './useTooltip';
import { TooltipProps } from './Tooltip.types';
import { renderTooltip } from './renderTooltip';
import { useTooltipStyles } from './useTooltipStyles';

/**
 * A tooltip provides light weight contextual information on top of its target element.
 *
 * {@docCategory Tooltip}
 */
export const Tooltip: React.FC<TooltipProps> = props => {
  const state = useTooltip(props);

  useTooltipStyles(state);
  return renderTooltip(state);
};

Tooltip.displayName = 'Tooltip';
