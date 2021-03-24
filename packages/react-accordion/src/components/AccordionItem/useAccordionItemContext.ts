import * as React from 'react';
import { useAccordionDescendant, accordionContext } from '../Accordion/useAccordionContext';
import { AccordionItemContext, AccordionItemState } from './AccordionItem.types';
import { useContextSelector } from '@fluentui/react-context-selector';

// No default value.
export const accordionItemContext = React.createContext<AccordionItemContext>({
  onHeaderClick() {
    /** */
  },
  open: false,
  disabled: false,
});

export const useAccordionItemContext = () => React.useContext(accordionItemContext);

/**
 * Creates internal context to be consumed by AccordionHeader and AccordionPanel
 */
export function useCreateAccordionItemContext(state: AccordionItemState) {
  const disabled = state.disabled ?? false;
  // index -1 means context not provided
  const index = useAccordionDescendant({
    element: state.ref.current,
    disabled,
  });
  const requestToggle = useContextSelector(accordionContext, ctx => ctx.requestToggle);
  const open = useContextSelector(accordionContext, ctx => ctx.openItems.includes(index));
  const onAccordionHeaderClick = React.useCallback((ev: React.MouseEvent<HTMLElement>) => requestToggle(ev, index), [
    requestToggle,
    index,
  ]);
  const context = React.useMemo<AccordionItemContext>(
    () => ({
      open,
      onHeaderClick: onAccordionHeaderClick,
      disabled,
    }),
    [onAccordionHeaderClick, open, disabled],
  );
  return context;
}
