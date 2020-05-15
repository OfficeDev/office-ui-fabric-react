import { TextAreaStylesProps } from './../../components/TextArea/TextArea';
import {
  ColorScheme,
  ColorSchemeMapping,
  ColorVariants,
  StrictColorScheme,
  StrictColorSchemeMapping,
  PrimitiveColors,
} from '../types';
import { AccordionContentStylesProps } from '../../components/Accordion/AccordionContent';
import { AccordionStylesProps } from '../../components/Accordion/Accordion';
import { AccordionTitleStylesProps } from '../../components/Accordion/AccordionTitle';
import { CarouselNavigationItemStylesProps } from '../../components/Carousel/CarouselNavigationItem';
import { AlertStylesProps } from '../../components/Alert/Alert';
import { AnimationProps } from '../../components/Animation/Animation';
import { AttachmentProps } from '../../components/Attachment/Attachment';
import { AttachmentActionStylesProps } from '../../components/Attachment/AttachmentAction';
import { AttachmentDescriptionStylesProps } from '../../components/Attachment/AttachmentDescription';
import { AttachmentHeaderStylesProps } from '../../components/Attachment/AttachmentHeader';
import { AttachmentIconStylesProps } from '../../components/Attachment/AttachmentIcon';
import { AvatarStylesProps } from '../../components/Avatar/Avatar';
import { BoxStylesProps } from '../../components/Box/Box';
import { ButtonGroupProps } from '../../components/Button/ButtonGroup';
import { ButtonStylesProps } from '../../components/Button/Button';
import { ButtonContentStylesProps } from '../../components/Button/ButtonContent';
import { ChatItemStylesProps } from '../../components/Chat/ChatItem';
import { ChatMessageStylesProps } from '../../components/Chat/ChatMessage';
import { ChatStylesProps } from '../../components/Chat/Chat';
import { CheckboxStylesProps } from '../../components/Checkbox/Checkbox';
import { DividerStylesProps } from '../../components/Divider/Divider';
import { DialogProps } from '../../components/Dialog/Dialog';
import { DropdownProps } from '../../components/Dropdown/Dropdown';
import { DropdownSearchInputStylesProps } from '../../components/Dropdown/DropdownSearchInput';
import { EmbedStylesProps } from '../../components/Embed/Embed';
import { FlexItemStylesProps } from '../../components/Flex/FlexItem';
import { FlexStylesProps } from '../../components/Flex/Flex';
import { FormFieldStylesProps } from '../../components/Form/FormField';
import { FormProps } from '../../components/Form/Form';
import { GridProps } from '../../components/Grid/Grid';
import { HeaderDescriptionProps } from '../../components/Header/HeaderDescription';
import { HeaderProps } from '../../components/Header/Header';
import { ImageStylesProps } from '../../components/Image/Image';
import { InputProps } from '../../components/Input/Input';
import { ItemLayoutProps } from '../../components/ItemLayout/ItemLayout';
import { LabelStylesProps } from '../../components/Label/Label';
import { LayoutProps } from '../../components/Layout/Layout';
import { ListStylesProps } from '../../components/List/List';
import { ListItemStylesProps } from '../../components/List/ListItem';
import { LoaderProps } from '../../components/Loader/Loader';
import { MenuItemStylesProps } from '../../components/Menu/MenuItem';
import { MenuStylesProps } from '../../components/Menu/Menu';
import { MenuDividerStylesProps } from '../../components/Menu/MenuDivider';
import { PopupContentStylesProps } from '../../components/Popup/PopupContent';
import { PortalProps } from '../../components/Portal/Portal';
import { RadioGroupItemProps } from '../../components/RadioGroup/RadioGroupItem';
import { RadioGroupProps } from '../../components/RadioGroup/RadioGroup';
import { ReactionStylesProps } from '../../components/Reaction/Reaction';
import { ReactionGroupStylesProps } from '../../components/Reaction/ReactionGroup';
import { SegmentStylesProps } from '../../components/Segment/Segment';
import { SliderStylesProps } from '../../components/Slider/Slider';
import { StatusStylesProps } from '../../components/Status/Status';
import { TextStylesProps } from '../../components/Text/Text';
import { ToolbarDividerStylesProps } from '../../components/Toolbar/ToolbarDivider';
import { ToolbarItemStylesProps } from '../../components/Toolbar/ToolbarItem';
import { ToolbarCustomItemStylesProps } from '../../components/Toolbar/ToolbarCustomItem';
import { ToolbarMenuItemStylesProps } from '../../components/Toolbar/ToolbarMenuItem';
import { ToolbarMenuDividerStylesProps } from '../../components/Toolbar/ToolbarMenuDivider';
import { ToolbarMenuRadioGroupStylesProps } from '../../components/Toolbar/ToolbarMenuRadioGroup';
import { ToolbarMenuStylesProps } from '../../components/Toolbar/ToolbarMenu';
import { ToolbarStylesProps } from '../../components/Toolbar/Toolbar';
import { ToolbarRadioGroupStylesProps } from '../../components/Toolbar/ToolbarRadioGroup';
import { TooltipContentStylesProps } from '../../components/Tooltip/TooltipContent';
import { HierarchicalTreeItemProps } from '../../components/HierarchicalTree/HierarchicalTreeItem';
import { HierarchicalTreeProps } from '../../components/HierarchicalTree/HierarchicalTree';
import { HierarchicalTreeTitleProps } from '../../components/HierarchicalTree/HierarchicalTreeTitle';
import { VideoStylesProps } from '../../components/Video/Video';
import { TreeItemStylesProps } from '../../components/Tree/TreeItem';
import { TreeTitleStylesProps } from '../../components/Tree/TreeTitle';
import { TableStylesProps } from '../../components/Table/Table';
import { TableRowStylesProps } from '../../components/Table/TableRow';
import { TableCellStylesProps } from '../../components/Table/TableCell';
import { CardStylesProps } from '../../components/Card/Card';
import { CardPreviewStylesProps } from '../../components/Card/CardPreview';
import { CardTopControlsStylesProps } from '../../components/Card/CardTopControls';
import { CardHeaderStylesProps } from '../../components/Card/CardHeader';
import { CardBodyStylesProps } from '../../components/Card/CardBody';
import { CardFooterStylesProps } from '../../components/Card/CardFooter';
import { SvgIconStylesProps } from '../../components/SvgIcon/SvgIcon';
import { SplitButtonStylesProps } from '../../components/SplitButton/SplitButton';
import { CarouselNavigationStylesProps } from '../../components/Carousel/CarouselNavigation';
import { CarouselItemStylesProps } from '../../components/Carousel/CarouselItem';
import { CarouselStylesProps } from '../../components/Carousel/Carousel';

