import {
  IKeySequence,
  keySequencesAreEqual,
  keySequenceStartsWith,
  convertSequencesToKeytipID
} from '../../utilities/keysequence';
import { IKeytipProps } from 'src/Keytip';

export interface IKeytipTreeNode {
  /**
   * ID of the <Keytip> DOM element. Needed to locate the correct keytip in the KeytipLayer's 'keytip' state array
   */
  id: string;

  /**
   * KeySequence that invokes this KeytipTreeNode's onExecute function
   */
  keytipSequence: IKeySequence;

  /**
   * Control's execute function for when keytip is invoked, passed from the component to the Manager in the IKeytipProps
   */
  onExecute?: () => void;

  /**
   * Function to execute when we return to this keytip
   */
  onReturn?: () => void;

  /**
   * List of keytips that should become visible when this keytip is pressed, can be empty
   */
  children: string[];

  /**
   * Parent keytip ID
   */
  parent: string;

  /**
   * Whether or not this node has children nodes or not. Should be used for menus/overflow components, that have
   * their children registered after the initial rendering of the DOM.
   */
  hasChildrenNodes?: boolean;

  /**
   * T/F if this keytip's component is currently disabled
   */
  disabled?: boolean;

  /**
   * Link to another keytip node if this is a persisted keytip
   */
  keytipLink?: IKeytipTreeNode;
}

export interface IKeytipTreeNodeMap {
  [nodeId: string]: IKeytipTreeNode;
}

export class KeytipTree {
  public currentKeytip?: IKeytipTreeNode;
  public currentSequence: IKeySequence;
  public root: IKeytipTreeNode;
  public nodeMap: IKeytipTreeNodeMap = {};

  /**
   * KeytipTree constructor
   * @param enableSequences - KeySequences that will start keytip mode, passed down through the KeytipLayer
   */
  constructor(rootId: string) {

    // Root has no keytipSequences, we instead check _enableSequences to handle multiple entry points
    this.root = {
      id: rootId,
      children: [],
      parent: '',
      keytipSequence: { keys: [] },
      hasChildrenNodes: true
    };
    this.currentSequence = { keys: [] };
    this.nodeMap[this.root.id] = this.root;
  }

  // check if it has an overflow set
  // get overflowset node
  // add node to overflowset node
  // node

  /**
   * Add a keytip node to this KeytipTree
   * @param fullSequence - Full key sequence for the keytip to add
   * @param onExecute - Callback function to trigger when this keytip is activated
   */
  public addNode(keytipProps: IKeytipProps): void {
    let fullSequence = [...keytipProps.keySequences];
    let nodeID = convertSequencesToKeytipID(fullSequence);
    // This keytip's sequence is the last one defined
    let keytipSequence = fullSequence.pop();
    // Parent ID is the root if there aren't any more sequences
    let parentID = fullSequence.length === 0 ? this.root.id : convertSequencesToKeytipID(fullSequence);

    let overflowNode = undefined;
    if (keytipProps.overflowSetSequence && keytipSequence) {
      let overflowParentNode = this._getOverflowNode(keytipProps.overflowSetSequence, parentID, fullSequence);
      let overflowNodeID = convertSequencesToKeytipID([...fullSequence, keytipProps.overflowSetSequence, keytipSequence]);
      overflowNode = this.nodeMap[overflowNodeID];

      if (overflowNode) {
        overflowNode.keytipSequence = keytipSequence;
        overflowNode.onExecute = keytipProps.onExecute;
        overflowNode.hasChildrenNodes = keytipProps.hasChildrenNodes;
        overflowNode.parent = overflowParentNode.id;
      } else {
        overflowNode = this._createNode(overflowNodeID, keytipSequence, overflowParentNode.id, [], keytipProps.hasChildrenNodes);
        this.nodeMap[overflowNodeID] = overflowNode;
      }
      overflowParentNode.children.push(overflowNodeID);
    }

    // See if node already exists
    let node = this.nodeMap[nodeID];
    if (node) {
      // If node exists, it was added when one of its children was added or is now being updated
      // Update values
      node.keytipSequence = keytipSequence!;
      node.onExecute = keytipProps.onExecute;
      node.onReturn = keytipProps.onReturn;
      node.hasChildrenNodes = keytipProps.hasChildrenNodes;
      node.keytipLink = overflowNode;
      node.parent = parentID;
      node.disabled = keytipProps.disabled;
    } else {
      // If node doesn't exist, add node
      node = this._createNode(nodeID, keytipSequence!, parentID, [], keytipProps.hasChildrenNodes,
        keytipProps.onExecute, keytipProps.onReturn, keytipProps.disabled);
      node.keytipLink = overflowNode;
      this.nodeMap[nodeID] = node;
    }

    // Get parent node given it's id.
    let parent = this._getParentNode(parentID);

    // Add node to parent's children
    if (parent.children.indexOf(nodeID) === -1) {
      parent.children.push(nodeID);
    }
  }

