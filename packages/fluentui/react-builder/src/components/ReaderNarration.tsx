import * as React from 'react';
import { Alert, Ref, Dropdown, DropdownProps } from '@fluentui/react-northstar';
import { NarrationComputer, IAriaElement } from './../narration/NarrationComputer';

const computer = new NarrationComputer();
let focusableElements = {};
let elementsPaths = [];
let selectedElementPath = null;
let prevNarrationElement = null;
const aomMissing = !(window as any).getComputedAccessibleNode;

export type ReaderNarrationProps = {
  selector: string;
  inUseMode: boolean;
};

export const ReaderNarration: React.FunctionComponent<ReaderNarrationProps> = ({ selector, inUseMode }) => {
  const ref = React.useRef<HTMLElement>();
  const [narrationElement, setNarrationElement] = React.useState(null);
  const [narrationText, setNarrationText] = React.useState('');

  // Sets the complete screen reader narration text to be displayed.
  const setCompleteText = text => {
    setNarrationText(text !== null ? `Narration: ${text}` : null);
  }; // End setCompleteText

  // Handles the element path dropdown change event by updating the current and previous narration elements.
  const handleElementPathChange = (event: any, props: DropdownProps) => {
    const path = props.value as string;
    selectedElementPath = path;

    prevNarrationElement = narrationElement;
    setNarrationElement(focusableElements[path]);
  }; // End handleElementPathChange

  // Handles the "focusin" event by updating the current and previous narration elements.
  const handleFocusIn = React.useCallback(
    event => {
      prevNarrationElement = narrationElement;
      setNarrationElement(event.target as IAriaElement);
    },
    [narrationElement],
  ); // End handleFocusIn

  // Recomputes the narration text upon every render.
  React.useEffect(() => {
    if (!ref.current || aomMissing) {
      return;
    }

    // The null value of the narration element means no focusable element has been found
    if (narrationElement == null) {
      // Begin if 1
      setCompleteText(null);
      return;
    } // End if 1

    // Compute and save the narration text for the current and previous elements
    computer.getNarration(narrationElement, prevNarrationElement, 'Win/JAWS').then(text => {
      setCompleteText(text);
    }); // En getNarration
  }); // End useEffect

  // Recomputes and saves the focusable elements and their  paths for the tree rooted at the  selector's element upon every selector change.
  React.useEffect(() => {
    if (!ref.current || aomMissing) {
      return;
    }
    const element = ref.current.ownerDocument.querySelector(selector) as IAriaElement;
    computer.getFocusableElements(element).then(focusableElementsItems => {
      focusableElements = {};
      elementsPaths = [];
      focusableElementsItems.forEach(focusableElementItem => {
        // Begin forEach 1
        const path = focusableElementItem.path.join(' > ');
        focusableElements[path] = focusableElementItem.element;
        elementsPaths.push(path);
      }); // End forEach 1

      prevNarrationElement = narrationElement;
      if (elementsPaths.length >= 1) {
        // Begin if 1
        // Preselect the first element path and the corresponding narration element as defaults
        selectedElementPath = elementsPaths[0];
        setNarrationElement(focusableElementsItems[0].element);
      } else {
        // Else if 1
        selectedElementPath = null;
        setNarrationElement(null);
      } // End if 1
    }); // End getFocusableElements
  }, [selector, narrationElement]); // End useEffect

  // Sets up the "focusin" event listener if in the use mode.
  React.useEffect(() => {
    const alert = ref.current;
    if (!inUseMode || !alert || aomMissing) {
      return null;
    }
    alert.ownerDocument.addEventListener('focusin', handleFocusIn);
    return () => {
      alert.ownerDocument.removeEventListener('focusin', handleFocusIn);
    }; // End return
  }, [inUseMode, handleFocusIn]); // End useEffect

  return (
    <>
      {!inUseMode && elementsPaths.length >= 2 && (
        <Dropdown
          items={elementsPaths}
          defaultValue={selectedElementPath}
          value={selectedElementPath}
          onChange={handleElementPathChange}
          getA11ySelectionMessage={{
            onAdd: item => `${item} has been selected.`,
          }}
          placeholder="Select the narration element"
        />
      )}

      <Ref innerRef={ref}>
        <Alert
          warning
          content={
            aomMissing ? (
              <>
                AOM is not available.{' '}
                <a target="_blank" href="http://wicg.github.io/aom/caniuse.html">
                  Enable AOM
                </a>
              </>
            ) : narrationText !== null ? (
              narrationText
            ) : (
              'The selected component has no focusable elements.'
            )
          }
        />
      </Ref>
    </>
  );
}; // End ReaderNarration
