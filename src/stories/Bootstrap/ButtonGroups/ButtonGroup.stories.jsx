import { ButtonGroup, Button, Dropdown, ButtonToolbar } from '../../../components';

export default {
  title: 'Bootstrap/Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    as: {
      description: 'You can use a custom element type for this component.',
      table: {
        defaultValue: {
          summary: '<div>',
        },
        type: {
          summary: 'elementType',
        },
      },
    },
    role: {
      control: 'text',
      description:
        'An ARIA role describing the button group. Usually the default "group" role is fine. An `aria-label` or `aria-labelledby` prop is also recommended.',
      table: {
        defaultValue: {
          summary: 'group',
        },
        type: {
          summary: 'string',
        },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'lg', undefined],
      description: 'Sets the size for all Buttons in the group.',
      table: {
        defaultValue: {
          summary: undefined,
        },
        type: {
          summary: "'sm' | 'lg' | 'undefined'",
        },
      },
    },
    vertical: {
      control: 'boolean',
      description: 'Make the set of Buttons appear vertically stacked.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
};

export const ToolbarButton = (props) => (
  <ButtonToolbar aria-label="Toolbar with button groups">
    <ButtonGroup {...props} className="me-2" aria-label="First group">
      <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
    </ButtonGroup>
    <ButtonGroup {...props} className="me-2" aria-label="Second group">
      <Button>5</Button> <Button>6</Button> <Button>7</Button>
    </ButtonGroup>
    <ButtonGroup {...props} aria-label="Third group">
      <Button>8</Button>
    </ButtonGroup>
  </ButtonToolbar>
);

export const Size = (props) => (
  <>
    <ButtonGroup {...props} size="lg" className="mb-2">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    <br />
    <ButtonGroup {...props} className="mb-2">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    <br />
    <ButtonGroup {...props} size="sm">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </>
);

const dropdownItems = [
  { eventKey: 'one', title: 'Dropdown link' },
  { eventKey: 'two', title: 'Dropdown link' },
];

export const Nesting = (props) => (
  <ButtonGroup {...props}>
    <Button>1</Button>
    <Button>2</Button>

    <Dropdown as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown" items={dropdownItems} />
  </ButtonGroup>
);

export const Vertical = () => (
  <ButtonGroup vertical>
    <Button>Button</Button>
    <Button>Button</Button>

    <Dropdown as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown" items={dropdownItems} />
  </ButtonGroup>
);
