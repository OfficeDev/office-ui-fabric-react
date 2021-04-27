import * as React from 'react';
import { Popup, PopupTrigger, PopupContent, PopupProps } from '@fluentui/react-popup';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles({
  example: {
    padding: '12px',
  },
});

const ExampleContent = () => {
  const { example } = useStyles();
  return (
    <div className={example}>
      <h3>Popup content</h3>

      <div>This is some popup content</div>
    </div>
  );
};

export const Default = (props: PopupProps) => (
  <Popup {...props}>
    <PopupTrigger>
      <button>Popup trigger</button>
    </PopupTrigger>

    <PopupContent>
      <ExampleContent />
    </PopupContent>
  </Popup>
);

Default.argTypes = {
  openOnContext: {
    defaultValue: false,
    control: 'boolean',
  },

  openOnHover: {
    defaultValue: false,
    control: 'boolean',
  },
};

export const AnchorToTarget = () => {
  const [target, setTarget] = React.useState<HTMLButtonElement | null>();

  return (
    <>
      <div>
        <Popup target={target}>
          <PopupTrigger>
            <button>Popup trigger</button>
          </PopupTrigger>

          <PopupContent>
            <ExampleContent />
          </PopupContent>
        </Popup>
      </div>

      <button style={{ marginTop: 100 }} ref={setTarget}>
        Custom target
      </button>
    </>
  );
};

export const Controlled = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: PopupProps['onOpenChange'] = (_, data) => setOpen(data.open || false);

  return (
    <>
      <Popup open={open} onOpenChange={onOpenChange}>
        <PopupTrigger>
          <button>Custom trigger</button>
        </PopupTrigger>
        <PopupContent>
          <ExampleContent />
        </PopupContent>
      </Popup>
    </>
  );
};

export const WithCustomTrigger = () => {
  const [open, setOpen] = React.useState(false);
  const [target, setTarget] = React.useState<HTMLButtonElement | null>(null);
  const onClick = () => setOpen(s => !s);
  const onOpenChange: PopupProps['onOpenChange'] = (_, data) => setOpen(data.open || false);

  return (
    <>
      <button ref={setTarget} onClick={onClick}>
        Custom trigger
      </button>
      <Popup target={target} open={open} onOpenChange={onOpenChange}>
        <PopupContent>
          <ExampleContent />
        </PopupContent>
      </Popup>
    </>
  );
};
