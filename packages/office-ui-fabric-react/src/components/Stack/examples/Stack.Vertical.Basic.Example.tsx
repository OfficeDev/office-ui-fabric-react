import * as React from 'react';
import { Stack } from '../Stack';
import { mergeStyleSets, DefaultPalette } from 'office-ui-fabric-react/lib/Styling';

export class VerticalStackBasicExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const styles = mergeStyleSets({
      root: {
        background: DefaultPalette.themeTertiary
      },

      item: {
        color: DefaultPalette.white,
        background: DefaultPalette.themePrimary,
        padding: 5
      }
    });

    const tokens = {
      fiveGapStack: {
        childrenGap: 5
      },
      tenGapStack: {
        childrenGap: 10
      },
      tenPaddingStack: {
        padding: 10
      }
    };

    return (
      <Stack tokens={tokens.fiveGapStack}>
        <span>Default vertical stack</span>
        <Stack className={styles.root}>
          <span>Item One</span>
          <span>Item Two</span>
          <span>Item Three</span>
        </Stack>

        <span>Ordered stack</span>
        <Stack className={styles.root}>
          <Stack.Item order={2}>
            <span>Item One</span>
          </Stack.Item>
          <Stack.Item order={3}>
            <span>Item Two</span>
          </Stack.Item>
          <Stack.Item order={1}>
            <span>Item Three</span>
          </Stack.Item>
        </Stack>

        <span>Vertical gap between items</span>
        <Stack className={styles.root} tokens={{ ...tokens.tenGapStack, ...tokens.tenPaddingStack }}>
          <span>Item One</span>
          <span>Item Two</span>
          <span>Item Three</span>
        </Stack>

        <span>Item alignments</span>
        <Stack className={styles.root} tokens={{ ...tokens.fiveGapStack, ...tokens.tenPaddingStack }}>
          <Stack.Item align="auto" className={styles.item}>
            <span>Auto-aligned item</span>
          </Stack.Item>
          <Stack.Item align="stretch" className={styles.item}>
            <span>Stretch-aligned item</span>
          </Stack.Item>
          <Stack.Item align="baseline" className={styles.item}>
            <span>Baseline-aligned item</span>
          </Stack.Item>
          <Stack.Item align="start" className={styles.item}>
            <span>Start-aligned item</span>
          </Stack.Item>
          <Stack.Item align="center" className={styles.item}>
            <span>Center-aligned item</span>
          </Stack.Item>
          <Stack.Item align="end" className={styles.item}>
            <span>End-aligned item</span>
          </Stack.Item>
        </Stack>

        <span>Clickable vertical stack</span>
        <Stack onClick={this._onClick} className={styles.root} tokens={tokens.tenPaddingStack}>
          <span>Click inside this box</span>
        </Stack>
      </Stack>
    );
  }

  private _onClick = (): void => {
    alert('Clicked VerticalStack');
  };
}
