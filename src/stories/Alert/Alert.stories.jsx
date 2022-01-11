import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import AlertDocumentation from './Alert.stories.mdx';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
        children: {
            description: 'The content of the component',
            control: 'text',
        },
        closeLabel: {
            description: 'Sets the text for alert close button.',
            control: 'text',
            table: {
                defaultValue: {
                    summary: 'Close alert',
                },
                type: {
                    summary: 'string',
                },
            },
        },
        closeVariant: {
            description: 'Sets the text for alert close button.',
            control: 'text',
            table: {
                type: {
                    summary: 'white',
                },
            },
        },
        dismissible: {
            description:
                'Renders a properly aligned dismiss button, as well as adding extra horizontal padding to the Alert.',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
        onClose: {
            description: 'Callback fired when alert is closed.',
            action: 'close',
            table: {
                type: {
                    summary: 'func',
                },
            },
        },
        show: {
            description: 'Controls the visual state of the Alert.',
            control: 'boolean',
            table: {
                defaultValue: {
                    summary: true,
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        transition: {
            description:
                'Animate the alert dismissal. Defaults to using ```<Fade>``` animation or use ```false``` to disable. A custom ```react-transition-group``` Transition can also be provided.',
            control: 'boolean',
            table: {
                defaultValue: {
                    summary: 'Fade',
                },
                type: {
                    summary: 'boolean|elementType',
                },
            },
        },
        variant: {
            description: 'The Alert visual variant',
            options: [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'dark',
                'light',
            ],
            control: { type: 'select' },
            table: {
                defaultValue: {
                    summary: 'primary',
                },
                type: {
                    summary:
                        'primary | secondary | success | danger | warning | info | dark | light',
                },
            },
        },
    },
    parameters: {
        docs: {
            page: AlertDocumentation,
        },
    },
};

const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

export const Examples = () =>
    types.map((variant, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
        </Alert>
    ));

const examplesCodeBody = `
[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
));
`;
Examples.parameters = {
    docs: {
        source: {
            code: examplesCodeBody,
        },
    },
};

export const Links = () =>
    types.map((variant, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Alert key={idx} variant={variant}>
            This is a {variant} alert with <Alert.Link href="#">an example link</Alert.Link>. Give
            it a click if you like.
        </Alert>
    ));

const linksCodeBody = `
[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert with{' '}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
));
`;

Links.parameters = {
    docs: {
        source: {
            code: linksCodeBody,
        },
    },
};

export const AdditionalContent = () => (
    <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
            Aww yeah, you successfully read this important alert message. This example text is going
            to run a bit longer so that you can see how spacing within an alert works with this kind
            of content.
        </p>
        <hr />
        <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </p>
    </Alert>
);

export const DismissingError = () => {
    const [show, setShow] = React.useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo luctus, nisi
                    erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur
                    purus sit amet fermentum.
                </p>
            </Alert>
        );
    }

    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};

export const DismissingSuccess = () => {
    const [show, setShow] = React.useState(true);

    return (
        <Alert show={show} onClose={() => setShow(false)} variant="success" dismissible>
            <Alert.Heading>How&apos;s it going?!</Alert.Heading>
            <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <hr />
        </Alert>
    );
};
