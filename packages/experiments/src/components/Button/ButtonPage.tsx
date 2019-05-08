import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PageMarkdown, PropertiesTableSet } from '@uifabric/example-app-base';

import { ButtonExample } from './examples/Button.Example';
import { MenuButtonExample } from './MenuButton/examples/MenuButton.Example';
import { SplitButtonExample } from './SplitButton/examples/SplitButton.Example';
import { ButtonSlotsExample } from './examples/Button.Slots.Example';
import { ButtonStylesExample } from './examples/Button.Styles.Example';
import { ButtonToggleExample } from './examples/Button.Toggle.Example';
import { ButtonTokensExample } from './examples/Button.Tokens.Example';
import { ButtonVariantsExample } from './examples/Button.Variants.Example';

const ButtonExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Button/examples/Button.Example.tsx') as string;
const MenuButtonExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Button/MenuButton/examples/MenuButton.Example.tsx') as string;
const SplitButtonExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Button/SplitButton/examples/SplitButton.Example.tsx') as string;
const ButtonSlotsExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Button/examples/Button.Slots.Example.tsx') as string;
const ButtonStylesExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Button/examples/Button.Styles.Example.tsx') as string;
const ButtonToggleExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Button/examples/Button.Toggle.Example.tsx') as string;
const ButtonTokensExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Button/examples/Button.Tokens.Example.tsx') as string;
const ButtonVariantsExampleCode = require('!raw-loader!@uifabric/experiments/src/components/Button/examples/Button.Tokens.Example.tsx') as string;

export class ButtonPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title=" Button"
        componentName=" Button"
        exampleCards={
          <div>
            <ExampleCard title="Button Ramps" code={ButtonExampleCode}>
              <ButtonExample />
            </ExampleCard>
            <ExampleCard title="Menu Button Examples" code={MenuButtonExampleCode}>
              <MenuButtonExample />
            </ExampleCard>
            <ExampleCard title="Split Button with two focus stops" code={SplitButtonExampleCode}>
              <SplitButtonExample />
            </ExampleCard>
            <ExampleCard title="Button Variants Examples" code={ButtonVariantsExampleCode}>
              <ButtonVariantsExample />
            </ExampleCard>
            <ExampleCard title="Toggle Buttons" code={ButtonToggleExampleCode}>
              <ButtonToggleExample />
            </ExampleCard>
            <ExampleCard title="Button Slots Customization" code={ButtonSlotsExampleCode}>
              <ButtonSlotsExample />
            </ExampleCard>
            <ExampleCard title="Button Styles" code={ButtonStylesExampleCode}>
              <ButtonStylesExample />
            </ExampleCard>
            <ExampleCard title="Button Tokens" code={ButtonTokensExampleCode}>
              <ButtonTokensExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[
              require<string>('!raw-loader!@uifabric/experiments/src/components/Button/Button.types.tsx'),
              require<string>('!raw-loader!@uifabric/experiments/src/components/Button/ButtonVariants.types.ts'),
              require<string>('!raw-loader!@uifabric/experiments/src/components/Button/MenuButton/MenuButton.types.tsx'),
              require<string>('!raw-loader!@uifabric/experiments/src/components/Button/SplitButton/SplitButton.types.tsx')
            ]}
          />
        }
        overview={
          <PageMarkdown>{require<string>('!raw-loader!@uifabric/experiments/src/components/Button/docs/ButtonOverview.md')}</PageMarkdown>
        }
        bestPractices={<div />}
        dos={<PageMarkdown>{require<string>('!raw-loader!@uifabric/experiments/src/components/Button/docs/ButtonDos.md')}</PageMarkdown>}
        donts={
          <PageMarkdown>{require<string>('!raw-loader!@uifabric/experiments/src/components/Button/docs/ButtonDonts.md')}</PageMarkdown>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
