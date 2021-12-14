import { PlusCircleFill, ChevronRight, XLg } from 'react-bootstrap-icons';
import { Button } from '../../components';
import ButtonDocumentation from './Button.stories.mdx';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        children: {
            description: 'The content of the button',
            control: 'text',
        },
        className: {
            description: 'Name of the CSS class',
            control: 'text',
        },
        dataTestId: {
            description: 'Id of the component for testing',
        },
        disabled: {
            description: 'Disables the Button, preventing mouse events',
            control: 'boolean',
        },
        href: {
            description: 'Providing a href will render an "a" element, styled as a button',
            control: 'text',
        },
        size: {
            description: 'Specifies a large or small button',
        },

        onClick: { action: 'clicked' },
        variant: {
            description: 'Button variation',
        },
    },
    parameters: {
        docs: {
            page: ButtonDocumentation,
        },
    },
};

const ButtonTemplate = (args) => <Button {...args} />;

export const Small = ButtonTemplate.bind({});
Small.args = {
    variant: 'primary',
    size: 'sm',
    children: 'Small button',
};

export const Large = ButtonTemplate.bind({});
Large.args = {
    variant: 'primary',
    size: 'lg',
    children: 'Large button',
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Basic button',
};

export const PrimaryWithIcon = ButtonTemplate.bind({});
const withIconPrimaryCodeBody = `
<CustomButton onClick={() => {}}>
<>
     <PlusCircleFill />
     <span> Button with icon </span>
<>     
</CustomButton>
`;
PrimaryWithIcon.parameters = {
    docs: {
        source: {
            code: withIconPrimaryCodeBody,
        },
    },
};
PrimaryWithIcon.args = {
    variant: 'primary',
    children: (
        <>
            <PlusCircleFill />
            <span> Button with icon </span>
        </>
    ),
};

export const PrimaryIcon = ButtonTemplate.bind({});
const iconPrimaryCodeBody = `
<CustomButton onClick={() => {}}>
     <XLg />
</CustomButton>
`;
PrimaryIcon.parameters = {
    docs: {
        source: {
            code: iconPrimaryCodeBody,
        },
    },
};
PrimaryIcon.args = {
    variant: 'primary',
    children: <XLg />,
};

export const PrimaryDisabled = ButtonTemplate.bind({});
PrimaryDisabled.args = {
    variant: 'primary',
    disabled: true,
    children: 'Disabled button',
};

export const PrimaryAnchor = ButtonTemplate.bind({});
PrimaryAnchor.args = {
    variant: 'primary',
    children: 'This is an anchor',
    href: '#',
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
    variant: 'secondary',
    children: 'Basic button',
};

export const SecondaryWithIcon = ButtonTemplate.bind({});
const withIconSecondaryCodeBody = `
<CustomButton
    onClick={() => {}}
    variant="secondary"
    >
<>
     <span> Button with icon </span>
     <ChevronRight />
<>     
</CustomButton>
`;
SecondaryWithIcon.parameters = {
    docs: {
        source: {
            code: withIconSecondaryCodeBody,
        },
    },
};
SecondaryWithIcon.args = {
    variant: 'secondary',
    children: (
        <>
            <span> Button with icon </span>
            <ChevronRight />
        </>
    ),
};

export const SecondaryIcon = ButtonTemplate.bind({});
const iconSecondaryCodeBody = `
<CustomButton
    onClick={() => {}}
    variant="secondary"
    >
     <XLg />
</CustomButton>
`;
SecondaryIcon.parameters = {
    docs: {
        source: {
            code: iconSecondaryCodeBody,
        },
    },
};
SecondaryIcon.args = {
    variant: 'secondary',
    children: <XLg />,
};

export const SecondaryDisabled = ButtonTemplate.bind({});
SecondaryDisabled.args = {
    variant: 'secondary',
    disabled: true,
    children: 'Disabled button',
};

export const SecondaryAnchor = ButtonTemplate.bind({});
SecondaryAnchor.args = {
    variant: 'secondary',
    children: 'This is an anchor',
    href: '#',
};

export const Tertiary = ButtonTemplate.bind({});
Tertiary.args = {
    variant: 'link',
    children: 'Basic button',
};

export const TertiaryWithIcon = ButtonTemplate.bind({});
const withIconTertiaryCodeBody = `
<CustomButton 
  onClick={() => {}}
  variant="link"
  >
<>
     <PlusCircleFill />
     <span> Button with icon </span>
<>     
</CustomButton>
`;
TertiaryWithIcon.parameters = {
    docs: {
        source: {
            code: withIconTertiaryCodeBody,
        },
    },
};
TertiaryWithIcon.args = {
    variant: 'link',
    children: (
        <>
            <PlusCircleFill />
            <span> Button with icon </span>
        </>
    ),
};

export const TertiaryIcon = ButtonTemplate.bind({});
const iconTertiaryCodeBody = `
<CustomButton
    onClick={() => {}}
    variant="icon-link"
    >
     <XLg />
</CustomButton>
`;
TertiaryIcon.parameters = {
    docs: {
        source: {
            code: iconTertiaryCodeBody,
        },
    },
};
TertiaryIcon.args = {
    variant: 'icon-link',
    children: <XLg />,
};

export const TertiaryDisabled = ButtonTemplate.bind({});
TertiaryDisabled.args = {
    variant: 'link',
    disabled: true,
    children: 'Disabled button',
};

export const TertiaryAnchor = ButtonTemplate.bind({});
TertiaryAnchor.args = {
    variant: 'link',
    children: 'This is an anchor',
    href: '#',
};
