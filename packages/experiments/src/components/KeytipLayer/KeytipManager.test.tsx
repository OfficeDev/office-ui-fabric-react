import * as React from 'react';

import * as ReactTestUtils from 'react-dom/test-utils';

import { KeytipManager } from './KeytipManager';
import { KeyCodes } from '../../Utilities';
import { IKeySequence, convertSequencesToKeytipID } from '../../utilities/keysequence';
import { KeytipTree, IKeytipTreeNode } from './KeytipTree';
import { KeytipLayer } from './KeytipLayer';
import { ktpSeparator, ktpFullPrefix } from '../../utilities/keytip/KeytipUtils';

const keytipStartSequences: IKeySequence[] = [{ keyCodes: [KeyCodes.alt, KeyCodes.leftWindow] }];
const keytipExitSequences: IKeySequence[] = [{ keyCodes: [KeyCodes.alt, KeyCodes.leftWindow] }];
const keytipGoBackSequences: IKeySequence[] = [{ keyCodes: [KeyCodes.escape] }];
const layerID = 'my-layer-id';
const keytipIdC = ktpFullPrefix + KeyCodes.c;
const keytipIdE2 = ktpFullPrefix + KeyCodes.e + ktpSeparator + KeyCodes.two;

describe('KeytipManager', () => {

  describe('getAriaDescribedBy', () => {
    const keytipManager = KeytipManager.getInstance();

    beforeEach(() => {
      // Create layer
      ReactTestUtils.renderIntoDocument<KeytipLayer>(
        <KeytipLayer
          id={ layerID }
          keytipStartSequences={ keytipStartSequences }
          keytipGoBackSequences={ keytipGoBackSequences }
          keytipExitSequences={ keytipExitSequences }
        />
      );
    });

    it('returns just the layer ID when an empty sequence is passed in', () => {
      let keySequence: IKeySequence[] = [];
      let ariaDescribedBy = keytipManager.getAriaDescribedBy(keySequence);
      expect(ariaDescribedBy).toEqual(layerID);
    });

    it('for one singular key sequence', () => {
      let keySequence: IKeySequence[] = [{ keyCodes: [KeyCodes.b] }];
      let ariaDescribedBy = keytipManager.getAriaDescribedBy(keySequence);
      expect(ariaDescribedBy).toEqual(layerID + ' ' + convertSequencesToKeytipID(keySequence));
    });

    it('for one complex key sequence', () => {
      let keySequence: IKeySequence[] = [{ keyCodes: [KeyCodes.b, KeyCodes.c] }];
      let ariaDescribedBy = keytipManager.getAriaDescribedBy(keySequence);
      expect(ariaDescribedBy).toEqual(layerID + ' ' + convertSequencesToKeytipID(keySequence));
    });

    it('for multiple singular key sequences', () => {
      let keySequences: IKeySequence[] = [{ keyCodes: [KeyCodes.b] }, { keyCodes: [KeyCodes.c] }];
      let ariaDescribedBy = keytipManager.getAriaDescribedBy(keySequences);
      expect(ariaDescribedBy).toEqual(layerID +
        ' ' + convertSequencesToKeytipID([keySequences[0]]) +
        ' ' + convertSequencesToKeytipID(keySequences));
    });

    it('for multiple complex key sequences', () => {
      let keySequences: IKeySequence[] = [{ keyCodes: [KeyCodes.a, KeyCodes.n] }, { keyCodes: [KeyCodes.c, KeyCodes.b] }];
      let ariaDescribedBy = keytipManager.getAriaDescribedBy(keySequences);
      expect(ariaDescribedBy).toEqual(layerID +
        ' ' + convertSequencesToKeytipID([keySequences[0]]) +
        ' ' + convertSequencesToKeytipID(keySequences));
    });
  });

  describe('processInput tests', () => {
    const keytipManager = KeytipManager.getInstance();
    const onEnterKeytipMode: jest.Mock = jest.fn();
    const onExitKeytipMode: jest.Mock = jest.fn();

    beforeEach(() => {
      // Create layer
      ReactTestUtils.renderIntoDocument<KeytipLayer>(
        <KeytipLayer
          id={ layerID }
          keytipStartSequences={ keytipStartSequences }
          keytipGoBackSequences={ keytipGoBackSequences }
          keytipExitSequences={ keytipExitSequences }
          onEnterKeytipMode={ onEnterKeytipMode }
          onExitKeytipMode={ onExitKeytipMode }
        />
      );

      keytipManager.keytipTree = populateTreeMap(keytipManager.keytipTree, layerID);
    });

    // On Exit keytip mode
    it('Call on exit keytip mode when we process alt + left win ', () => {
      keytipManager.keytipTree.currentKeytip = keytipManager.keytipTree.root;
      keytipManager.processInput({ keyCodes: [KeyCodes.alt, KeyCodes.leftWindow] });
      expect(onExitKeytipMode).toBeCalled();
    });

    // On Enter keytip mode
    it('Call on enter keytip mode when we process alt + left win', () => {
      keytipManager.processInput({ keyCodes: [KeyCodes.alt, KeyCodes.leftWindow] });
      expect(onEnterKeytipMode).toBeCalled();
    });

    // GO Back Tests
    it('Should call on exit keytip mode because we are going back in the root', () => {
      keytipManager.keytipTree.currentKeytip = keytipManager.keytipTree.root;
      keytipManager.processInput({ keyCodes: [KeyCodes.escape] });
      expect(onExitKeytipMode).toBeCalled();
    });

    it('C`s goback func should be invoked and Current keytip pointer should return to equal root node', () => {
      const onGoBackC: jest.Mock = jest.fn();
      keytipManager.keytipTree.currentKeytip = { ...keytipManager.keytipTree.nodeMap[keytipIdC], onGoBack: onGoBackC };
      keytipManager.processInput({ keyCodes: [KeyCodes.escape] });
      expect(keytipManager.keytipTree.currentKeytip).toEqual(keytipManager.keytipTree.root);
      expect(onGoBackC).toBeCalled();
    });

    // Processing keys tests
    it('Processing a leaf node should execute it`s onExecute func and trigger onExitKeytipMode', () => {
      const onExecuteC: jest.Mock = jest.fn();
      keytipManager.keytipTree.nodeMap[keytipIdC] = { ...keytipManager.keytipTree.nodeMap[keytipIdC], onExecute: onExecuteC };
      keytipManager.keytipTree.currentKeytip = keytipManager.keytipTree.root;
      keytipManager.processInput({ keyCodes: [KeyCodes.c] });
      expect(onExecuteC).toBeCalled();
      expect(onExitKeytipMode).toBeCalled();
      expect(keytipManager.currentSequence.keyCodes.length).toEqual(0);
    });

    it('Processing a node with two keycodes should save sequence and wait for second keycode', () => {
      const onExecuteE2: jest.Mock = jest.fn();
      keytipManager.keytipTree.nodeMap[keytipIdE2] = { ...keytipManager.keytipTree.nodeMap[keytipIdE2], onExecute: onExecuteE2 };
      keytipManager.keytipTree.currentKeytip = keytipManager.keytipTree.root;
      keytipManager.processInput({ keyCodes: [KeyCodes.e] });
      expect(keytipManager.currentSequence.keyCodes.length).toEqual(1); // waiting for second keycode
      keytipManager.processInput({ keyCodes: [KeyCodes.two] });
      expect(onExecuteE2).toBeCalled();
      expect(keytipManager.currentSequence.keyCodes.length).toEqual(0);
      expect(onExitKeytipMode).toBeCalled();
    });
  });
});