export type TeamsThemeStylesProps = {
  Accordion: AccordionStylesProps;
  AccordionContent: AccordionContentStylesProps;
  AccordionTitle: AccordionTitleStylesProps;
  Alert: AlertStylesProps;
  Animation: AnimationProps;
  Attachment: AttachmentProps;
  AttachmentAction: AttachmentActionStylesProps;
  AttachmentDescription: AttachmentDescriptionStylesProps;
  AttachmentHeader: AttachmentHeaderStylesProps;
  AttachmentIcon: AttachmentIconStylesProps;
  Avatar: AvatarStylesProps;
  Button: ButtonStylesProps;
  Box: BoxStylesProps;
  ButtonContent: ButtonContentStylesProps;
  ButtonGroup: ButtonGroupProps;
  Carousel: CarouselStylesProps;
  CarouselItem: CarouselItemStylesProps;
  Chat: ChatStylesProps;
  ChatItem: ChatItemStylesProps;
  ChatMessage: ChatMessageStylesProps;
  CarouselNavigation: CarouselNavigationStylesProps;
  Checkbox: CheckboxStylesProps;
  Divider: DividerStylesProps;
  Dialog: DialogProps;
  Dropdown: DropdownProps;
  DropdownSearchInput: DropdownSearchInputStylesProps;
  Embed: EmbedStylesProps;
  Flex: FlexStylesProps;
  FlexItem: FlexItemStylesProps;
  Form: FormProps;
  FormField: FormFieldStylesProps;
  Grid: GridProps;
  Header: HeaderProps;
  HeaderDescription: HeaderDescriptionProps;
  SvgIcon: SvgIconStylesProps;
  Image: ImageStylesProps;
  Input: InputProps;
  ItemLayout: ItemLayoutProps;
  Label: LabelStylesProps;
  Layout: LayoutProps;
  List: ListStylesProps;
  ListItem: ListItemStylesProps;
  Loader: LoaderProps;
  Menu: MenuStylesProps;
  MenuItem: MenuItemStylesProps;
  MenuDivider: MenuDividerStylesProps;
  Portal: PortalProps;
  PopupContent: PopupContentStylesProps;
  RadioGroup: RadioGroupProps;
  RadioGroupItem: RadioGroupItemProps;
  Reaction: ReactionStylesProps;
  ReactionGroup: ReactionGroupStylesProps;
  Segment: SegmentStylesProps;
  Slider: SliderStylesProps;
  SplitButton: SplitButtonStylesProps;
  Status: StatusStylesProps;
  Toolbar: ToolbarStylesProps;
  ToolbarCustomItem: ToolbarCustomItemStylesProps;
  ToolbarItem: ToolbarItemStylesProps;
  ToolbarDivider: ToolbarDividerStylesProps;
  ToolbarRadioGroup: ToolbarRadioGroupStylesProps;
  ToolbarMenu: ToolbarMenuStylesProps;
  ToolbarMenuItem: ToolbarMenuItemStylesProps;
  ToolbarMenuDivider: ToolbarMenuDividerStylesProps;
  ToolbarMenuRadioGroup: ToolbarMenuRadioGroupStylesProps;
  TooltipContent: TooltipContentStylesProps;
  Text: TextStylesProps;
  TextArea: TextAreaStylesProps;
  TreeItem: TreeItemStylesProps;
  TreeTitle: TreeTitleStylesProps;
  HierarchicalTree: HierarchicalTreeProps;
  HierarchicalTreeItem: HierarchicalTreeItemProps;
  HierarchicalTreeTitle: HierarchicalTreeTitleProps;
  Video: VideoStylesProps;
  Table: TableStylesProps;
  TableRow: TableRowStylesProps;
  TableCell: TableCellStylesProps;
  Card: CardStylesProps;
  CardPreview: CardPreviewStylesProps;
  CardTopControls: CardTopControlsStylesProps;
  CardHeader: CardHeaderStylesProps;
  CardBody: CardBodyStylesProps;
  CardFooter: CardFooterStylesProps;
  CarouselNavigationItem: CarouselNavigationItemStylesProps;
};

