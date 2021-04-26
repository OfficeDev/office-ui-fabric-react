import * as React from 'react';
import { Flex } from '@fluentui/react-flex';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { FlexDirectionProperty, JustifyContentProperty, AlignItemsProperty } from 'csstype';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles({
  root: {
    border: '1px solid black',
    height: '200px',
    '> *': {
      border: '1px solid black',
      backgroundColor: 'white',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
    },
  },
});

const directionOptions: FlexDirectionProperty[] = ['row', 'row-reverse', 'column', 'column-reverse'];
const alignmentOptions: JustifyContentProperty[] | AlignItemsProperty[] = [
  'normal',
  'flex-start',
  'center',
  'flex-end',
  'space-around',
  'space-between',
  'space-evenly',
];
export const Default = () => {
  const styles = useStyles();

  return (
    <Flex
      direction={select('Direction', directionOptions, 'row')}
      horizontalAlign={select('Horizontal Alignment', alignmentOptions, 'normal')}
      verticalAlign={select('Vertical Alignment', alignmentOptions, 'normal')}
      gap={text('Gap', '10px')}
      wrap={boolean('Wrap', false)}
      grow={number('Grow', 0)}
      shrink={number('Shrink', 1)}
      inline={boolean('Inline', false)}
      className={styles.root}
    >
      <span>Item A</span>
      <span>Item B</span>
    </Flex>
  );
};
