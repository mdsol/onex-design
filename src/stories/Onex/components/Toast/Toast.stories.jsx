import { BugFill, ClockFill } from 'react-bootstrap-icons';
import { Button, Toast } from '../../../../components';

const icons = { Bug: <BugFill />, ClockFill: <ClockFill /> };

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
        <Button variant="secondary" onClick={() => console.log('Resend')}>
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
        <Button variant="secondary" onClick={() => console.log('Resend')}>
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
        <Button variant="secondary" onClick={() => console.log('Resend')}>
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
        <Button variant="secondary" onClick={() => console.log('Resend')}>
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

export const TopStart = Template.bind({});

TopStart.args = {
  id: 'top-start-toast',
  variant: 'info',
  header: 'Example of an info banner message.',
  children: 'Info banner message.',
  show: true,
  position: 'top-start',
};

export const TopCenter = Template.bind({});

TopCenter.args = {
  id: 'top-center-toast',
  variant: 'success',
  header: 'Example of a success banner message.',
  children: 'Success banner message.',
  show: true,
  position: 'top-center',
};

export const TopEnd = Template.bind({});

TopEnd.args = {
  id: 'top-end-toast',
  variant: 'warning',
  header: 'Example of an warning banner message.',
  children: 'Warning banner message.',
  show: true,
  position: 'top-end',
};

export const MiddleStart = Template.bind({});

MiddleStart.args = {
  id: 'middle-start-toast',
  variant: 'info',
  header: 'Example of an info banner message.',
  children: 'Info banner message.',
  show: true,
  position: 'middle-start',
};

export const MiddleCenter = Template.bind({});

MiddleCenter.args = {
  id: 'middle-center-toast',
  variant: 'success',
  header: 'Example of a success banner message.',
  children: 'Success banner message.',
  show: true,
  position: 'middle-center',
};

export const MiddleEnd = Template.bind({});

MiddleEnd.args = {
  id: 'middle-end-toast',
  variant: 'warning',
  header: 'Example of an warning banner message.',
  children: 'Warning banner message.',
  show: true,
  position: 'middle-end',
};

export const BottomStart = Template.bind({});

BottomStart.args = {
  id: 'bottom-start-toast',
  variant: 'info',
  header: 'Example of an info banner message.',
  children: 'Info banner message.',
  show: true,
  position: 'bottom-start',
};

export const BottomCenter = Template.bind({});

BottomCenter.args = {
  id: 'bottom-center-toast',
  variant: 'success',
  header: 'Example of a success banner message.',
  children: 'Success banner message.',
  show: true,
  position: 'bottom-center',
};

export const BottomEnd = Template.bind({});

BottomEnd.args = {
  id: 'bottom-end-toast',
  variant: 'warning',
  header: 'Example of an warning banner message.',
  children: 'Warning banner message.',
  show: true,
  position: 'bottom-end',
};
