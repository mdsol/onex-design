import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { Dropdown } from '../../../../components';
import DropdownDocumentation from './Dropdown.stories.mdx';

export default {
    title: 'Onex/Components/Dropdown',
    component: Dropdown,
    decorators: [(Story) => <div style={{ width: '12rem' }}>{Story()}</div>],
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
            description: 'Specifies a large or small dropdown',
        },
        title: {
            description: 'The content of the non-toggle Button',
            control: 'text',
        },
        variant: {
            description: 'Non-toggle button variation',
        },
    },
    parameters: {
        docs: {
            page: DropdownDocumentation,
        },
    },
};

const dropdownItems = [
    { eventKey: 'one', title: 'item one' },
    { eventKey: 'two', title: 'item two' },
    { eventKey: 'three', title: 'item three' },
    { eventKey: 'four', title: 'item four' },
];

const DropdownTemplate = (args) => <Dropdown {...args} />;

export const Small = DropdownTemplate.bind({});
Small.args = {
    title: 'Small dropdown',
    id: 'small-dropdown',
    items: dropdownItems,
    size: 'sm',
};

export const Large = DropdownTemplate.bind({});
Large.args = {
    title: 'Large dropdown',
    id: 'large-dropdown',
    items: dropdownItems,
    size: 'lg',
};

export const Primary = DropdownTemplate.bind({});
Primary.args = {
    title: 'Primary dropdown',
    id: 'primary-dropdown',
    items: dropdownItems,
};

export const PrimaryDisabled = DropdownTemplate.bind({});
PrimaryDisabled.args = {
    title: 'Disabled dropdown',
    id: 'primary-disabled-dropdown',
    items: dropdownItems,
    disabled: true,
};

export const PrimaryIcon = DropdownTemplate.bind({});
const withIconPrimaryCodeBody = `
 <CustomDropdown
    buttonStyle="icon"
    id="primary-icon-dropdown"
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
    title={<ThreeDotsVertical />}
  />
`;
PrimaryIcon.parameters = {
    docs: {
        source: {
            code: withIconPrimaryCodeBody,
        },
    },
};
PrimaryIcon.args = {
    title: <ThreeDotsVertical />,
    id: 'primary-icon-dropdown',
    items: dropdownItems,
    buttonStyle: 'icon',
};

export const Secondary = DropdownTemplate.bind({});
Secondary.args = {
    variant: 'secondary',
    title: 'Secondary dropdown',
    id: 'secondary-dropdown',
    items: dropdownItems,
};

export const SecondaryDisabled = DropdownTemplate.bind({});
SecondaryDisabled.args = {
    variant: 'secondary',
    title: 'Disabled dropdown',
    id: 'secondary-disabled-dropdown',
    items: dropdownItems,
    disabled: true,
};

export const SecondaryIcon = DropdownTemplate.bind({});
const withIconSecondaryCodeBody = `
 <CustomDropdown
    variant="secondary"
    buttonStyle="icon"
    id="secondary-icon-dropdown"
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
    title={<ThreeDotsVertical />}
  />
`;
SecondaryIcon.parameters = {
    docs: {
        source: {
            code: withIconSecondaryCodeBody,
        },
    },
};
SecondaryIcon.args = {
    variant: 'secondary',
    title: <ThreeDotsVertical />,
    id: 'secondary-icon-dropdown',
    items: dropdownItems,
    buttonStyle: 'icon',
};

export const Tertiary = DropdownTemplate.bind({});
Tertiary.args = {
    variant: 'link',
    title: 'Tertiary dropdown',
    id: 'tertiary-dropdown',
    items: dropdownItems,
};

export const TertiaryDisabled = DropdownTemplate.bind({});
TertiaryDisabled.args = {
    variant: 'link',
    title: 'Disabled dropdown',
    id: 'tertiary-disabled-dropdown',
    items: dropdownItems,
    disabled: true,
};

export const TertiaryIcon = DropdownTemplate.bind({});
const withIconTertiaryCodeBody = `
 <CustomDropdown
    variant="icon-link"
    buttonStyle="icon"
    id="tertiary-icon-dropdown"
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
    title={<ThreeDotsVertical />}
  />
`;
TertiaryIcon.parameters = {
    docs: {
        source: {
            code: withIconTertiaryCodeBody,
        },
    },
};
TertiaryIcon.args = {
    variant: 'icon-link',
    title: <ThreeDotsVertical />,
    id: 'tertiary-icon-dropdown',
    items: dropdownItems,
    buttonStyle: 'icon',
};

export const AlignStart = DropdownTemplate.bind({});
AlignStart.args = {
    title: 'Align start',
    id: 'align-start-dropdown',
    items: dropdownItems,
    align: 'start',
    size: 'lg',
};

export const AlignEnd = DropdownTemplate.bind({});
AlignEnd.args = {
    title: 'Dropdown align end',
    id: 'align-end-dropdown',
    items: dropdownItems,
    align: 'end',
    size: 'lg',
};
