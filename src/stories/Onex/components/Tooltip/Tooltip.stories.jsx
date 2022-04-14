import { Tooltip, Lozenge, TextField } from '../../../../components';

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
    <Lozenge type="default" size="lg">
      Hover to see
    </Lozenge>
  ),
};

// Position start
export const Top = Template.bind({});

const tooltipeTopCode = `<CustomTooltip
  id="top-tooltip"
  onToggle={() => {}}
  placement="top"
  tooltipChildren="Top tooltip"
>
  <Lozenge
    size="lg"
    type="success"
  >
    Tooltip on top
  </Lozenge>
</CustomTooltip>`;

Top.args = {
  id: 'top-tooltip',
  tooltipChildren: 'Top tooltip',
  placement: 'top',
  children: (
    <Lozenge type="success" size="lg">
      Tooltip on top
    </Lozenge>
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

const tooltipLeftCode = `<CustomTooltip
  id="left-tooltip"
  onToggle={() => {}}
  placement="left"
  tooltipChildren="Left tooltip"
>
  <Lozenge
    size="lg"
    type="warning"
  >
    Tooltip on left
  </Lozenge>
</CustomTooltip>`;

Left.args = {
  id: 'left-tooltip',
  tooltipChildren: 'Left tooltip',
  placement: 'left',
  children: (
    <Lozenge type="warning" size="lg">
      Tooltip on left
    </Lozenge>
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
    <Lozenge type="default" size="lg">
      Tooltip on bottom
    </Lozenge>
  ),
};

export const Right = Template.bind({});

Right.args = {
  id: 'right-tooltip',
  tooltipChildren: 'Right tooltip',
  placement: 'right',
  children: (
    <Lozenge type="error" size="lg">
      Tooltip on right
    </Lozenge>
  ),
};

// Position end

// Triggered start
export const Hover = Template.bind({});

Hover.args = {
  id: 'hover-tooltip',
  tooltipChildren: 'Hover tooltip',
  children: (
    <Lozenge type="info" size="lg">
      Hover to see
    </Lozenge>
  ),
};

export const Click = Template.bind({});

Click.args = {
  id: 'click-tooltip',
  tooltipChildren: 'Click tooltip',
  trigger: 'click',
  children: (
    <Lozenge type="info" size="lg">
      Click to see
    </Lozenge>
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
    <Lozenge type="info" size="lg">
      Show delay 1000ms
    </Lozenge>
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
    <Lozenge type="info" size="lg">
      Hide delay 2000ms
    </Lozenge>
  ),
};

// Delay end
