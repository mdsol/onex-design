import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Button } from '../../../../components';

export default {
  title: 'Onex/Components/Button',
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
    type: {
      description: 'Button type',
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

export const PrimarySmall = ButtonTemplate.bind({});
PrimarySmall.args = {
  variant: 'primary',
  size: 'sm',
  children: 'Small button',
};

export const PrimaryLarge = ButtonTemplate.bind({});
PrimaryLarge.args = {
  variant: 'primary',
  size: 'lg',
  children: 'Large button',
};

export const PrimaryWithIcon = ButtonTemplate.bind({});
const withIconPrimaryCodeBody = `
<CustomButton onClick={() => {}}>
<>
     <StarRoundedIcon />
     <span>Button with icon</span>
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
      <StarRoundedIcon />
      <span>Button with icon</span>
    </>
  ),
};

export const PrimaryWithTwoIcons = ButtonTemplate.bind({});
const withTwoIconsPrimaryCodeBody = `
<CustomButton onClick={() => {}}>
<>
     <StarRoundedIcon />
     <span>Button with icon</span>
     <StarRoundedIcon />
<>
</CustomButton>
`;
PrimaryWithTwoIcons.parameters = {
  docs: {
    source: {
      code: withTwoIconsPrimaryCodeBody,
    },
  },
};
PrimaryWithTwoIcons.args = {
  variant: 'primary',
  size: 'sm',
  children: (
    <>
      <StarRoundedIcon />
      <span>Button with icon</span>
      <StarRoundedIcon />
    </>
  ),
};

export const PrimaryDisabled = ButtonTemplate.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  disabled: true,
  children: 'Disabled button',
};

export const PrimarySmallIcon = ButtonTemplate.bind({});
const iconPrimarySmallCodeBody = `
<CustomButton onClick={() => {}}>
     <StarRoundedIcon />
</CustomButton>
`;
PrimarySmallIcon.parameters = {
  docs: {
    source: {
      code: iconPrimarySmallCodeBody,
    },
  },
};
PrimarySmallIcon.args = {
  variant: 'primary',
  type: 'icon',
  size: 'sm',
  children: <StarRoundedIcon />,
};

export const PrimaryLargeIcon = ButtonTemplate.bind({});
const iconPrimaryLargeCodeBody = `
<CustomButton onClick={() => {}}>
     <StarRoundedIcon />
</CustomButton>
`;
PrimaryLargeIcon.parameters = {
  docs: {
    source: {
      code: iconPrimaryLargeCodeBody,
    },
  },
};
PrimaryLargeIcon.args = {
  variant: 'primary',
  type: 'icon',
  size: 'lg',
  children: <StarRoundedIcon />,
};

export const SecondarySmall = ButtonTemplate.bind({});
SecondarySmall.args = {
  variant: 'secondary',
  size: 'sm',
  children: 'Small button',
};

export const SecondaryLarge = ButtonTemplate.bind({});
SecondaryLarge.args = {
  variant: 'secondary',
  size: 'lg',
  children: 'Large button',
};

export const SecondaryWithIcon = ButtonTemplate.bind({});
const withIconSecondaryCodeBody = `
<CustomButton
    onClick={() => {}}
    variant="secondary"
    >
<>
     <span>Button with icon</span>
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
      <span>Button with icon</span>
      <StarRoundedIcon />
    </>
  ),
};

export const SecondaryWithTwoIcons = ButtonTemplate.bind({});
const withTwoIconsSecondaryCodeBody = `
<CustomButton onClick={() => {}}>
<>
     <StarRoundedIcon />
     <span>Button with icon</span>
     <StarRoundedIcon />
<>
</CustomButton>
`;
SecondaryWithTwoIcons.parameters = {
  docs: {
    source: {
      code: withTwoIconsSecondaryCodeBody,
    },
  },
};
SecondaryWithTwoIcons.args = {
  variant: 'secondary',
  children: (
    <>
      <StarRoundedIcon />
      <span>Button with icon</span>
      <StarRoundedIcon />
    </>
  ),
};

