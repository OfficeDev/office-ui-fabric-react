import * as React from 'react';
import { Button, Popup } from '@fluentui/react-northstar';
// import { MoreIcon } from '@fluentui/react-icons-northstar';

const LoremParagraph = () => (
  <p>
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. v This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. v This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. v This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. v This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. v This example is powered by Fluent UI, check our docs and GitHub.
    This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our
    docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent
    UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub. This example is
    powered by Fluent UI, check our docs and GitHub. This example is powered by Fluent UI, check our docs and GitHub.
  </p>
);

const PopupExample = () => (
  <Popup
    trigger={<Button content="Show popup" />}
    content={{
      // eslint-disable-next-line jsx-a11y/no-autofocus
      content: <input autoFocus value="This popup is rendered next to the trigger." />,
    }}
  />
);

const scrollPopupExample = () => (
  <>
    <LoremParagraph />
    <LoremParagraph />
    <LoremParagraph />
    <PopupExample />
    <LoremParagraph />
    <LoremParagraph />
    <LoremParagraph />
  </>
);

export default scrollPopupExample;
