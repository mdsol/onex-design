import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Dropdown } from '../../../../components';

export default {
  title: 'Onex/Components/Dropdown',
  component: Dropdown,
  decorators: [(Story) => <div style={{ width: '15rem' }}>{Story()}</div>],
  argTypes: {
    align: {
      description: 'Aligns the dropdown menu to the specified side of the container',
    },
    buttonStyle: {
      description: 'Defines the dropdown display style: text or icon',
    },
    className: {
      description: 'Name of the CSS class',
      control: 'text',
    },
    dataTestId: {
      description: 'Id of the component for testing',
    },
    disabled: {
      description: 'Disables the Dropdown, preventing mouse events',
      control: 'boolean',
    },
    id: {
      description: 'An html id attribute for the Toggle button,',
      control: 'text',
    },
    items: {
      description: `Array of menu items. Each item contain:
                           \n1.title* - content of menu item;
                           \n2.hasDividerAfter - create divider after menu item;
                           \n3.active - highlight the menu item as active;
                           \n4.disabled - disable the menu item, making it unselectable;
                           \n5.eventKey - value passed to the onSelect handler, useful for identifying the selected menu item;
                           \n6.href - HTML href attribute corresponding to a.href.`,
    },
    onSelect: { action: 'select' },
    size: {
      description: 'Specifies a medium or small dropdown',
    },
    title: {
      description: 'The content of the non-toggle Button',
      control: 'text',
    },
    variant: {
      description: 'Non-toggle button variation',
    },
  },
};

const dropdownItems = [
  { eventKey: 'one', title: 'item one' },
  { eventKey: 'two', title: 'item two' },
  { eventKey: 'three', title: 'item three' },
  { eventKey: 'four', title: 'item four' },
];

const dropdownItemsWithDivider = [
  { eventKey: 'one', title: 'item one' },
  { eventKey: 'two', title: 'item two' },
  { eventKey: 'three', title: 'item three' },
  { eventKey: 'four', title: 'item four', hasDividerAfter: true },
  { eventKey: 'five', title: 'item five' },
  { eventKey: 'six', title: 'item six' },
];

const DropdownTemplate = (args) => <Dropdown {...args} />;

export const Small = DropdownTemplate.bind({});
Small.args = {
  title: 'Small dropdown',
  id: 'small-dropdown',
  items: dropdownItems,
  size: 'sm',
};

export const Medium = DropdownTemplate.bind({});
Medium.args = {
  title: 'Medium dropdown',
  id: 'medium-dropdown',
  items: dropdownItems,
  size: 'md',
};

export const PrimarySmall = DropdownTemplate.bind({});
PrimarySmall.args = {
  title: 'Label',
  id: 'primary-small-dropdown',
  items: dropdownItems,
  size: 'sm',
};

export const PrimarySmallDisabled = DropdownTemplate.bind({});
PrimarySmallDisabled.args = {
  title: 'Label',
  id: 'primary-small-disabled-dropdown',
  items: dropdownItems,
  size: 'sm',
  disabled: true,
};

export const PrimaryMedium = DropdownTemplate.bind({});
PrimaryMedium.args = {
  title: 'Label',
  id: 'primary-medium-dropdown',
  items: dropdownItems,
  size: 'md',
};

export const PrimaryMediumDisabled = DropdownTemplate.bind({});
PrimaryMediumDisabled.args = {
  title: 'Label',
  id: 'primary-medium-disabled-dropdown',
  items: dropdownItems,
  size: 'md',
  disabled: true,
};

export const PrimaryDisabled = DropdownTemplate.bind({});
PrimaryDisabled.args = {
  title: 'Disabled dropdown',
  id: 'primary-disabled-dropdown',
  items: dropdownItems,
  disabled: true,
};

export const SecondarySmall = DropdownTemplate.bind({});
SecondarySmall.args = {
  variant: 'secondary',
  title: 'Label',
  id: 'secondary-small-dropdown',
  items: dropdownItems,
  size: 'sm',
};

