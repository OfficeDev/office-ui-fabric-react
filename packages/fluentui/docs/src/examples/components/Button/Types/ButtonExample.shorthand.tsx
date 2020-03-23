import * as React from 'react';
import { Button, Flex, createSvgIcon } from '@fluentui/react-northstar';
import cx from 'classnames';
import { Volume } from 'grommet-icons';
import { FaVolumeUp } from 'react-icons/fa';

const SoundIcon = createSvgIcon({
  displayName: 'SoundIcon',
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="8 8 16 16">
      <g className={cx('ui-icon__outline', classes.outlinePart)}>
        <path d="M19.0215,19.7998c-0.1279,0-0.2559-0.0488-0.3535-0.1465c-0.1953-0.1953-0.1953-0.5117,0-0.707 c0.7871-0.7871,1.2207-1.833,1.2207-2.9463c0-1.1128-0.4336-2.1592-1.2207-2.9463c-0.1953-0.1953-0.1953-0.5117,0-0.707 s0.5117-0.1953,0.707,0c0.9766,0.9756,1.5137,2.2729,1.5137,3.6533c0,1.3799-0.5371,2.6777-1.5137,3.6533 C19.2773,19.751,19.1494,19.7998,19.0215,19.7998z" />
        <path d="M16.8516,10.1484C16.9502,10.2476,17,10.3647,17,10.5v11c0,0.1357-0.0498,0.2529-0.1484,0.3516 C16.752,21.9512,16.6348,22,16.5,22c-0.1094,0-0.209-0.0332-0.2969-0.1016L12.3438,19H9.1953c-0.3545,0-0.6328-0.1973-0.8359-0.5938 c-0.1616-0.3174-0.2656-0.7422-0.3125-1.2734C8.0156,16.7842,8,16.4062,8,16s0.0156-0.7861,0.0469-1.1406 c0.0469-0.5259,0.1509-0.9478,0.3125-1.2656C8.5625,13.1982,8.8408,13,9.1953,13h3.1484l3.8594-2.8984 C16.291,10.0342,16.3906,10,16.5,10C16.6348,10,16.752,10.0498,16.8516,10.1484z M12.8125,13.8984 c-0.0781,0.0576-0.2607,0.0967-0.5469,0.1172c-0.1562,0.0107-0.271,0.0156-0.3438,0.0156h-0.2578 c-0.2656,0-0.6641-0.0049-1.1953-0.0156C9.9375,14.0054,9.5391,14,9.2734,14C9.0908,14.6357,9,15.3022,9,16 c0,0.6934,0.0908,1.3594,0.2734,2c0.2603,0,0.6562-0.0049,1.1875-0.0156c0.5312-0.0098,0.9297-0.0156,1.1953-0.0156h0.2578 c0.25,0,0.4766,0.0156,0.6797,0.0469c0.104,0.0264,0.1768,0.0547,0.2188,0.0859L16,20.5v-9L12.8125,13.8984z" />
      </g>
      <g className={cx('ui-icon__filled', classes.filledPart)}>
        <path d="M19.0215,19.7998c-0.1279,0-0.2559-0.0488-0.3535-0.1465c-0.1953-0.1953-0.1953-0.5117,0-0.707 c0.7871-0.7871,1.2207-1.833,1.2207-2.9463c0-1.1128-0.4336-2.1592-1.2207-2.9463c-0.1953-0.1953-0.1953-0.5117,0-0.707 s0.5117-0.1953,0.707,0c0.9766,0.9756,1.5137,2.2729,1.5137,3.6533c0,1.3799-0.5371,2.6777-1.5137,3.6533 C19.2773,19.751,19.1494,19.7998,19.0215,19.7998z" />
        <path d="M16.8516,10.1484C16.9502,10.2476,17,10.3647,17,10.5v11c0,0.1357-0.0498,0.2529-0.1484,0.3516 C16.752,21.9512,16.6348,22,16.5,22c-0.1094,0-0.209-0.0332-0.2969-0.1016L12.3438,19H9.1953c-0.3545,0-0.6328-0.1973-0.8359-0.5938 c-0.1616-0.3174-0.2656-0.7422-0.3125-1.2734C8.0156,16.7842,8,16.4062,8,16s0.0156-0.7861,0.0469-1.1406 c0.0469-0.5259,0.1509-0.9478,0.3125-1.2656C8.5625,13.1982,8.8408,13,9.1953,13h3.1484l3.8594-2.8984 C16.291,10.0342,16.3906,10,16.5,10C16.6348,10,16.752,10.0498,16.8516,10.1484z" />
      </g>
    </svg>
  ),
});