export type TeamsContextualColors = {
  brand: ColorVariants;
};

export type TeamsNaturalColors = {
  grey: ColorVariants;
  green: ColorVariants;
  orange: ColorVariants;
  red: ColorVariants;
  yellow: ColorVariants;
  pink: ColorVariants;
};

export type TeamsTransparentColors = {
  silver: ColorVariants;
  ruby: ColorVariants;
  onyx: ColorVariants;
  amethyst: ColorVariants;
};

export type TeamsCategoryColors = {
  redDark: ColorVariants;
  red: ColorVariants;
  orangeDark: ColorVariants;
  orange: ColorVariants;
  orangeLight: ColorVariants;
  yellowDark: ColorVariants;
  yellow: ColorVariants;
  brown: ColorVariants;
  oliveDark: ColorVariants;
  olive: ColorVariants;
  greenDark: ColorVariants;
  green: ColorVariants;
  tealDark: ColorVariants;
  teal: ColorVariants;
  tealLight: ColorVariants;
  blueDark: ColorVariants;
  blue: ColorVariants;
  purpleDark: ColorVariants;
  purple: ColorVariants;
  maroon: ColorVariants;
  pink: ColorVariants;
  smokeDark: ColorVariants;
  smokeLight: ColorVariants;
  steelDark: ColorVariants;
  steelLight: ColorVariants;
  neon: ColorVariants;
};

export type TeamsCategoryColorNames = keyof TeamsCategoryColors;

export type TeamsCategoryColorSchemeMapping = ColorSchemeMapping<Partial<ColorScheme>, TeamsCategoryColorNames>;

export type TeamsColorNames = keyof (TeamsContextualColors &
  TeamsNaturalColors &
  PrimitiveColors &
  TeamsTransparentColors);

export type TeamsSchemeMappingWithAreas<TAreas extends string> = StrictColorSchemeMapping<
  StrictColorScheme<TAreas>,
  TeamsColorNames
>;
