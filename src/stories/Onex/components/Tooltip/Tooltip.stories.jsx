import { Tooltip, Badge,  TextField } from '../../../../components';

export default {
  title: 'Onex/Components/Tooltip',
  component: Tooltip,
  argTypes: {
    children: { control: 'object' },
    className: { control: 'text' },
    dataTestId: { control: 'text' },
    delay: { control: 'object' },
    trigger: {
      options: ['hover', 'click', 'focus'],
      control: { type: 'check' },
    },
  },
};

const Template = (props) => <Tooltip {...props} />;

// Variants start
export const Default = Template.bind({});

Default.args = {
  id: 'default-tooltip',
  tooltipChildren: 'Default tooltip',
  children: (
    <Badge type="default" variant="status-bold">
      Hover to see
    </Badge>
  ),
};

// Position start
export const Top = Template.bind({});

const tooltipeTopCode = `<Tooltip
  id="top-tooltip"
  onToggle={() => {}}
  placement="top"
  tooltipChildren="Top tooltip"
>
  <Badge
    variant="status"
    type="success"
  >
    Tooltip on top
  </Badge>
</Tooltip>`;

Top.args = {
  id: 'top-tooltip',
  tooltipChildren: 'Top tooltip',
  placement: 'top',
  children: (
    <Badge type="success" variant="status">
      Tooltip on top
    </Badge>
  ),
};

Top.decorators = [
  (Story) => (
    <div style={{ paddingTop: '50px' }}>
      <Story />
    </div>
  ),
];

Top.parameters = {
  docs: {
    source: {
      code: tooltipeTopCode,
    },
  },
};

export const Left = Template.bind({});

const tooltipLeftCode = `<Tooltip
  id="left-tooltip"
  onToggle={() => {}}
  placement="left"
  tooltipChildren="Left tooltip"
>
  <Badge
    variant="status"
    type="warning"
  >
    Tooltip on left
  </Badge>
</Tooltip>`;

Left.args = {
  id: 'left-tooltip',
  tooltipChildren: 'Left tooltip',
  placement: 'left',
  children: (
    <Badge type="warning" variant="status">
      Tooltip on left
    </Badge>
  ),
};

Left.decorators = [
  (Story) => (
    <div className="left-wrap" style={{ paddingLeft: '150px' }}>
      <Story />
    </div>
  ),
];

Left.parameters = {
  docs: {
    source: {
      code: tooltipLeftCode,
    },
  },
};

export const Bottom = Template.bind({});

Bottom.args = {
  id: 'bottom-tooltip',
  tooltipChildren: 'Bottom tooltip',
  placement: 'bottom',
  children: (
    <Badge type="default" variant="status">
      Tooltip on bottom
    </Badge>
  ),
};

export const Right = Template.bind({});

Right.args = {
  id: 'right-tooltip',
  tooltipChildren: 'Right tooltip',
  placement: 'right',
  children: (
    <Badge type="error" variant="status">
      Tooltip on right
    </Badge>
  ),
};

// Position end

// Triggered start
export const Hover = Template.bind({});

Hover.args = {
  id: 'hover-tooltip',
  tooltipChildren: 'Hover tooltip',
  children: (
    <Badge type="info" variant="status">
      Hover to see
    </Badge>
  ),
};

export const Click = Template.bind({});

Click.args = {
  id: 'click-tooltip',
  tooltipChildren: 'Click tooltip',
  trigger: 'click',
  children: (
    <Badge type="info" variant="status">
      Click to see
    </Badge>
  ),
};

export const Focus = Template.bind({});

Focus.args = {
  id: 'click-tooltip',
  tooltipChildren: 'Focus tooltip',
  trigger: 'focus',
  children: <TextField type="text" placeholder="Focus to see" />,
};
// Triggered end

// Delay start
export const ShowDelay1000ms = Template.bind({});

ShowDelay1000ms.args = {
  id: 'show-delay-tooltip',
  tooltipChildren: 'Show delay 1000ms tooltip',
  delay: {
    show: 1000,
  },
  children: (
    <Badge type="info" variant="status">
      Show delay 1000ms
    </Badge>
  ),
};

export const HideDelay2000ms = Template.bind({});

HideDelay2000ms.args = {
  id: 'hide-delay-tooltip',
  tooltipChildren: 'Hide delay 2000ms tooltip',
  delay: {
    hide: 2000,
  },
  children: (
    <Badge type="info" variant="status">
      Hide delay 2000ms
    </Badge>
  ),
};

// Delay end
