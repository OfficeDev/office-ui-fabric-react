import * as React from 'react';
import {
  DefaultButton,
  Callout,
  DirectionalHint,
  Dropdown,
  IDropdownOption,
  Checkbox,
  Slider,
  getTheme,
  mergeStyleSets,
  FontWeights,
  Link,
  getId,
} from 'office-ui-fabric-react';
import { useBoolean } from '@uifabric/react-hooks';

const DIRECTION_OPTIONS = [
  { key: DirectionalHint.topLeftEdge, text: 'Top Left Edge' },
  { key: DirectionalHint.topCenter, text: 'Top Center' },
  { key: DirectionalHint.topRightEdge, text: 'Top Right Edge' },
  { key: DirectionalHint.topAutoEdge, text: 'Top Auto Edge' },
  { key: DirectionalHint.bottomLeftEdge, text: 'Bottom Left Edge' },
  { key: DirectionalHint.bottomCenter, text: 'Bottom Center' },
  { key: DirectionalHint.bottomRightEdge, text: 'Bottom Right Edge' },
  { key: DirectionalHint.bottomAutoEdge, text: 'Bottom Auto Edge' },
  { key: DirectionalHint.leftTopEdge, text: 'Left Top Edge' },
  { key: DirectionalHint.leftCenter, text: 'Left Center' },
  { key: DirectionalHint.leftBottomEdge, text: 'Left Bottom Edge' },
  { key: DirectionalHint.rightTopEdge, text: 'Right Top Edge' },
  { key: DirectionalHint.rightCenter, text: 'Right Center' },
  { key: DirectionalHint.rightBottomEdge, text: 'Right Bottom Edge' },
];

const theme = getTheme();
const styles = mergeStyleSets({
  buttonArea: {
    verticalAlign: 'top',
    display: 'inline-block',
    textAlign: 'center',
    margin: '0 100px',
    minWidth: 130,
    height: 32,
  },
  configArea: {
    minWidth: '300px',
    display: 'inline-block',
  },
  callout: {
    maxWidth: 300,
  },
  calloutExampleButton: {
    width: '100%',
  },
  header: {
    padding: '18px 24px 12px',
  },
  title: [
    theme.fonts.xLarge,
    {
      margin: 0,
      fontWeight: FontWeights.semilight,
    },
  ],
  inner: {
    height: '100%',
    padding: '0 24px 20px',
  },
  subtext: [
    theme.fonts.small,
    {
      margin: 0,
      fontWeight: FontWeights.semilight,
    },
  ],
  link: [
    theme.fonts.medium,
    {
      color: theme.palette.neutralPrimary,
    },
  ],
  actions: {
    position: 'relative',
    marginTop: 20,
    width: '100%',
    whiteSpace: 'nowrap',
  },
});

let menuButtonElement: HTMLElement | null;
const labelId: string = getId('callout-label');
const descriptionId: string = getId('callout-description');

export const CalloutDirectionalExample: React.FunctionComponent = () => {
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
  const [isBeakVisible, { toggle: toggleIsBeakVisible }] = useBoolean(true);
  const [gapSpace, setGapSpace] = React.useState();
  const [beakWidth, setBeakWidth] = React.useState();
  const [directionalHint, setDirectionalHint] = React.useState<DirectionalHint>(DirectionalHint.bottomLeftEdge);

  const onDirectionalChanged = (event: React.FormEvent<HTMLDivElement>, option: IDropdownOption): void => {
    setDirectionalHint(option.key as DirectionalHint);
  };

  const onGapSlider = (value: number): void => {
    setGapSpace(value);
  };
  const onBeakWidthSlider = (value: number): void => {
    setBeakWidth(value);
  };

  const onShowBeakChange = () => {
    toggleIsBeakVisible();
    setBeakWidth(10);
  };

  return (
    <>
      <div className={styles.configArea}>
        <Checkbox
          styles={{ root: { margin: '10px 0' } }}
          label="Show beak"
          checked={isBeakVisible}
          onChange={onShowBeakChange}
        />

        <Slider max={30} label="Gap Space" min={0} defaultValue={0} onChange={onGapSlider} />
        {isBeakVisible && (
          <Slider max={50} label="Beak Width" min={10} defaultValue={16} onChange={onBeakWidthSlider} />
        )}
        <Dropdown
          label="Directional hint"
          selectedKey={directionalHint!}
          options={DIRECTION_OPTIONS}
          onChange={onDirectionalChanged}
        />
      </div>
      <div className={styles.buttonArea} ref={menuButton => (menuButtonElement = menuButton)}>
        <DefaultButton
          className={styles.calloutExampleButton}
          onClick={toggleIsCalloutVisible}
          text={isCalloutVisible ? 'Hide callout' : 'Show callout'}
        />
      </div>
      {isCalloutVisible ? (
        <Callout
          ariaLabelledBy={labelId}
          ariaDescribedBy={descriptionId}
          className={styles.callout}
          gapSpace={gapSpace}
          target={menuButtonElement}
          isBeakVisible={isBeakVisible}
          beakWidth={beakWidth}
          onDismiss={toggleIsCalloutVisible}
          directionalHint={directionalHint}
          setInitialFocus
        >
          <div className={styles.header}>
            <p className={styles.title} id={labelId}>
              All of your favorite people
            </p>
          </div>
          <div className={styles.inner}>
            <p className={styles.subtext} id={descriptionId}>
              Message body is optional. If help documentation is available, consider adding a link to learn more at the
              bottom.
            </p>
            <div className={styles.actions}>
              <Link className={styles.link} href="http://microsoft.com" target="_blank">
                Go to Microsoft
              </Link>
            </div>
          </div>
        </Callout>
      ) : null}
    </>
  );
};
