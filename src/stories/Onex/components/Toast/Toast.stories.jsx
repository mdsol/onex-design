import { Button, Toast, Icon } from '../../../../components';

const icons = { Star: <Icon>star</Icon>, Flag: <Icon>flag</Icon> };

export default {
  title: 'Onex/Components/Toast',
  component: Toast,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    dataTestId: { control: 'text' },
    delay: { control: 'number' },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
    },
  },
};

const Template = (props) => <Toast {...props} />;

export const Info = Template.bind({});

Info.args = {
  id: 'info-toast-button-text',
  variant: 'info',
  header: 'Info toast example',
  children: (
    <>
      Info toast message.
      <div style={{ paddingTop: '1rem' }}>
        <Button
          style={{ marginRight: '0.5rem' }}
          variant="secondary"
          onClick={() => console.log('Resend')}
        >
          Resend
        </Button>
        <Button variant="tertiary" onClick={() => console.log('Discard')}>
          Discard
        </Button>
      </div>
    </>
  ),
  show: true,
  position: 'top-start',
};

export const Success = Template.bind({});

Success.args = {
  id: 'success-toast-button-text',
  variant: 'success',
  header: 'Success toast example',
  children: (
    <>
      Success toast message.
      <div style={{ paddingTop: '1rem' }}>
        <Button
          style={{ marginRight: '0.5rem' }}
          variant="secondary"
          onClick={() => console.log('Resend')}
        >
          Resend
        </Button>
        <Button variant="tertiary" onClick={() => console.log('Discard')}>
          Discard
        </Button>
      </div>
    </>
  ),
  show: true,
  position: 'top-start',
};

export const Warning = Template.bind({});

Warning.args = {
  id: 'warning-toast-button-text',
  variant: 'warning',
  header: 'Warning toast example',
  children: (
    <>
      Warning toast message.
      <div style={{ paddingTop: '1rem' }}>
        <Button
          style={{ marginRight: '0.5rem' }}
          variant="secondary"
          onClick={() => console.log('Resend')}
        >
          Resend
        </Button>
        <Button variant="tertiary" onClick={() => console.log('Discard')}>
          Discard
        </Button>
      </div>
    </>
  ),
  show: true,
  position: 'top-start',
};

export const Error = Template.bind({});

Error.args = {
  id: 'error-toast-button-text',
  variant: 'error',
  header: 'Error toast example',
  children: (
    <>
      Error toast message.
      <div style={{ paddingTop: '1rem' }}>
        <Button
          style={{ marginRight: '0.5rem' }}
          variant="secondary"
          onClick={() => console.log('Resend')}
        >
          Resend
        </Button>
        <Button variant="tertiary" onClick={() => console.log('Discard')}>
          Discard
        </Button>
      </div>
    </>
  ),
  show: true,
  position: 'top-start',
};
