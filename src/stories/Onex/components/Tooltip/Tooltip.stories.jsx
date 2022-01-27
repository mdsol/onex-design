import { Tooltip, Lozenge, TextField } from '../../../../components';

import TooltipMDX from './Tooltip.stories.mdx';

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
  parameters: {
    docs: {
      page: TooltipMDX,
    },
  },
};

const Template = (props) => <Tooltip {...props} />;

// Variants start
export const Default = Template.bind({});

Default.args = {
  id: 'default-tooltip',
  variant: 'default',
  tooltipChildren: 'Default tooltip',
  children: (
    <Lozenge type="default" size="lg">
      Hover to see
    </Lozenge>
  ),
};

export const Success = Template.bind({});

Success.args = {
  id: 'success-tooltip',
  variant: 'success',
  tooltipChildren: 'Success tooltip',
  children: (
    <Lozenge type="success" size="lg">
      Hover to see
    </Lozenge>
  ),
};

export const Warning = Template.bind({});

Warning.args = {
  id: 'warning-tooltip',
  variant: 'warning',
  tooltipChildren: 'Warning tooltip',
  children: (
    <Lozenge type="warning" size="lg">
      Hover to see
    </Lozenge>
  ),
};

export const Error = Template.bind({});

Error.args = {
  id: 'error-tooltip',
  variant: 'error',
  tooltipChildren: 'Error tooltip',
  children: (
    <Lozenge type="error" size="lg">
      Hover to see
    </Lozenge>
  ),
};

export const Info = Template.bind({});

Info.args = {
  id: 'info-tooltip',
  variant: 'info',
  tooltipChildren: 'Info tooltip',
  children: (
    <Lozenge type="info" size="lg">
      Hover to see
    </Lozenge>
  ),
};

export const Regular = Template.bind({});

Regular.args = {
  id: 'regular-tooltip',
  variant: 'info',
  tooltipChildren: 'Regular tooltip',
  hasArrow: false,
  children: (
    <Lozenge type="info" size="lg">
      Hover to see
    </Lozenge>
  ),
};

// Variants end

// Position start
export const Top = Template.bind({});

const tooltipeTopCode = `<CustomTooltip
  id="top-tooltip"
  onToggle={() => {}}
  placement="top"
  tooltipChildren="Top tooltip"
  variant="success"
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
  variant: 'success',
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
  variant="warning"
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
  variant: 'warning',
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
  variant: 'default',
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
  variant: 'error',
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
  variant: 'info',
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
  variant: 'info',
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
  variant: 'info',
  tooltipChildren: 'Focus tooltip',
  trigger: 'focus',
  children: <TextField type="text" placeholder="Focus to see" />,
};
// Triggered end

// Delay start
export const ShowDelay1000ms = Template.bind({});

ShowDelay1000ms.args = {
  id: 'show-delay-tooltip',
  variant: 'info',
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
  variant: 'info',
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
