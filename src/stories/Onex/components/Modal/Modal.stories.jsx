import React from 'react';

import { Modal, Button } from '../../../../components';

export default {
  title: 'Onex/Components/Modal',
  component: Modal,
  argTypes: {
    children: {
      description: 'The content of the Modal',
      control: 'text',
    },
    size: {
      description: 'Specifies a large or small width of the Modal',
    },
    handleClose: {
      action: 'clicked',
      description: 'callback to close the Modal',
    },
    onPrimaryClick: {
      action: 'clicked',
      description: 'callback to click on the Primary button',
    },
    onSecondaryClick: {
      action: 'clicked',
      description: 'callback to click on the Secondary button',
    },
    show: {
      description: 'bool for showing the Modal',
      control: {
        type: 'boolean',
      },
    },
    secondaryActionName: {
      description: 'The name of the secondary action',
      control: 'text',
    },
    primaryActionName: {
      description: 'The name of the primaru action',
      control: 'text',
    },
    widthClassName: {
      description: 'The className to set the width of the Modal',
      control: 'text',
    },
    showFooter: {
      description: 'bool for showing the Modal Footer',
      control: {
        type: 'boolean',
      },
    },
  },
};

const DemoModal = (args) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch modal
      </Button>

      <Modal
        {...args}
        show={show}
        handleClose={() => setShow(false)}
        onSecondaryClick={handleClose}
        onPrimaryClick={handleClose}
      />
    </>
  );
};

export const Demo = DemoModal.bind({});
Demo.args = {
  secondaryActionName: 'Secondary',
  primaryActionName: 'Save Changes',
  size: 'lg',
  showFooter: true,
  actionLinkName: 'Link',
  link: '#',
  title: 'Header',
  children: 'Large Modal',
};

const LargeModal = (args) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch large modal
      </Button>

      <Modal
        {...args}
        show={show}
        handleClose={() => setShow(false)}
        onSecondaryClick={handleClose}
        onPrimaryClick={handleClose}
      />
    </>
  );
};

export const Large = LargeModal.bind({});
Large.args = {
  secondaryActionName: 'Secondary',
  primaryActionName: 'Save Changes',
  size: 'lg',
  showFooter: true,
  actionLinkName: 'Link',
  link: '#',
  title: 'Header',
  children: 'Large Modal',
};

const SmallModal = (args) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch small modal
      </Button>

      <Modal
        {...args}
        show={show}
        handleClose={handleClose}
        onSecondaryClick={handleClose}
        onPrimaryClick={handleClose}
      />
    </>
  );
};

export const Small = SmallModal.bind({});
Small.args = {
  secondaryActionName: 'Secondary',
  primaryActionName: 'Save Changes',
  size: 'sm',
  showFooter: true,
  actionLinkName: 'Link',
  link: '#',
  title: 'Header',
  children: 'Small Modal',
};

const CustomWidthModal = (args) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch custom width modal
      </Button>

      <Modal
        {...args}
        show={show}
        handleClose={handleClose}
        onSecondaryClick={handleClose}
        onPrimaryClick={handleClose}
      />
    </>
  );
};

export const CustomWidth = CustomWidthModal.bind({});
CustomWidth.args = {
  secondaryActionName: 'Secondary',
  primaryActionName: 'Save Changes',
  showFooter: true,
  actionLinkName: 'Link',
  link: '#',
  title: 'Header',
  children: 'Custom Modal',
};
