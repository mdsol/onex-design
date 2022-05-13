import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { Button } from '../../../../components';

const icons = { StarRoundedIcon: <StarRoundedIcon />, StarsRoundedIcon: <StarsRoundedIcon /> };

export default {
  title: 'Onex/Components/Button',
  component: Button,
  argTypes: {
    leadingIcon: {
      options: Object.keys(icons),
      mapping: icons,
    },
    trailingIcon: {
      options: Object.keys(icons),
      mapping: icons,
    },
    onClick: { action: 'clicked' },
  },
};

const ButtonTemplate = (args) => <Button {...args} />;

export const Small = ButtonTemplate.bind({});
Small.args = {
  variant: 'primary',
  size: 'sm',
  children: 'Small button',
};

export const Middle = ButtonTemplate.bind({});
Middle.args = {
  variant: 'primary',
  size: 'md',
  children: 'Middle button',
};

export const PrimarySmall = ButtonTemplate.bind({});
PrimarySmall.args = {
  variant: 'primary',
  size: 'sm',
  children: 'Small button',
};

export const PrimaryMiddle = ButtonTemplate.bind({});
PrimaryMiddle.args = {
  variant: 'primary',
  size: 'md',
  children: 'Middle button',
};

export const PrimaryWithLeadingIcon = ButtonTemplate.bind({});
PrimaryWithLeadingIcon.args = {
  variant: 'primary',
  leadingIcon: <StarRoundedIcon />,
  children: <span>Button with icon</span>,
};

export const PrimaryWithTrailingIcon = ButtonTemplate.bind({});
PrimaryWithTrailingIcon.args = {
  variant: 'primary',
  trailingIcon: <StarRoundedIcon />,
  children: <span>Button with icon</span>,
};

export const PrimaryWithTwoIcons = ButtonTemplate.bind({});
PrimaryWithTwoIcons.args = {
  variant: 'primary',
  size: 'sm',
  leadingIcon: <StarRoundedIcon />,
  trailingIcon: <StarRoundedIcon />,
  children: <span>Button with icon</span>,
};

export const PrimaryDisabled = ButtonTemplate.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  disabled: true,
  children: 'Disabled button',
};

export const PrimarySmallIcon = ButtonTemplate.bind({});
const iconPrimarySmallCodeBody = `
<Button onClick={() => {}}>
     <StarRoundedIcon />
</Button>
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

export const PrimaryMiddleIcon = ButtonTemplate.bind({});
const iconPrimaryMiddleCodeBody = `
<Button onClick={() => {}}>
     <StarRoundedIcon />
</Button>
`;
PrimaryMiddleIcon.parameters = {
  docs: {
    source: {
      code: iconPrimaryMiddleCodeBody,
    },
  },
};
PrimaryMiddleIcon.args = {
  variant: 'primary',
  type: 'icon',
  size: 'md',
  children: <StarRoundedIcon />,
};

export const PrimaryMiddleIconDisabled = ButtonTemplate.bind({});
PrimaryMiddleIconDisabled.parameters = {
  docs: {
    source: {
      code: iconPrimaryMiddleCodeBody,
    },
  },
};
PrimaryMiddleIconDisabled.args = {
  variant: 'primary',
  type: 'icon',
  size: 'md',
  disabled: true,
  children: <StarRoundedIcon />,
};

export const SecondarySmall = ButtonTemplate.bind({});
SecondarySmall.args = {
  variant: 'secondary',
  size: 'sm',
  children: 'Small button',
};

export const SecondaryMiddle = ButtonTemplate.bind({});
SecondaryMiddle.args = {
  variant: 'secondary',
  size: 'md',
  children: 'Middle button',
};

export const SecondaryWithLeadingIcon = ButtonTemplate.bind({});
SecondaryWithLeadingIcon.args = {
  variant: 'secondary',
  leadingIcon: <StarRoundedIcon />,
  children: (
    <>
      <span>Button with icon</span>
      <StarRoundedIcon />
    </>
  ),
};

export const SecondaryWithTrailingIcon = ButtonTemplate.bind({});
SecondaryWithTrailingIcon.args = {
  variant: 'secondary',
  trailingIcon: <StarRoundedIcon />,
  children: <span>Button with icon</span>,
};

export const SecondaryWithTwoIcons = ButtonTemplate.bind({});
SecondaryWithTwoIcons.args = {
  variant: 'secondary',
  leadingIcon: <StarRoundedIcon />,
  trailingIcon: <StarRoundedIcon />,
  children: <span>Button with icon</span>,
};

export const SecondaryIconSmall = ButtonTemplate.bind({});
const iconSecondarySmallCodeBody = `
<Button
    onClick={() => {}}
    variant="secondary"
    >
     <StarRoundedIcon />