function populateTreeMap(keytipTree: KeytipTree, rootId: string): KeytipTree {
  /**
   *   Tree should end up looking like:
   *
   *            a
   *          /   |   \
   *        c    e1   e2
   *             / \
   *            d   f
   *
   */

  // Node C
  const keytipSequenceC: IKeySequence = { keyCodes: [KeyCodes.c] };

  // Node D
  const keytipIdD = ktpFullPrefix + KeyCodes.e + ktpSeparator + KeyCodes.one + ktpSeparator + KeyCodes.d;
  const keytipSequenceD: IKeySequence = { keyCodes: [KeyCodes.d] };

  // Node F
  const keytipIdF = ktpFullPrefix + KeyCodes.e + ktpSeparator + KeyCodes.one + ktpSeparator + KeyCodes.f;
  const keytipSequenceF: IKeySequence = { keyCodes: [KeyCodes.f] };

  // Node E1
  const keytipIdE1 = ktpFullPrefix + KeyCodes.e + ktpSeparator + KeyCodes.one;
  const keytipSequenceE1: IKeySequence = { keyCodes: [KeyCodes.e, KeyCodes.one] };

  // Node E2
  const keytipSequenceE2: IKeySequence = { keyCodes: [KeyCodes.e, KeyCodes.two] };

  let nodeC = createTreeNode(keytipIdC, rootId, [], keytipSequenceC);
  let nodeE1 = createTreeNode(keytipIdE1, rootId, [keytipIdD, keytipIdF], keytipSequenceE1);
  let nodeE2 = createTreeNode(keytipIdE2, rootId, [keytipIdD, keytipIdF], keytipSequenceE2);
  let nodeD = createTreeNode(keytipIdD, keytipIdE1, [], keytipSequenceD);
  let nodeF = createTreeNode(keytipIdF, keytipIdE1, [], keytipSequenceF);
  keytipTree.nodeMap[rootId].children.push(keytipIdC, keytipIdE1, keytipIdE2);
  keytipTree.nodeMap[keytipIdC] = nodeC;
  keytipTree.nodeMap[keytipIdE1] = nodeE1;
  keytipTree.nodeMap[keytipIdE2] = nodeE2;
  keytipTree.nodeMap[keytipIdD] = nodeD;
  keytipTree.nodeMap[keytipIdF] = nodeF;
  return keytipTree;
}

function createTreeNode(id: string, parentId: string, childrenIds: string[], sequence: IKeySequence): IKeytipTreeNode {
  return {
    id,
    parent: parentId,
    children: childrenIds,
    keytipSequence: sequence
  };
}