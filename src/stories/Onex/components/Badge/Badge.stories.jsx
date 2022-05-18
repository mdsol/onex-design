import { Badge, Icon } from '../../../../components';

const icons = { ArrowUp: <Icon>arrow_upward</Icon>, ArrowDown: <Icon>arrow_downward</Icon> };

export default {
  title: 'Onex/Components/Badge',
  component: Badge,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    dataTestId: { control: 'text' },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          ArrowUp: 'Up',
          ArrowDown: 'Down',
        },
      },
    },
  },
};

const Template = (props) => <Badge {...props} />;

export const CounterPrimary = Template.bind({});

CounterPrimary.args = {
  type: 'primary',
  children: '100',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CounterImportant = Template.bind({});

CounterImportant.args = {
  type: 'important',
  children: '100',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CounterDefault = Template.bind({});

CounterDefault.args = {
  type: 'default',
  children: '100',
};

export const CounterDefaultInvert = Template.bind({});

CounterDefaultInvert.args = {
  type: 'default-invert',
  children: '100',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CounterRemoved = Template.bind({});

CounterRemoved.args = {
  type: 'removed',
  children: '100-',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CounterAdded = Template.bind({});

CounterAdded.args = {
  type: 'added',
  children: '+100',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CounterIconStart = Template.bind({});

CounterIconStart.args = {
  type: 'primary',
  children: '100',
  iconStart: <span className="material-icons-round">flag</span>,
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const CounterIconEnd = Template.bind({});

CounterIconEnd.args = {
  type: 'primary',
  children: '100',
  className: 'custom-badge',
  iconEnd: <span className="material-icons-round">flag</span>,
  dataTestId: 'text-badge-id',
};

export const StatusDefault = Template.bind({});

StatusDefault.args = {
  type: 'default',
  children: 'default',
  variant: 'status',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusInfo = Template.bind({});

StatusInfo.args = {
  type: 'info',
  children: 'information',
  variant: 'status',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusWarning = Template.bind({});

StatusWarning.args = {
  type: 'warning',
  children: 'warning',
  variant: 'status',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusImportant = Template.bind({});

StatusImportant.args = {
  type: 'important',
  children: 'alert',
  variant: 'status',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusSuccess = Template.bind({});

StatusSuccess.args = {
  type: 'success',
  children: 'success',
  variant: 'status',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusBoldDefault = Template.bind({});

StatusBoldDefault.args = {
  type: 'default',
  children: 'default',
  variant: 'status-bold',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusBoldInfo = Template.bind({});

StatusBoldInfo.args = {
  type: 'info',
  children: 'information',
  variant: 'status-bold',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusBoldWarning = Template.bind({});

StatusBoldWarning.args = {
  type: 'warning',
  children: 'warning',
  variant: 'status-bold',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusBoldImportant = Template.bind({});

StatusBoldImportant.args = {
  type: 'important',
  children: 'alert',
  variant: 'status-bold',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusBoldSuccess = Template.bind({});

StatusBoldSuccess.args = {
  type: 'success',
  children: 'success',
  variant: 'status-bold',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusIconDefault = Template.bind({});

StatusIconDefault.args = {
  type: 'default',
  children: <span className="material-icons-round">flag</span>,
  variant: 'status-icon',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusIconInfo = Template.bind({});

StatusIconInfo.args = {
  type: 'info',
  children: <span className="material-icons-round">flag</span>,
  variant: 'status-icon',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusIconWarning = Template.bind({});

StatusIconWarning.args = {
  type: 'warning',
  children: <span className="material-icons-round">flag</span>,
  variant: 'status-icon',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusIconImportant = Template.bind({});

StatusIconImportant.args = {
  type: 'important',
  children: <span className="material-icons-round">flag</span>,
  variant: 'status-icon',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

export const StatusIconSuccess = Template.bind({});

StatusIconSuccess.args = {
  type: 'success',
  children: <span className="material-icons-round">flag</span>,
  variant: 'status-icon',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};
