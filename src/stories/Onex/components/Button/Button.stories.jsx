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

export const PrimaryLargeIconDisabled = ButtonTemplate.bind({});
PrimaryLargeIconDisabled.parameters = {
  docs: {
    source: {
      code: iconPrimaryLargeCodeBody,
    },
  },
};
PrimaryLargeIconDisabled.args = {
  variant: 'primary',
  type: 'icon',
  size: 'lg',
  disabled: true,
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

export const SecondaryIconLargeDisabled = ButtonTemplate.bind({});
SecondaryIconLargeDisabled.parameters = {
  docs: {
    source: {
      code: iconSecondaryLargeCodeBody,
    },
  },
};
SecondaryIconLargeDisabled.args = {
  variant: 'secondary',
  type: 'icon',
  size: 'lg',
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

export const TertiaryLarge = ButtonTemplate.bind({});
TertiaryLarge.args = {
  variant: 'tertiary',
  size: 'lg',
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

export const TertiaryIconLargeDisabled = ButtonTemplate.bind({});
TertiaryIconLargeDisabled.parameters = {
  docs: {
    source: {
      code: iconTertiaryLargeCodeBody,
    },
  },
};
TertiaryIconLargeDisabled.args = {
  variant: 'tertiary',
  type: 'icon',
  size: 'lg',
  disabled: true,
  children: <StarRoundedIcon />,
};

export const TertiaryDisabled = ButtonTemplate.bind({});
TertiaryDisabled.args = {
  variant: 'tertiary',
  disabled: true,
  children: 'Disabled button',
};
