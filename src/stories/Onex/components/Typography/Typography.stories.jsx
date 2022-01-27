import { Typography } from '../../../../components';
import TypographyDocumentation from './Typography.stories.mdx';

export default {
    title: 'Typography',
    component: Typography,
    argTypes: {
        align: {
            description: 'Set the text-align on the component.',
        },
        children: {
            description: 'The content of the component.',
            control: 'text',
        },
        className: {
            description: 'Name of the CSS class.',
            control: 'text',
        },
        dataTestId: {
            description: 'Id of the component for testing.',
            control: 'text',
        },
        href: {
            description: 'Providing a ```href``` will render an ```<a>``` element.',
            control: 'text',
        },
        marginBottom: {
            description: 'If ```true```, the text will have a bottom margin.',
            control: 'boolean',
        },
        noWrap: {
            description: `If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
                          Note that text overflow can only happen with block or inline-block level elements
                          (the element needs to have a width in order to overflow).`,
            control: 'boolean',
        },
        paragraph: {
            description: 'If ```true```, the element will be a paragraph element.',
            control: 'boolean',
        },
        size: {
            description: 'Can be used with variants: ```body```, ```button```, ```caption```.',
        },
        variant: {
            description: 'Different HTML elements that can be used as component.',
        },
    },
    parameters: {
        docs: {
            page: TypographyDocumentation,
        },
    },
};

const TypographyTemplate = (args) => <Typography {...args} />;

export const CenterAlign = TypographyTemplate.bind({});
CenterAlign.args = {
    align: 'center',
    children: 'Center',
    variant: 'body',
};

export const InheritAlign = TypographyTemplate.bind({});
InheritAlign.args = {
    align: 'inherit',
    children: 'Inherit',
    variant: 'body',
};

export const JustifyAlign = TypographyTemplate.bind({});
JustifyAlign.args = {
    align: 'justify',
    children: 'Justify',
    variant: 'body',
};

export const LeftAlign = TypographyTemplate.bind({});
LeftAlign.args = {
    align: 'left',
    children: 'Left',
    variant: 'body',
};

export const RightAlign = TypographyTemplate.bind({});
RightAlign.args = {
    align: 'right',
    children: 'Right',
    variant: 'body',
};

export const Title = TypographyTemplate.bind({});
Title.args = {
    children: 'Title',
    variant: 'title',
};

export const H1 = TypographyTemplate.bind({});
H1.args = {
    children: 'Heading 1',
    variant: 'h1',
};

export const H2 = TypographyTemplate.bind({});
H2.args = {
    children: 'Heading 2',
    variant: 'h2',
};

export const H3 = TypographyTemplate.bind({});
H3.args = {
    children: 'Heading 3',
    variant: 'h3',
};

export const H4 = TypographyTemplate.bind({});
H4.args = {
    children: 'Heading 4',
    variant: 'h4',
};

export const H5 = TypographyTemplate.bind({});
H5.args = {
    children: 'Heading 5',
    variant: 'h5',
};

export const BodyLarge = TypographyTemplate.bind({});
BodyLarge.args = {
    children: 'Body Regular',
    variant: 'body',
    size: 'lg',
};

export const BodyLargeLink = TypographyTemplate.bind({});
BodyLargeLink.args = {
    children: 'Body Regular Link',
    variant: 'body',
    size: 'lg',
    href: '#',
};

export const BodySmall = TypographyTemplate.bind({});
BodySmall.args = {
    children: 'Body Small',
    variant: 'body',
    size: 'sm',
};

export const BodySmallLink = TypographyTemplate.bind({});
BodySmallLink.args = {
    children: 'Body Small Link',
    variant: 'body',
    size: 'sm',
    href: '#',
};

export const ButtonLarge = TypographyTemplate.bind({});
ButtonLarge.args = {
    children: 'Button Regular',
    variant: 'button',
    size: 'lg',
};

export const ButtonSmall = TypographyTemplate.bind({});
ButtonSmall.args = {
    children: 'Button Small',
    variant: 'button',
    size: 'sm',
};

export const CaptionLarge = TypographyTemplate.bind({});
CaptionLarge.args = {
    children: 'Caption Regular',
    variant: 'caption',
    size: 'lg',
};

export const CaptionLargeLink = TypographyTemplate.bind({});
CaptionLargeLink.args = {
    children: 'Caption Regular Link',
    variant: 'caption',
    size: 'lg',
    href: '#',
};

export const CaptionSmall = TypographyTemplate.bind({});
CaptionSmall.args = {
    children: 'Caption Small',
    variant: 'caption',
    size: 'sm',
};

export const CaptionSmallLink = TypographyTemplate.bind({});
CaptionSmallLink.args = {
    children: 'Caption Small Link',
    variant: 'caption',
    size: 'sm',
    href: '#',
};
