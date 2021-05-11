export interface VirtualElement extends HTMLElement {
  _virtual: {
    parent?: VirtualElement;
    children: VirtualElement[];
  };
}