export const SecondarySmallDisabled = DropdownTemplate.bind({});
SecondarySmallDisabled.args = {
  variant: 'secondary',
  title: 'Label',
  id: 'secondary-small-disabled-dropdown',
  items: dropdownItems,
  size: 'sm',
  disabled: true,
};

export const SecondaryMedium = DropdownTemplate.bind({});
SecondaryMedium.args = {
  variant: 'secondary',
  title: 'Label',
  id: 'secondary-medium-dropdown',
  items: dropdownItems,
  size: 'md',
};

export const SecondaryMediumDisabled = DropdownTemplate.bind({});
SecondaryMediumDisabled.args = {
  variant: 'secondary',
  title: 'Label',
  id: 'secondary-medium-disabled-dropdown',
  items: dropdownItems,
  size: 'md',
  disabled: true,
};

export const TertiarySmall = DropdownTemplate.bind({});
TertiarySmall.args = {
  variant: 'tertiary',
  title: 'Label',
  id: 'tertiary-small-dropdown',
  items: dropdownItems,
  size: 'sm',
};

export const TertiarySmallDisabled = DropdownTemplate.bind({});
TertiarySmallDisabled.args = {
  variant: 'tertiary',
  title: 'Label',
  id: 'tertiary-small-disabled-dropdown',
  items: dropdownItems,
  size: 'sm',
  disabled: true,
};

export const TertiaryMedium = DropdownTemplate.bind({});
TertiaryMedium.args = {
  variant: 'tertiary',
  title: 'Label',
  id: 'tertiary-medium-dropdown',
  items: dropdownItems,
  size: 'md',
};

export const TertiaryMediumDisabled = DropdownTemplate.bind({});
TertiaryMediumDisabled.args = {
  variant: 'tertiary',
  title: 'Label',
  id: 'tertiary-medium-disabled-dropdown',
  items: dropdownItems,
  size: 'md',
  disabled: true,
};

export const SecondaryDefaultIcon = DropdownTemplate.bind({});
SecondaryDefaultIcon.args = {
  variant: 'secondary',
  id: 'secondary-default-icon-dropdown-sm',
  items: dropdownItems,
  size: 'sm',
  buttonStyle: 'icon',
};

export const SecondaryDefaultDisabledIcon = DropdownTemplate.bind({});
SecondaryDefaultDisabledIcon.args = {
  variant: 'secondary',
  id: 'secondary-default-icon-dropdown-sm',
  items: dropdownItems,
  size: 'sm',
  buttonStyle: 'icon',
  disabled: true,
};

export const TertiaryDefaultIcon = DropdownTemplate.bind({});
TertiaryDefaultIcon.args = {
  variant: 'tertiary',
  id: 'tertiary-default-icon-dropdown-sm',
  items: dropdownItems,
  size: 'sm',
  buttonStyle: 'icon',
};

export const TertiaryDefaultDisabledIcon = DropdownTemplate.bind({});
TertiaryDefaultDisabledIcon.args = {
  variant: 'tertiary',
  id: 'tertiary-default-icon-dropdown-sm',
  items: dropdownItems,
  size: 'sm',
  buttonStyle: 'icon',
  disabled: true,
};

export const SecondaryCustomIcon = DropdownTemplate.bind({});
const secondaryCustomIconCodeBody = `
 <CustomDropdown
    variant="secondary",
    id="secondary-custom-icon-dropdown-lg",
    items={[
      {
        eventKey: 'one',
        title: 'item one'
      },
      {
        eventKey: 'two',
        title: 'item two'
      },
      {
        eventKey: 'three',
        title: 'item three'
      },
      {
        eventKey: 'four',
        title: 'item four'
      }
    ]}
    size="md",
    buttonStyle="icon",
    title={<MoreVertIcon />}
  />
`;
SecondaryCustomIcon.parameters = {
  docs: {
    source: {
      code: secondaryCustomIconCodeBody,
    },
  },
};
SecondaryCustomIcon.args = {
  variant: 'secondary',
  id: 'secondary-custom-icon-dropdown-lg',
  items: dropdownItems,
  size: 'md',
  buttonStyle: 'icon',
  title: <MoreVertIcon />,
};

