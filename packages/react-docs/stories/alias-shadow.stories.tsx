import * as React from 'react';
import { StorybookStoryContext } from '../src/types';

export default {
  title: 'Fluent UI Theme/Alias/Shadows',
};

const ShadowBox = (props) => (
  <div
    {...props}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      boxShadow: props.shadow,
      height: '2rem',
      fontFamily: 'monospace',
      fontSize: 10,
    }}
  >
    {props.shadow.split('),').map((line) => (
      <div key={line}>{line}</div>
    ))}
  </div>
);

export const Shadows = (props, { globals: { theme } }: StorybookStoryContext) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr 1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        marginBottom: '6em',
      }}
    >
      <h3 key="shadow-title">Shadow</h3>
      <h3 key="shadow-title-light">Light</h3>
      <h3 key="shadow-title-dark">Dark</h3>
      <h3 key="shadow-title-hc">High Contrast</h3>
      {Object.keys(theme.light.alias.shadow).map((shadow) => [
        <div key={shadow}>{shadow}</div>,
        <ShadowBox key={`${shadow}-light`} shadow={theme.light.alias.shadow[shadow]} />,
        <ShadowBox key={`${shadow}-dark`} shadow={theme.dark.alias.shadow[shadow]} />,
        <ShadowBox key={`${shadow}-hc`} shadow={theme.highContrast.alias.shadow[shadow]} />,
      ])}
    </div>
  );
};