export const SecondaryIconSmall = ButtonTemplate.bind({});
const iconSecondarySmallCodeBody = `
<CustomButton
    onClick={() => {}}
    variant="secondary"
    >
     <StarRoundedIcon />
</CustomButton>
`;
SecondaryIconSmall.parameters = {
  docs: {
    source: {
      code: iconSecondarySmallCodeBody,
    },
  },
};
SecondaryIconSmall.args = {
  variant: 'secondary',
  type: 'icon',
  size: 'sm',
  children: <StarRoundedIcon />,
};

export const SecondaryIconLarge = ButtonTemplate.bind({});
const iconSecondaryLargeCodeBody = `
<CustomButton
    onClick={() => {}}
    variant="secondary"
    >
     <StarRoundedIcon />
</CustomButton>
`;
SecondaryIconLarge.parameters = {
  docs: {
    source: {
      code: iconSecondaryLargeCodeBody,
    },
  },
};
SecondaryIconLarge.args = {
  variant: 'secondary',
  type: 'icon',
  size: 'lg',
  children: <StarRoundedIcon />,
};

export const SecondaryDisabled = ButtonTemplate.bind({});
SecondaryDisabled.args = {
  variant: 'secondary',
  disabled: true,
  children: 'Disabled button',
};

export const TertiarySmall = ButtonTemplate.bind({});
TertiarySmall.args = {
  variant: 'tertiary',
  size: 'sm',
  children: 'Basic button',
};

export const TertiaryLarge = ButtonTemplate.bind({});
TertiaryLarge.args = {
  variant: 'tertiary',
  size: 'lg',
  children: 'Basic button',
};

export const TertiaryWithIcon = ButtonTemplate.bind({});
const withIconTertiaryCodeBody = `
<CustomButton
  onClick={() => {}}
  variant="tertiary"
  >
<>
     <StarRoundedIcon />
     <span>Button with icon</span>
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
  variant: 'tertiary',
  children: (
    <>
      <StarRoundedIcon />
      <span>Button with icon</span>
    </>
  ),
};

export const TertiaryWithTwoIcons = ButtonTemplate.bind({});
const withTwoIconsTertiaryCodeBody = `
<CustomButton
  onClick={() => {}}
  variant="tertiary"
  >
<>
     <StarRoundedIcon />
     <span>Button with icon</span>
     <StarRoundedIcon />
<>
</CustomButton>
`;
TertiaryWithTwoIcons.parameters = {
  docs: {
    source: {
      code: withTwoIconsTertiaryCodeBody,
    },
  },
};
TertiaryWithTwoIcons.args = {
  variant: 'tertiary',
  children: (
    <>
      <StarRoundedIcon />
      <span>Button with icon</span>
      <StarRoundedIcon />
    </>
  ),
};

export const TertiaryIconSmall = ButtonTemplate.bind({});
const iconTertiarySmallCodeBody = `
<CustomButton
    onClick={() => {}}
    variant="tertiary"
    type="icon"
    >
     <StarRoundedIcon />
</CustomButton>
`;
TertiaryIconSmall.parameters = {
  docs: {
    source: {
      code: iconTertiarySmallCodeBody,
    },
  },
};
TertiaryIconSmall.args = {
  variant: 'tertiary',
  type: 'icon',
  children: <StarRoundedIcon />,
};

export const TertiaryIconLarge = ButtonTemplate.bind({});
const iconTertiaryLargeCodeBody = `
<CustomButton
    onClick={() => {}}
    variant="tertiary"
    type="icon"
    >
     <StarRoundedIcon />
</CustomButton>
`;
TertiaryIconLarge.parameters = {
  docs: {
    source: {
      code: iconTertiaryLargeCodeBody,
    },
  },
};
TertiaryIconLarge.args = {
  variant: 'tertiary',
  type: 'icon',
  size: 'lg',
  children: <StarRoundedIcon />,
};

export const TertiaryDisabled = ButtonTemplate.bind({});
TertiaryDisabled.args = {
  variant: 'tertiary',
  disabled: true,
  children: 'Disabled button',
};