  /**
   * Removes a node from the KeytipTree
   * Will also remove all of the node's children from the Tree
   * @param sequence - full IKeySequence of the node to remove
   */
  public removeNode(sequence: IKeySequence[]): void {
    let fullSequence = [...sequence];
    let nodeID = convertSequencesToKeytipID(fullSequence);
    // Take off the last sequence to calculate the parent ID
    fullSequence.pop();
    // Parent ID is the root if there aren't any more sequences
    let parentID = fullSequence.length === 0 ? this.root.id : convertSequencesToKeytipID(fullSequence);

    let parent = this.nodeMap[parentID];
    if (parent) {
      // Remove node from its parent's children
      parent.children.splice(parent.children.indexOf(nodeID), 1);
    }

    let node = this.nodeMap[nodeID];
    if (node) {
      // Remove all the node's children from the nodeMap
      let children = node.children;
      for (let child of children) {
        delete this.nodeMap[child];
      }

      // If node has an overflowLink, delete that node too.
      let overflowLink = node.keytipLink;
      if (overflowLink) {
        let parentOverflow = this.nodeMap[overflowLink.parent];
        parentOverflow.children.splice(parentOverflow.children.indexOf(overflowLink.id, 1));
        delete this.nodeMap[overflowLink.id];
      }

      // Remove the node from the nodeMap
      delete this.nodeMap[nodeID];
    }
  }

  public getExactMatchedNode(keySequence: IKeySequence, currentKeytip: IKeytipTreeNode): IKeytipTreeNode | undefined {
    let possibleNodes = this._getChildrenNodes(currentKeytip.children);
    for (let node of possibleNodes) {
      if (keySequencesAreEqual(node.keytipSequence, keySequence)) {
        return node;
      }
    }
    return undefined;
  }

  public getPartiallyMatchedNodes(keySequence: IKeySequence, currentKeytip: IKeytipTreeNode): IKeytipTreeNode[] {
    let nodes: IKeytipTreeNode[] = [];
    let possibleNodes = this._getChildrenNodes(currentKeytip.children);
    for (let node of possibleNodes) {
      if (keySequenceStartsWith(node.keytipSequence, keySequence)) {
        nodes.push(node);
      }
    }
    return nodes;
  }

  private _getParentNode(parentId: string): IKeytipTreeNode {
    let parent = this.nodeMap[parentId];
    if (!parent) {
      // If parent doesn't exist, create parent with ID and children only
      parent = this._createNode(parentId, { keys: [] }, '' /* parentId */, [] /* childrenIds */, true /*hasChildren */);
      this.nodeMap[parentId] = parent;
    }
    return parent;
  }

  private _createNode(id: string, sequence: IKeySequence, parentId: string, children: string[],
    hasChildrenNodes?: boolean, onExecute?: () => void, onReturn?: () => void, disabled?: boolean): IKeytipTreeNode {
    return {
      id,
      keytipSequence: sequence,
      parent: parentId,
      children,
      onExecute,
      onReturn,
      hasChildrenNodes,
      disabled
    };
  }

  private _getChildrenNodes(ids: string[]): IKeytipTreeNode[] {
    let nodes: IKeytipTreeNode[] = [];
    for (let id of ids) {
      nodes.push(this.nodeMap[id]);
    }
    return nodes;
  }

  private _getOverflowNode(overflowSequence: IKeySequence, parentId: string, parentSequence: IKeySequence[]): IKeytipTreeNode {
    let fullOverflowSequence = [...parentSequence, ...[overflowSequence]];
    let overflowNodeId = convertSequencesToKeytipID(fullOverflowSequence);

    let node = this.nodeMap[overflowNodeId];

    // if overflow node has not been added, we create it
    if (!node) {
      node = this._createNode(overflowNodeId, overflowSequence, parentId, [], true);
      this.nodeMap[overflowNodeId] = node;
      let parent = this._getParentNode(parentId);
      parent.children.push(overflowNodeId);
    }

    return node;
  }
}