</Button>
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

export const SecondaryIconMiddle = ButtonTemplate.bind({});
const iconSecondaryMiddleCodeBody = `
<Button
    onClick={() => {}}
    variant="secondary"
    >
     <StarRoundedIcon />
</Button>
`;
SecondaryIconMiddle.parameters = {
  docs: {
    source: {
      code: iconSecondaryMiddleCodeBody,
    },
  },
};
SecondaryIconMiddle.args = {
  variant: 'secondary',
  type: 'icon',
  size: 'md',
  children: <StarRoundedIcon />,
};

export const SecondaryIconMiddleDisabled = ButtonTemplate.bind({});
SecondaryIconMiddleDisabled.parameters = {
  docs: {
    source: {
      code: iconSecondaryMiddleCodeBody,
    },
  },
};
SecondaryIconMiddleDisabled.args = {
  variant: 'secondary',
  type: 'icon',
  size: 'md',
  disabled: true,
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

export const TertiaryMiddle = ButtonTemplate.bind({});
TertiaryMiddle.args = {
  variant: 'tertiary',
  size: 'md',
  children: 'Basic button',
};

export const TertiaryWithLeadingIcon = ButtonTemplate.bind({});

TertiaryWithLeadingIcon.args = {
  variant: 'tertiary',
  leadingIcon: <StarRoundedIcon />,
  children: <span>Button with icon</span>,
};

export const TertiaryWithTrailingIcon = ButtonTemplate.bind({});

TertiaryWithTrailingIcon.args = {
  variant: 'tertiary',
  trailingIcon: <StarRoundedIcon />,
  children: <span>Button with icon</span>,
};

export const TertiaryWithTwoIcons = ButtonTemplate.bind({});

TertiaryWithTwoIcons.args = {
  variant: 'tertiary',
  leadingIcon: <StarRoundedIcon />,
  trailingIcon: <StarRoundedIcon />,
  children: <span>Button with icon</span>,
};

export const TertiaryIconSmall = ButtonTemplate.bind({});
const iconTertiarySmallCodeBody = `
<Button
    onClick={() => {}}
    variant="tertiary"
    type="icon"
    >
     <StarRoundedIcon />
</Button>
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

export const TertiaryIconMiddle = ButtonTemplate.bind({});
const iconTertiaryMiddleCodeBody = `
<Button
    onClick={() => {}}
    variant="tertiary"
    type="icon"
    >
     <StarRoundedIcon />
</Button>
`;
TertiaryIconMiddle.parameters = {
  docs: {
    source: {
      code: iconTertiaryMiddleCodeBody,
    },
  },
};
TertiaryIconMiddle.args = {
  variant: 'tertiary',
  type: 'icon',
  size: 'md',
  children: <StarRoundedIcon />,
};

export const TertiaryIconMiddleDisabled = ButtonTemplate.bind({});
TertiaryIconMiddleDisabled.parameters = {
  docs: {
    source: {
      code: iconTertiaryMiddleCodeBody,
    },
  },
};
TertiaryIconMiddleDisabled.args = {
  variant: 'tertiary',
  type: 'icon',
  size: 'md',
  disabled: true,
  children: <StarRoundedIcon />,
};

export const TertiaryDisabled = ButtonTemplate.bind({});
TertiaryDisabled.args = {
  variant: 'tertiary',
  disabled: true,
  children: 'Disabled button',
};
