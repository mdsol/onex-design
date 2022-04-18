import { Typography } from '../../../../components';

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
    semiBold: {
      description:
        'Can be used with variants: ```body```, ```label```, ```caption```. Provide font-width:600.',
    },
    variant: {
      description: 'Different HTML elements that can be used as component.',
    },
    uppercase: {
      description: 'Can be used with variant: ```caption```. Provide text-transform: uppercase.',
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

export const Body = TypographyTemplate.bind({});
Body.args = {
  children: 'Body',
  variant: 'body',
};

export const BodySemibold = TypographyTemplate.bind({});
BodySemibold.args = {
  children: 'Body SemiBold',
  variant: 'body',
  semiBold: true,
};

export const BodyLink = TypographyTemplate.bind({});
BodyLink.args = {
  children: 'Body Link',
  variant: 'body',
  href: '#',
};

export const Label = TypographyTemplate.bind({});
Label.args = {
  children: 'Label',
  variant: 'label',
};

export const LabelSemibold = TypographyTemplate.bind({});
LabelSemibold.args = {
  children: 'Label SemiBold',
  variant: 'label',
  semiBold: true,
};

export const LabelLink = TypographyTemplate.bind({});
LabelLink.args = {
  children: 'Label Link',
  variant: 'label',
  href: '#',
};

export const Caption = TypographyTemplate.bind({});
Caption.args = {
  children: 'Caption',
  variant: 'caption',
};

export const CaptionSemibold = TypographyTemplate.bind({});
CaptionSemibold.args = {
  children: 'Caption SemiBold',
  variant: 'caption',
  semiBold: true,
};

export const CaptionLink = TypographyTemplate.bind({});
CaptionLink.args = {
  children: 'Caption Link',
  variant: 'caption',
  href: '#',
};

export const CaptionUppercase = TypographyTemplate.bind({});
CaptionUppercase.args = {
  children: 'Caption Uppercase',
  variant: 'caption',
  uppercase: true,
};
