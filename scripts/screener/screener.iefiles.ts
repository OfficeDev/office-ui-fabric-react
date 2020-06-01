// const defaultExamples = [
//   'Alert',
//   'Accordion',
//   'Animation',
//   'Attachment',
//   'Avatar',
//   'Box',
//   'Button',
//   'Card',
//   'Carousel',
//   'Checkbox',
//   'Dialog',
//   'Divider',
//   'Embed',
//   'Form',
//   'Header',
//   'HierarchicalTree',
//   'Image',
//   'Input',
//   'ItemLayout',
//   'Label',
//   'List',
//   'Loader',
//   'Menu',
//   'MenuButton',
//   'Popup',
//   'Portal',
//   'Provider',
//   'RadioGroup',
//   'Reaction',
//   'Ref',
//   'Segment',
//   'Slider',
//   'SplitButton',
//   'Status',
//   'SvgIcon',
//   'Table',
//   'Text',
//   'TextArea',
//   'Toolbar',
//   'Tooltip',
//   'Tree',
//   'Video',
// ].map(example => new RegExp(`^${example}Example(.shorthand)?.tsx$`));

// const specificExamples = [
//   'AttachmentActionableExample',
//   'AvatarExampleSize',
//   'ButtonExampleContentAndIcon',
//   'CardExampleSize',
//   'CardExampleCentered',
//   'CardExampleHorizontal',
//   'CardExampleFocusableChildrenGrid',
//   'CardExampleFocusableChildrenGrid',
//   'CarouselThumbnailsExample',
//   'CarouselPaginationExample',
//   'Chat',
//   'CheckboxExampleChecked',
//   'DialogExampleBackdrop',
//   'DividerExampleContent',
//   'DividerExampleVertical',
//   'Dropdown',
//   'Flex',
//   'Grid',
//   'InputExampleIcon',
//   'ItemLayoutExampleMedia',
//   'LabelExampleContentCustomization',
//   'Layout',
//   'ListExampleMedia',
//   'ListExampleHorizontal',
//   'MenuExampleVertical',
//   'MenuButtonExampleContextMenu',
//   'PopupCustomTargetExample',
//   'SplitButtonPositioningExampleShorthand',
//   'TableExampleNavigable',
//   'ToolbarExampleMenuWithSubmenu',
//   'TooltipExamplePointing',
//   'TreeInitiallyOpenExample',
//   'TreeMultiselectExample',
// ].map(example => new RegExp(`${example}`));

const glob = require('glob');
const files = glob('**/*.steps.ts');
const ieSteps = files.filter(file => require(file).steps.browsers?.includes('ie11'));
const ieRegexes = ieSteps.map(file => new RegExp(file.replace(/.steps.ts$/, '.tsx')));

export default ieRegexes;
