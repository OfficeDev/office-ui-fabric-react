import * as React from 'react';
import Screener from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { loadTheme, createTheme } from '@fluentui/react';
import { PrimaryButton } from '@fluentui/react/lib/compat/Button';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { Button } from '@fluentui/react-button';
import { FabricDecorator } from '../utilities/index';

// TODO: update tests to only apply theme on react-* components

storiesOf('ThemeProvider (react-theme-provider)', module)
  .addDecorator(FabricDecorator)
  .addDecorator(story => (
    <Screener steps={new Screener.Steps().snapshot('default', { cropTo: '.testWrapper' }).end()}>
      {story()}
    </Screener>
  ))
  .addStory('Default theme', () => <PrimaryButton>Default theme</PrimaryButton>)
  .addStory('Customized theme', () => (
    <ThemeProvider
      theme={{
        semanticColors: {
          primaryButtonBackground: '#000',
        },
      }}
    >
      <PrimaryButton>Customized theme</PrimaryButton>
    </ThemeProvider>
  ))
  .addStory('Customized theme - nested ThemeProvider', () => (
    <ThemeProvider
      theme={{
        semanticColors: {
          primaryButtonBackground: '#000',
        },
      }}
    >
      <PrimaryButton>Customized theme 1</PrimaryButton>
      <ThemeProvider
        theme={{
          palette: {
            themePrimary: '#FFF',
          },
          semanticColors: {
            primaryButtonText: '#000',
          },
        }}
      >
        <PrimaryButton>Customized theme 2</PrimaryButton>
      </ThemeProvider>
    </ThemeProvider>
  ))
  .addStory('Customized styles', () => (
    <ThemeProvider
      theme={{ components: { PrimaryButton: { styles: { root: { background: '#000' } } } } }}
    >
      <PrimaryButton>Customized styles</PrimaryButton>
    </ThemeProvider>
  ))
  .addStory('Use variants on new button', () => (
    <ThemeProvider
      theme={{
        components: {
          Button: {
            variants: {
              root: {
                background: 'yellow',
              },
            },
          },
        },
      }}
    >
      <Button>New Button customized with tokens</Button>

      <ThemeProvider
        theme={{
          components: {
            Button: {
              variants: {
                root: {
                  background: 'green',
                },
              },
            },
          },
        }}
      >
        <Button>Nested</Button>
      </ThemeProvider>
    </ThemeProvider>
  ))
  .addStory('Use compat theme on new button', () => (
    <ThemeProvider
      theme={{
        semanticColors: { buttonBackground: 'yellow' },
      }}
    >
      <Button>New Button customized with compat theme</Button>

      <ThemeProvider
        theme={{
          semanticColors: { buttonBackground: 'green' },
        }}
      >
        <Button>Nested</Button>
      </ThemeProvider>
    </ThemeProvider>
  ));

const LoadThemeTestButton: React.FunctionComponent<{
  buttonAs?: React.ElementType;
  buttonProps?: any;
}> = props => {
  const [isThemeCustomized, setIsThemeCustomized] = React.useState(false);

  // toggle between default theme and customized theme
  const onClick = () => {
    if (isThemeCustomized) {
      loadTheme(createTheme({}));
      setIsThemeCustomized(false);
    } else {
      loadTheme({
        semanticColors: { primaryButtonBackground: '#000', primaryButtonBackgroundHovered: '#000' },
      });
      setIsThemeCustomized(true);
    }
  };

  const Root = props.buttonAs || PrimaryButton;

  return (
    <Root className="testLoadTheme" onClick={onClick} {...props.buttonProps}>
      {props.children}
    </Root>
  );
};

storiesOf('ThemeProvider with loadTheme', module)
  .addDecorator(FabricDecorator)
  .addDecorator(story => (
    <Screener
      steps={new Screener.Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .click('.testLoadTheme')
        .snapshot('global theme changed', { cropTo: '.testWrapper' })
        .click('.testLoadTheme') // set default theme back
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('Use contextual theme over global theme if defined', () => (
    <ThemeProvider>
      <LoadThemeTestButton>Customized contextual theme 1</LoadThemeTestButton>
      <ThemeProvider theme={{ semanticColors: { primaryButtonText: 'yellow' } }}>
        <PrimaryButton>Customized contextual theme 2</PrimaryButton>
      </ThemeProvider>

      <ThemeProvider
        theme={{ semanticColors: { primaryButtonBackground: '#FFF', primaryButtonText: 'green' } }}
      >
        <PrimaryButton>Customized contextual theme 3</PrimaryButton>
      </ThemeProvider>
    </ThemeProvider>
  ))
  .addStory('Use updated global theme', () => (
    <LoadThemeTestButton>Customized global theme</LoadThemeTestButton>
  ))
  .addStory('Use updated global theme on new Button', () => (
    <LoadThemeTestButton buttonAs={Button} buttonProps={{ primary: true }}>
      Customized global theme
    </LoadThemeTestButton>
  ));
