import * as React from 'react';
import { EventListener } from '@fluentui/react-component-event-listener';

let timeout;

const narrate = (message, priority = 'polite') => {
  const element = document.createElement('div');
  element.setAttribute(
    'style',
    'position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;',
  );
  element.setAttribute('aria-live', priority);
  document.body.appendChild(element);

  timeout = setTimeout(() => {
    element.innerText = message;
  }, 2000); // End setTimeout 1

  setTimeout(() => {
    document.body.removeChild(element);
  }, 2300); // End setTimeout 1
}; // End narrate

export const AccessibleNavBar: React.FunctionComponent = () => {
  const [navBarItems, setNavBarItems] = React.useState<HTMLElement[]>(null);
  const [focusedItemIndex, setFocusedItemIndex] = React.useState(0);

  const handleDocumentFocus = React.useCallback(
    event => {
      // Reset the NavBar items if an element other than the current NavBar items is focused
      if (navBarItems && !Array.from(navBarItems).includes(event.target) && !event.target.dontResetNavBarItems) {
        // Begin if 1
        setNavBarItems(null);
      } // End if 1
      event.target.dontResetNavBarItems = false;
    },
    [navBarItems],
  ); // End handleDocumentFocus

  React.useEffect(() => {
    document.addEventListener('focusin', handleDocumentFocus);
    return () => {
      document.removeEventListener('focusin', handleDocumentFocus);
    };
  }); // End useEffect

  const handleKeyDown = React.useCallback(
    event => {
      if (navBarItems === null) {
        // Begin if 1
        return;
      } // End if 1
      switch (
        event.code // Begin switch 1
      ) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowUp':
          // Set tabindex="-1" on the previously focused navBar item
          navBarItems[focusedItemIndex].setAttribute('tabindex', '-1');

          // Compute and set the new focused item index
          setFocusedItemIndex(prevIndex => {
            const tempIndex = prevIndex + (['ArrowRight', 'ArrowDown'].includes(event.code) ? 1 : -1);
            const newIndex = tempIndex >= navBarItems.length ? 0 : tempIndex < 0 ? navBarItems.length - 1 : tempIndex;

            // Set tabindex="0" on the newly focused navBar item and focus it
            navBarItems[newIndex].setAttribute('tabindex', '0');
            navBarItems[newIndex].focus();
            return newIndex;
          });
          break;
        default:
          break;
      } // End switch 1
    },
    [navBarItems, focusedItemIndex],
  ); // End handleKeyDown

  const handleFocus = React.useCallback(
    event => {
      // If the NavBar items have been reset or the focus has moved from one NavBar items to another, narrate the usage hint
      if (!navBarItems || !Array.from(navBarItems).includes(event.target)) {
        // Begin if 1
        narrate('To navigate use the arrow keys');
      } // End if 1
      event.target.dontResetNavBarItems = true;

      // Determine and save the focused navBar items
      const items = event.currentTarget.querySelectorAll('.item');
      setNavBarItems(items);

      // Find the navBar item with tabindex="0" and set the focused navBar item index accordingly
      Array.from(items).forEach((item: HTMLElement, index) => {
        // Begin forEach 1
        const tabindex = item.getAttribute('tabindex');
        if (tabindex === '0') {
          // Begin if 1
          setFocusedItemIndex(index);
        } // End if 1
      }); // End forEach 1
    },
    [navBarItems],
  ); // End handleFocus

  const handleBlur = React.useCallback(
    event => {
      if (!Array.from(navBarItems).includes(event.relatedTarget)) {
        // Begin if 1
        clearTimeout(timeout);
      } // End if 1
    },
    [navBarItems],
  ); // End handleBlur

  return (
    <>
      <h1>Accessible navigation bar prototype</h1>
      <ul>
        <li>
          This page demonstrates different variants of the navigation bar component of Microsoft Teams from the
          accessibility point of view. Previously, this component was known as App bar, but this new version suggests
          renaming it to "navigation bar".
        </li>
        <li>
          For the new navigation bar requirements, additional notes, comparison with the previous version of the
          navigation bar and conclusions, please check{' '}
          <a href="https://ghe-us.microsoft.com/Microsoft-Design-System-Studio/taos/blob/main/App%20Bar/Accessibility.md">
            this documentation site
          </a>
          .
        </li>
        <li>The accepted variant of the navigation bar is the last one on this page.</li>
      </ul>

      <EventListener type="keydown" listener={handleKeyDown} target={document} />

      <h2>role="toolbar"</h2>
      <div role="toolbar" aria-label="Navigation bar" onFocus={handleFocus} onBlur={handleBlur}>
        <button className="item" tabIndex={0} aria-pressed="false">
          Activities
        </button>
        <button className="item" tabIndex={-1} aria-pressed="true">
          Chats
        </button>
        <button className="item" tabIndex={-1} aria-pressed="false">
          Teams
        </button>
        <button className="item" tabIndex={-1} aria-pressed="false">
          Calendar
        </button>
      </div>
      <h3>Notes</h3>
      <ul>
        <li>
          The toolbar variant is rejected because the toolbar role does not fit the navigation bar purpose. The toolbar
          role is more appropriate for a set of tools rather than the main navigation of the app.
        </li>
        <li>When entering the toolbar content, JAWS, NVDA and VoiceOver all read "toolbar" as the firs narration.</li>
      </ul>

      <h2>role="tablist"</h2>
      <div role="tablist" onFocus={handleFocus} onBlur={handleBlur}>
        <button role="tab" className="item" tabIndex={0} aria-selected="false">
          Activities
        </button>
        <button role="tab" className="item" tabIndex={-1} aria-selected="true">
          Chats
        </button>
        <button role="tab" className="item" tabIndex={-1} aria-selected="false">
          Teams
        </button>
        <button role="tab" className="item" tabIndex={-1} aria-selected="false">
          Calendar
        </button>
      </div>
      <h3>Notes</h3>
      <ul>
        <li>
          The tablist variant is not appropriate because it does not fit the navigation bar purpose. The tablist role is
          more appropriate for use in structured text content, forms or settings panels rather than the main navigation
          of the app.
        </li>
        <li>
          The tablist role is not appropriate because, when VPC cursor is disabled, JAWS reads "To switch pages press
          Control+PageDown" as the instruction message when a tab is focused.
        </li>
      </ul>

      <h2>role="menu"</h2>
      <div role="menu" onFocus={handleFocus} onBlur={handleBlur}>
        <button role="menuitem" className="item" tabIndex={0}>
          Activities
        </button>
        <button role="menuitem" className="item" tabIndex={-1}>
          Chats
        </button>
        <button role="menuitem" className="item" tabIndex={-1}>
          Teams
        </button>
        <button role="menuitem" className="item" tabIndex={-1}>
          Calendar
        </button>
      </div>
      <h3>Notes</h3>
      <ul>
        <li>
          The menuitem role does not allow the use of the aria-pressed or aria-selected attribute so this variant is
          rejected.
        </li>
        <li>When entering the navigation bar content, JAWS reads "menu" as the firs narration.</li>
        <li>When leaving the navigation bar content, JAWS reads "leaving menus".</li>
        <li>
          When entering the navigation bar content, JAWS reads "To move through items press up or down arrow" as the
          last narration.
        </li>
        <li>
          Neither the "menu", nor the "menubar" role is appropriate because VoiceOver reads "To close the menu, press
          Escape" as the instruction message.
        </li>
      </ul>

      <h2>&lt;li&gt; items</h2>
      <ul onFocus={handleFocus} onBlur={handleBlur}>
        <li>
          <button className="item" tabIndex={0} aria-pressed="false">
            Activities
          </button>
        </li>
        <li>
          <button className="item" tabIndex={-1} aria-pressed="true">
            Chats
          </button>
        </li>
        <li>
          <button className="item" tabIndex={-1} aria-pressed="false">
            Teams
          </button>
        </li>
        <li>
          <button className="item" tabIndex={-1} aria-pressed="false">
            Calendar
          </button>
        </li>
      </ul>
      <h3>Notes</h3>
      <ul>
        <li>
          When entering the navigation bar content, the position and size is announced, which is not desired, especially
          because with JAWS and NVDA it's narrated before the navigation bar item. So to make the narration less
          verbose, this variant is rejected.
        </li>
      </ul>

      <h2>&lt;nav&gt; landmark</h2>
      <nav aria-label="Navigation bar" onFocus={handleFocus} onBlur={handleBlur}>
        <button className="item" tabIndex={0} aria-pressed="false">
          Activities
        </button>
        <button className="item" tabIndex={-1} aria-pressed="true">
          Chats
        </button>
        <button className="item" tabIndex={-1} aria-pressed="false">
          Teams
        </button>
        <button className="item" tabIndex={-1} aria-pressed="false">
          Calendar
        </button>
      </nav>

      <h3>Notes</h3>
      <ul>
        <li>
          When entering the navigation bar content, JAWS announces "navigation region" and NVDA announces "navigation
          landmark" after narrating the label but before narrating the focused navigation bar item. Since the label we
          want is "Navigation bar", the word "navigation" would be spoken twice, so this variant is rejected.
        </li>
        <li>
          Narrator does not read this landmark in any way, it just reads its aria-label. So this is another reason to
          reject this variant.
        </li>
      </ul>

      <h2>role="region"</h2>
      <div role="region" aria-label="navigation bar" onFocus={handleFocus} onBlur={handleBlur}>
        <button className="item" tabIndex={0} aria-pressed="false">
          Activities
        </button>
        <button className="item" tabIndex={-1} aria-pressed="true">
          Chats
        </button>
        <button className="item" tabIndex={-1} aria-pressed="false">
          Teams
        </button>
        <button className="item" tabIndex={-1} aria-pressed="false">
          Calendar
        </button>
      </div>

      <h3>Notes</h3>
      <ul>
        <li>
          When entering the navigation bar content, both JAWS and NVDA announce "region after narrating the label but
          before narrating the focused navigation bar item.
        </li>
        <li>
          JAWS in the virtual cursor mode behaves as if the "region" role was not present on the navigation bar
          elemente, so this variant is rejected.
        </li>
      </ul>

      <h2>aria-label only</h2>
      <div aria-label="Navigation bar" onFocus={handleFocus} onBlur={handleBlur}>
        <button className="item" tabIndex={0} aria-pressed="false">
          Activities
        </button>
        <button className="item" tabIndex={-1} aria-pressed="true">
          Chats
        </button>
        <button className="item" tabIndex={-1} aria-pressed="false">
          Teams
        </button>
        <button className="item" tabIndex={-1} aria-pressed="false">
          Calendar
        </button>
      </div>

      <h3>Notes</h3>
      <ul>
        <li>
          NVDA does not narrate the aria-label when entering the navigation bar content so this variant is rejected.
        </li>
      </ul>

      <h2>role="group" and aria-label (accepted variant)</h2>
      <div role="group" aria-label="Navigation bar" onFocus={handleFocus} onBlur={handleBlur}>
        <button className="item" tabIndex={0} aria-pressed="false">
          Activities
        </button>
        <div>
          <button className="item" tabIndex={-1} aria-pressed="true" aria-describedby="chats-desc">
            Chats
          </button>
          <div
            id="chats-desc"
            style={{
              position: 'absolute',
              left: '-10000px',
              top: 'auto',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
            }}
          >
            7 conversations with new messages
          </div>
        </div>
        <div>
          <button className="item" tabIndex={-1} aria-pressed="false" aria-describedby="teams-desc">
            Teams
          </button>
          <div
            id="teams-desc"
            style={{
              position: 'absolute',
              left: '-10000px',
              top: 'auto',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
            }}
          >
            4 teams with new messages
          </div>
        </div>
        <button className="item" tabIndex={-1} aria-pressed="false">
          Calendar
        </button>
      </div>

      <h3>Notes</h3>
      <ul>
        <li>
          NVDA sometimes (could not reproduce when) does not narrate the aria-label when entering the navigation bar
          content. However, it does narrate it when in the forms mode.
        </li>
        <li>
          When entering the navigation bar content, JAWS announces "group" and NVDA announces "grouping" after narrating
          the label but before narrating the navigation bar item.
        </li>
        <li>This variant is accepted as the best solution.</li>
      </ul>
    </>
  );
}; // End AccessibleNavBar
