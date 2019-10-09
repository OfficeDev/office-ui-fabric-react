import * as React from 'react';
import { DocumentCardBasicExample } from './examples/DocumentCard.Basic.Example';

import { IDocPageProps } from '../../common/DocPage.types';
import { DocumentCardCompactExample } from './examples/DocumentCard.Compact.Example';
import { DocumentCardCompleteExample } from './examples/DocumentCard.Complete.Example';
import { DocumentCardImageExample } from './examples/DocumentCard.Image.Example';
import { DocumentCardConversationExample } from './examples/DocumentCard.Conversation.Example';

const DocumentCardBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/examples/DocumentCard.Basic.Example.tsx') as string;
const DocumentCardCompactExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/examples/DocumentCard.Compact.Example.tsx') as string;
const DocumentCardCompleteExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/examples/DocumentCard.Complete.Example.tsx') as string;
const DocumentCardImageExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/examples/DocumentCard.Image.Example.tsx') as string;
const DocumentCardConversationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/examples/DocumentCard.Conversation.Example.tsx') as string;

export const DocumentCardPageProps: IDocPageProps = {
  title: 'DocumentCard',
  componentName: 'DocumentCard',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/DocumentCard',
  examples: [
    {
      title: 'Default DocumentCard',
      code: DocumentCardBasicExampleCode,
      view: (
        <>
          <p>
            The default configuration for a card represents a single file, with space to denote the last significant event and the person
            involved.
          </p>
          <DocumentCardBasicExample />
        </>
      )
    },
    {
      title: 'DocumentCard with compact layout ',
      code: DocumentCardCompactExampleCode,
      view: (
        <>
          <p>
            When showing a card on a mobile device or in a narrow layout, you may choose this compact card, which helps the filename remain
            scannable while giving space for a preview thumbnail.
          </p>
          <p>
            This example also shows some features which are usable with either compact or regular cards, such as showing an icon instead of
            a document preview image.
          </p>
          <DocumentCardCompactExample />
        </>
      )
    },
    {
      title: 'DocumentCard with multiple items, commands, and views',
      code: DocumentCardCompleteExampleCode,
      view: (
        <>
          <p>
            This example shows a couple of optional capabilities, including having a card represent multiple items, exposing up to three
            relevant commands, and showing the number of views in the bottom right corner.
          </p>
          <DocumentCardCompleteExample />
        </>
      )
    },
    {
      title: 'DocumentCard with image or icon',
      code: DocumentCardImageExampleCode,
      view: (
        <>
          <p>This example shows a simplified method of displaying an image or icon on the DocumentCard.</p>
          <DocumentCardImageExample />
        </>
      )
    },
    {
      title: 'Conversation cards with logo, text preview, and status',
      code: DocumentCardConversationExampleCode,
      view: (
        <>
          <p>This example shows the logo, text preview, and status used for conversation cards.</p>
          <DocumentCardConversationExample />
        </>
      )
    }
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/docs/DocumentCardOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/docs/DocumentCardDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/DocumentCard/docs/DocumentCardDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true
};