const ButtonExample = () => (
  <Flex column gap="gap.smaller">
    <Flex gap="gap.smaller">
      <Button iconAsBox={{ content: <SoundIcon /> }} content="Sound" />
      <Button iconAsJSX={<SoundIcon />} content="Sound" />
      <Button iconAsBox={{ content: <Volume color="currentColor" /> }} content="Sound" />
      <Button iconAsJSX={<Volume color="currentColor" />} content="Sound" />
      <Button iconAsBox={{ content: <FaVolumeUp /> }} content="Sound" />
      <Button iconAsJSX={<FaVolumeUp />} content="Sound" />
    </Flex>
    <Flex gap="gap.smaller">
      <Button iconAsBox={{ content: <SoundIcon /> }} content="Sound" primary />
      <Button iconAsJSX={<SoundIcon />} content="Sound" primary />
      <Button iconAsBox={{ content: <Volume color="currentColor" /> }} content="Sound" primary />
      <Button iconAsJSX={<Volume color="currentColor" />} content="Sound" primary />
      <Button iconAsBox={{ content: <FaVolumeUp /> }} content="Sound" primary />
      <Button iconAsJSX={<FaVolumeUp />} content="Sound" primary />
    </Flex>
    <Flex gap="gap.smaller">
      <Button iconAsBox={{ content: <SoundIcon /> }} iconOnly />
      <Button iconAsJSX={<SoundIcon />} iconOnly />
      <Button iconAsBox={{ content: <Volume color="currentColor" /> }} iconOnly />
      <Button iconAsJSX={<Volume color="currentColor" />} content="Sound" />
      <Button iconAsBox={{ content: <FaVolumeUp /> }} content="Sound" />
      <Button iconAsJSX={<FaVolumeUp />} content="Sound" />
    </Flex>
    <Flex gap="gap.smaller">
      <Button icon={{ name: 'volume' }} iconOnly primary />
      <Button iconAsBox={{ content: <SoundIcon /> }} iconOnly primary />
      <Button iconAsJSX={<SoundIcon />} iconOnly primary />
      <Button iconAsBox={{ content: <Volume color="currentColor" /> }} iconOnly primary />
      <Button iconAsJSX={<Volume color="currentColor" />} iconOnly primary />
      <Button iconAsBox={{ content: <FaVolumeUp /> }} iconOnly primary />
      <Button iconAsJSX={<FaVolumeUp />} iconOnly primary />
    </Flex>
    <Flex gap="gap.smaller">
      <Button iconAsBox={{ content: <SoundIcon /> }} iconOnly circular />
      <Button iconAsJSX={<SoundIcon />} iconOnly circular />
      <Button iconAsBox={{ content: <Volume color="currentColor" /> }} iconOnly circular />
      <Button iconAsJSX={<Volume color="currentColor" />} iconOnly circular />
      <Button iconAsBox={{ content: <FaVolumeUp /> }} iconOnly circular />
      <Button iconAsJSX={<FaVolumeUp />} iconOnly circular />
    </Flex>
    <Flex gap="gap.smaller">
      <Button iconAsBox={{ content: <SoundIcon /> }} iconOnly primary circular />
      <Button iconAsJSX={<SoundIcon />} iconOnly primary circular />
      <Button iconAsBox={{ content: <Volume color="currentColor" /> }} iconOnly primary circular />
      <Button iconAsJSX={<Volume color="currentColor" />} iconOnly primary circular />
      <Button iconAsBox={{ content: <FaVolumeUp /> }} iconOnly primary circular />
      <Button iconAsJSX={<FaVolumeUp />} iconOnly primary circular />
    </Flex>
    <Flex gap="gap.smaller">
      <Button iconAsBox={{ content: <SoundIcon /> }} content="Sound" text />
      <Button iconAsJSX={<SoundIcon />} content="Sound" text />
      <Button iconAsBox={{ content: <Volume color="currentColor" /> }} content="Sound" text />
      <Button iconAsJSX={<Volume color="currentColor" />} content="Sound" text />
      <Button iconAsBox={{ content: <FaVolumeUp /> }} content="Sound" text />
      <Button iconAsJSX={<FaVolumeUp />} content="Sound" text />
    </Flex>
    <Flex gap="gap.smaller">
      <Button iconAsBox={{ content: <SoundIcon /> }} content="Sound" primary text />
      <Button iconAsJSX={<SoundIcon />} content="Sound" primary text />
      <Button iconAsBox={{ content: <Volume color="currentColor" /> }} content="Sound" primary text />
      <Button iconAsJSX={<Volume color="currentColor" />} content="Sound" primary text />
      <Button iconAsBox={{ content: <FaVolumeUp /> }} content="Sound" primary text />
      <Button iconAsJSX={<FaVolumeUp />} content="Sound" primary text />
    </Flex>
  </Flex>
);

export default ButtonExample;
