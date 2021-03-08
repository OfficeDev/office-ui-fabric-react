# Accordion

## Background

### Definition

This spec defines the default function of an `Accordion` as a vertically stacked set of interactive panels that each contain a title and content snippet.

An accordion is a vertically stacked group of collapsible sections. An accordion is composed of grouped buttons and panels. When a user selects an accordion button, its corresponding panel should switch between 'open' and 'collapsed' states.

Accordions follow many consistent patterns but do allow for some variability in behavior. For example, some accordions only allow one panel to be open at a time, where others may allow multiple or all panels to be open simultaneously. Similarly, many accordions will allow all panels to be simultaneously collapsed, while others may require one panel to be open at all times.

If you are familiar with the disclosure pattern, an accordion will feel very similar. The key distinction is that a disclosure is a standalone component that consists of a single button-panel-group. Because of this, you cannot navigate between different disclosures with a keyboard the same way you can with an accordion.

## Prior art

As a part of the spec definitions in Fluent UI, a research effort has been made through [Open UI](https://open-ui.org/). The current research proposal is available as an open source contribution undergoing review ([research proposal](https://github.com/WICG/open-ui/pull/263))

## Comparison of `@fluentui/react` and `@fluentui/react-northstar`

- All mentions of v7 or v8 == `@fluentui/react` ([docsite](https://developer.microsoft.com/en-us/fluentui#/))
- All mentions of v0 == `@fluentui/react-northstar` ([docsite](https://fluentsite.z22.web.core.windows.net/))

There's no comparison to be done between the two libraries, since v8 hasn't implemented this component.

## API

The `Accordion` should implement a `children` based API as is the standard across all the surveyed alternatives as a part of Open UI research in [Prior Art](#prior-art). The component will leverage the use of `context` in the interaction and data flows of child components.

Sample usages will be given in the following section of this document [Sample code](#sample-code)

### Accordion

The root level component serves context and common API between all children.

| Prop name          | Type                     | Default Value | Details                                          |
| ------------------ | ------------------------ | ------------- | ------------------------------------------------ |
| multiple           | boolean                  | false         | Allows multiple panels to be expanded            |
| collapsible        | boolean                  | false         | Allows multiple panels to be collapsed           |
| expandIconPosition | "start" or "end"         | "end"         | Position of the icon to indicate expansion       |
| heading            | ElementType              | "h3"          | Heading element for the panel                    |
| onPanelToggle      | PanelToggleEventListener |               | Equivalent to onToggle on AccordionPanel element |

By default, the Accordion is an Uncontrolled component. From the moment that one internal AccordionPanel has the property `open` declared, the Accordion becomes a Controlled component and to ensure behavior `onToggle` must be used.

> Perhaps some error could be emitted in dev when multiple, collapsible and open are being used, like React does when you try to control an uncontrolled component.

```tsx
interface PanelToggleEventListener {
  (open: boolean, index: number): void;
}
```

### AccordionPanel

| Prop name   | Type                    | Details                                                                                                    |
| ----------- | ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| title       | ShorthandValue          | Label for representing a section of content that also serves as control for showing and hiding the content |
| children    | ShorthandValue          | The content with visibility controlled by the panel                                                        |
| open        | boolean                 | Controls the state of the panel                                                                            |
| defaultOpen | boolean                 | Default value for the state of the panel                                                                   |
| expandIcon  | ShorthandValue          | Icon to indicate expansion                                                                                 |
| disabled    | boolean                 | Disables opening/closing of panel                                                                          |
| onToggle    | (open: boolean) => void | Dispatched when it's state changes between opened and closed                                               |

## Sample code

The below samples do not represent the definitive props of the final implemented component, but represent the ideal final implementations. Can be subject to change during the implementation phase.

### Basic Accordion

```tsx
const accordion = (
  <Accordion>
    <AccordionPanel title="First Panel">
      This is the content of the first Panel
    </AccordionPanel>
    <AccordionPanel title="Second Panel">
      This is the content of the second Panel
    </AccordionPanel>
  <Accordion>
)
```

Expected DOM output

```html
<div>
  <h3>
    <div role="button" aria-expanded="false" aria-controls="sect1" id="accordion1">
      First Panel
      <svg>Arrow Icon</svg>
    </div>
  </h3>
  <div id="sect1" role="region" aria-labelledby="accordion1">
    This is the content of the first Panel
  </div>
  <h3>
    <div role="button" aria-expanded="false" aria-controls="sect2" id="accordion2">
      Second Panel
      <svg>Arrow Icon</svg>
    </div>
  </h3>
  <div id="sect2" role="region" aria-labelledby="accordion2">
    This is the content of the second Panel
  </div>
</div>
```

### One panel opened Accordion

```tsx
const accordion = (
  <Accordion>
    <AccordionPanel open title="First Panel">
      This is the content of the first Panel
    </AccordionPanel>
    <AccordionPanel title="Second Panel">
      This is the content of the second Panel
    </AccordionPanel>
  <Accordion>
)
```

Expected DOM output

```html
<div>
  <h3>
    <div role="button" aria-expanded="true" aria-controls="sect1" id="accordion1">
      First Panel
      <svg>Arrow Icon</svg>
    </div>
  </h3>
  <div id="sect1" role="region" aria-labelledby="accordion1">
    This is the content of the first Panel
  </div>
  <h3>
    <div role="button" aria-expanded="false" aria-controls="sect2" id="accordion2">
      Second Panel
      <svg>Arrow Icon</svg>
    </div>
  </h3>
  <div id="sect2" role="region" aria-labelledby="accordion2">
    This is the content of the second Panel
  </div>
</div>
```

### Opened Accordion

To have multiple panels opened at the same time an Accordion must use the `expand` property.

```tsx
const accordion = (
  <Accordion expand>
    <AccordionPanel open title="First Panel">
      This is the content of the first Panel
    </AccordionPanel>
    <AccordionPanel open title="Second Panel">
      This is the content of the second Panel
    </AccordionPanel>
  <Accordion>
)
```

Expected DOM output

```html
<div>
  <h3>
    <div role="button" aria-expanded="true" aria-controls="sect1" id="accordion1">
      First Panel
      <svg>Arrow Icon</svg>
    </div>
  </h3>
  <div id="sect1" role="region" aria-labelledby="accordion1">
    This is the content of the first Panel
  </div>
  <h3>
    <div role="button" aria-expanded="true" aria-controls="sect2" id="accordion2">
      Second Panel
      <svg>Arrow Icon</svg>
    </div>
  </h3>
  <div id="sect2" role="region" aria-labelledby="accordion2">
    This is the content of the second Panel
  </div>
</div>
```

### Custom icon Accordion panel

```tsx
const accordion = (
  <Accordion expandIconPositon="start">
    <AccordionPanel expandIcon={<CustomIcon/>} title="First Panel">
      This is the content of the first Panel
    </AccordionPanel>
    <AccordionPanel expandIcon={<AnotherCustomIcon/>} title="Second Panel">
      This is the content of the second Panel
    </AccordionPanel>
  <Accordion>
)
```

Expected DOM output

```html
<div>
  <h3>
    <div role="button" aria-expanded="false" aria-controls="sect1" id="accordion1">
      <svg>CustomIcon</svg>
      First Panel
    </div>
  </h3>
  <div id="sect1" role="region" aria-labelledby="accordion1">
    This is the content of the first Panel
  </div>
  <h3>
    <div role="button" aria-expanded="false" aria-controls="sect2" id="accordion2">
      <svg>AnotherCustomIcon</svg>
      Second Panel
    </div>
  </h3>
  <div id="sect2" role="region" aria-labelledby="accordion2">
    This is the content of the second Panel
  </div>
</div>
```

### Custom heading Accordion panel

```tsx
const accordion = (
  <Accordion heading="h1">
    <AccordionPanel title="First Panel">
      This is the content of the first Panel
    </AccordionPanel>
    <AccordionPanel title="Second Panel">
      This is the content of the second Panel
    </AccordionPanel>
  <Accordion>
)
```

Expected DOM output

```html
<div>
  <h1>
    <div role="button" aria-expanded="false" aria-controls="sect1" id="accordion1">
      <svg>CustomIcon</svg>
      First Panel
    </div>
  </h1>
  <div id="sect1" role="region" aria-labelledby="accordion1">
    This is the content of the first Panel
  </div>
  <h1>
    <div role="button" aria-expanded="false" aria-controls="sect2" id="accordion2">
      <svg>AnotherCustomIcon</svg>
      Second Panel
    </div>
  </h1>
  <div id="sect2" role="region" aria-labelledby="accordion2">
    This is the content of the second Panel
  </div>
</div>
```

## Behaviors

### Useful references

The below references were used to decide an appropriate keyboard interactions from an a11y perspective.

- https://www.w3.org/TR/wai-aria-practices/#accordion
- https://www.w3.org/TR/wai-aria-practices/#example
- https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction

### Accordion panel open/close

An accordion panel can be open/close by the following user interactions on the heading. Not all interactions should be supported at the same time, but the component must be able to support combinations of the below interactions.

As a general rule, once the accordion is closed the focus should return to the heading element once the accordion is closed unless the interaction would involve another focusable element.

| Type     | Action     | Result      | Details                                                     |
| -------- | ---------- | ----------- | ----------------------------------------------------------- |
| Mouse    | Click      | Open        | Click on a closed heading                                   |
| Mouse    | Click      | Close       | Click on an opened heading                                  |
| Keyboard | Enter      | Open        | Pressed with focus on a closed heading                      |
| Keyboard | Enter      | Close       | Pressed with focus on an opened heading                     |
| Keyboard | Space      | Open        | Pressed with focus on a closed heading                      |
| Keyboard | Space      | Close       | Pressed with focus on an opened heading                     |
| Type     | Action     | Result      | Details                                                     |
| Keyboard | Down Arrow | Moves Focus | Moves focus to the next panel heading (may be circular)     |
| Keyboard | Up Arrow   | Moves Focus | Moves focus to the previous panel heading (may be circular) |
| Keyboard | Home       | Moves Focus | Moves focus to the first panel heading                      |
| Keyboard | End        | Moves Focus | Moves focus to the last panel heading                       |

## Accessibiltiy

Accessibility behaviour is built into the spec as much as possible. This section addresses specific issues that don't fit well with the standard definition of the component.
