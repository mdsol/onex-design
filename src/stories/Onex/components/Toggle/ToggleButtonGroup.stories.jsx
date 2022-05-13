import { toggleButtonItems } from './data';
import { ToggleButton, ToggleButtonGroup } from '../../../../components';

export default {
  title: 'Onex/Components/Toggle/ToggleButtonGroup',
  component: ToggleButtonGroup,
  argTypes: {
    dataTestId: {
      description: 'Id of the component for testing',
      control: 'text',
    },
    defaultValue: {
      description: 'Value by default',
      control: 'number',
    },
    children: {
      description: 'The content of the component, normally ```ToggleButton```',
    },
    className: {
      description: 'Name of the CSS class',
      control: 'text',
    },
    name: {
      description:
        "An HTML ```<input>``` name for each child button. Required if type is set to 'radio'",
      control: 'text',
    },
    onChange: {
      description:
        'Callback fired when a button is pressed, depending on whether the type is ```radio``` or ```checkbox```, onChange will be called with the value or array of active values',
      action: 'change',
    },
    size: {
      description: 'Sets the size for all Buttons in the group',
    },
    type: {
      description:
        'The input type of the rendered buttons, determines the toggle behavior of the buttons',
    },
    value: {
      description: 'The value, or array of values, of the active (pressed) buttons',
      control: 'number',
    },
    variant: {
      description: 'Supports 2 variants',
    },
    vertical: {
      description: 'Make the set of Buttons appear vertically stacked',
      control: 'boolean',
    },
  },
};

export const Small = (args) => (
  <ToggleButtonGroup {...args} name="toggle-btn-group-sm" size="sm" defaultValue={1}>
    {toggleButtonItems.map(({ id, name, children, value }) => (
      <ToggleButton
        key={`togglebuttongroup-small-${id}`}
        id={`toggle-btn-group-sm-${id}`}
        name={name}
        value={value}
      >
        {children}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);

export const Large = (args) => (
  <ToggleButtonGroup {...args} name="toggle-btn-group-lg" size="lg" defaultValue={1}>
    {toggleButtonItems.map(({ id, name, children, value }) => (
      <ToggleButton
        key={`togglebuttongroup-large-${id}`}
        id={`toggle-btn-group-lg-${id}`}
        name={name}
        value={value}
      >
        {children}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);

export const Checkbox = (args) => (
  <ToggleButtonGroup
    {...args}
    name="toggle-btn-group-checkbox"
    size="sm"
    type="checkbox"
    defaultValue={[1, 3]}
  >
    {toggleButtonItems.map(({ id, name, children, value, iconWithTitle }) => (
      <ToggleButton
        key={`togglebuttongroup-checkbox-${id}`}
        id={`toggle-btn-group-checkbox-${id}`}
        name={name}
        value={value}
      >
        <>
          {iconWithTitle}
          <span>{children}</span>
        </>
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);
const checkboxCodeBody = `
<ToggleButtonGroup
  defaultValue={[1, 3 ]}
  name="toggle-btn-group-checkbox"
  onChange={() => {}}
  type="checkbox"
>
  <ToggleButton
    id="toggle-btn-group-checkbox-capt-1"
    name="capt-1"
    value={1}
  >
    <>
      <CheckCircleFill/>
      <span>
        Caption 1
      </span>
    </>
  </ToggleButton>
  <ToggleButton
    id="toggle-btn-group-checkbox-capt-2"
    name="capt-1"
    value={2}
  >
    <>
      <CheckCircleFill />
      <span>
        Caption 2
      </span>
    </>
  </ToggleButton>
  <ToggleButton
    id="toggle-btn-group-checkbox-capt-3"
    name="capt-3"
    value={3}
  >
    <>
      <CheckCircleFill />
      <span>
        Caption 3
      </span>
    </>
  </ToggleButton>
</ToggleButtonGroup>
`;
Checkbox.parameters = {
  docs: {
    source: {
      code: checkboxCodeBody,
    },
  },
};

export const Radio = (args) => (
  <ToggleButtonGroup
    {...args}
    name="toggle-btn-group-radio"
    size="sm"
    type="radio"
    defaultValue={1}
  >
    {toggleButtonItems.map(({ id, name, children, value, iconWithTitle }) => (
      <ToggleButton
        key={`togglebuttongroup-radio-${id}`}
        id={`toggle-btn-group-radio-${id}`}
        name={name}
        value={value}
      >
        <>
          {iconWithTitle}
          <span>{children}</span>
        </>
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);
const radioCodeBody = `
<ToggleButtonGroup
  defaultValue={1}
  name="toggle-btn-group-radio"
  onChange={() => {}}
>
  <ToggleButton
    id="toggle-btn-group-radio-capt-1"
    name="capt-1"
    value={1}
  >
    <>
      <CheckCircleFill />
      <span>
        Caption 1
      </span>
    </>
  </ToggleButton>
  <ToggleButton
    id="toggle-btn-group-radio-capt-2"
    name="capt-1"
    value={2}
  >
    <>
      <CheckCircleFill />
      <span>
        Caption 2
      </span>
    </>
  </ToggleButton>
  <ToggleButton
    id="toggle-btn-group-radio-capt-3"
    name="capt-3"
    value={3}
  >
    <>
      <CheckCircleFill />
      <span>
        Caption 3
      </span>
    </>
  </ToggleButton>
</ToggleButtonGroup>
`;
Radio.parameters = {
  docs: {
    source: {
      code: radioCodeBody,
    },
  },
};

export const Tab = (args) => (
  <ToggleButtonGroup {...args} name="toggle-btn-group-tab" size="sm" variant="tab" defaultValue={1}>
    {toggleButtonItems.map(({ id, name, children, value }) => (
      <ToggleButton
        key={`togglebuttongroup-tab-${id}`}
        id={`toggle-btn-group-tab-${id}`}
        name={name}
        value={value}
      >
        {children}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);

export const Button = (args) => (
  <ToggleButtonGroup
    {...args}
    name="toggle-btn-group-button"
    size="sm"
    variant="button"
    defaultValue={1}
  >
    {toggleButtonItems.map(({ id, name, children, value }) => (
      <ToggleButton
        key={`togglebuttongroup-button-${id}`}
        id={`toggle-btn-group-button-${id}`}
        name={name}
        value={value}
      >
        {children}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);

export const Vertical = (args) => (
  <ToggleButtonGroup {...args} name="toggle-btn-group-vertical" size="sm" vertical defaultValue={1}>
    {toggleButtonItems.map(({ id, name, icon, value }) => (
      <ToggleButton
        key={`togglebuttongroup-vertical-${id}`}
        id={`toggle-btn-group-vertical-${id}`}
        name={name}
        value={value}
      >
        {icon}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);
const verticalCodeBody = `
<ToggleButtonGroup
  defaultValue={1}
  name="toggle-btn-group-vertical"
  onChange={() => {}}
  vertical
>
  <ToggleButton
    id="toggle-btn-group-vertical-capt-1"
    name="capt-1"
    value={1}
  >
    <Dice4Fill />
  </ToggleButton>
  <ToggleButton
    id="toggle-btn-group-vertical-capt-2"
    name="capt-1"
    value={2}
  >
    <Dice4Fill />
  </ToggleButton>
  <ToggleButton
    id="toggle-btn-group-vertical-capt-3"
    name="capt-3"
    value={3}
  >
    <Dice4Fill />
  </ToggleButton>
</ToggleButtonGroup>
`;
Vertical.parameters = {
  docs: {
    source: {
      code: verticalCodeBody,
    },
  },
};