export const SecondaryCustomDisabledIcon = DropdownTemplate.bind({});
const secondaryCustomDisabledIconCodeBody = `
 <CustomDropdown
    variant="secondary",
    id="secondary-custom-icon-dropdown-lg",
    items={[
      {
        eventKey: 'one',
        title: 'item one'
      },
      {
        eventKey: 'two',
        title: 'item two'
      },
      {
        eventKey: 'three',
        title: 'item three'
      },
      {
        eventKey: 'four',
        title: 'item four'
      }
    ]}
    size="md",
    buttonStyle="icon",
    disabled=true,
    title={<MoreVertIcon />}
  />
`;
SecondaryCustomDisabledIcon.parameters = {
  docs: {
    source: {
      code: secondaryCustomDisabledIconCodeBody,
    },
  },
};
SecondaryCustomDisabledIcon.args = {
  variant: 'secondary',
  id: 'secondary-custom-icon-dropdown-sm',
  items: dropdownItems,
  size: 'md',
  buttonStyle: 'icon',
  disabled: true,
  title: <MoreVertIcon />,
};

export const TertiaryCustomIcon = DropdownTemplate.bind({});
const tertiaryCustomIconCodeBody = `
 <CustomDropdown
    buttonStyle="icon"
    id="tertiary-custom-icon-dropdown-lg"
    items={[
      {
        eventKey: 'one',
        title: 'item one'
      },
      {
        eventKey: 'two',
        title: 'item two'
      },
      {
        eventKey: 'three',
        title: 'item three'
      },
      {
        eventKey: 'four',
        title: 'item four'
      }
    ]}
    onSelect={() => {}}
    size="md"
    title={<MoreVertIcon />}
    variant="tertiary"
  />`;
TertiaryCustomIcon.parameters = {
  docs: {
    source: {
      code: tertiaryCustomIconCodeBody,
    },
  },
};

TertiaryCustomIcon.args = {
  variant: 'tertiary',
  id: 'tertiary-custom-icon-dropdown-lg',
  items: dropdownItems,
  size: 'md',
  buttonStyle: 'icon',
  title: <MoreVertIcon />,
};

export const TertiaryCustomDisabledIcon = DropdownTemplate.bind({});
const tertiaryCustomDisabledIconCodeBody = `
 <CustomDropdown
    buttonStyle="icon"
    id="tertiary-custom-icon-dropdown-lg"
    items={[
      {
        eventKey: 'one',
        title: 'item one'
      },
      {
        eventKey: 'two',
        title: 'item two'
      },
      {
        eventKey: 'three',
        title: 'item three'
      },
      {
        eventKey: 'four',
        title: 'item four'
      }
    ]}
    onSelect={() => {}}
    size="md"
    title={<MoreVertIcon />}
    variant="tertiary",
    disabled=true,
  />`;
TertiaryCustomDisabledIcon.parameters = {
  docs: {
    source: {
      code: tertiaryCustomDisabledIconCodeBody,
    },
  },
};
TertiaryCustomDisabledIcon.args = {
  variant: 'tertiary',
  id: 'tertiary-custom-icon-dropdown-sm',
  items: dropdownItems,
  size: 'md',
  buttonStyle: 'icon',
  disabled: true,
  title: <MoreVertIcon />,
};

export const WithDivider = DropdownTemplate.bind({});
WithDivider.args = {
  variant: 'primary',
  title: 'Label',
  id: 'with-divider-dropdown',
  items: dropdownItemsWithDivider,
  size: 'md',
};
