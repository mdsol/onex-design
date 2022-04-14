import {
  CircleFill,
  Check,
  ExclamationDiamondFill,
  ExclamationLg,
  InfoLg,
} from 'react-bootstrap-icons';
import { Lozenge } from '../../../../components';

export default {
  title: 'Onex/Components/Lozenge',
  component: Lozenge,
  argTypes: {
    children: {
      description: 'The content of the component.',
      control: 'text',
    },
    className: {
      description: 'Name of the CSS class',
      control: 'text',
    },
    dataTestId: {
      description: 'Id of the component for testing',
      control: 'text',
    },
    icon: {
      description: 'Element placed before the children.',
    },
    size: {
      description: 'Specifies a large or small lozenge',
    },
    type: {
      description: 'Types of lozenges',
    },
    variant: {
      description: 'Lozenge variation',
    },
  },
};

const LozengeTemplate = (args) => <Lozenge {...args} />;

export const Small = LozengeTemplate.bind({});
Small.args = {
  variant: 'subtle',
  size: 'sm',
  children: 'Default',
};

export const Large = LozengeTemplate.bind({});
Large.args = {
  variant: 'subtle',
  size: 'lg',
  children: 'Default',
};

export const Subtle = LozengeTemplate.bind({});
Subtle.args = {
  variant: 'subtle',
  size: 'lg',
  children: 'Default',
};

export const Bold = LozengeTemplate.bind({});
Bold.args = {
  variant: 'bold',
  size: 'lg',
  children: 'Default',
};

export const Icon = LozengeTemplate.bind({});
const iconSourceBody = `
<Lozenge
  icon={<CircleFill />}
  size="lg"
  variant="icon"
>
  Default
</Lozenge>
`;
Icon.parameters = {
  docs: {
    source: {
      code: iconSourceBody,
    },
  },
};
Icon.args = {
  variant: 'icon',
  size: 'lg',
  children: 'Default',
  icon: <CircleFill />,
};

export const DefaultSubtle = LozengeTemplate.bind({});
DefaultSubtle.args = {
  variant: 'subtle',
  type: 'default',
  size: 'lg',
  children: 'Default',
};

export const DefaultBold = LozengeTemplate.bind({});
DefaultBold.args = {
  variant: 'bold',
  type: 'default',
  size: 'lg',
  children: 'Default',
};

export const DefaultIcon = LozengeTemplate.bind({});
const defaultIconSourceBody = `
<Lozenge
  variant="icon"
  type="default"
  icon={<CircleFill />}
  size="lg"
>
  Default
</Lozenge>
`;
DefaultIcon.parameters = {
  docs: {
    source: {
      code: defaultIconSourceBody,
    },
  },
};
DefaultIcon.args = {
  variant: 'icon',
  type: 'default',
  icon: <CircleFill />,
  size: 'lg',
  children: 'Default',
};

export const SuccessSubtle = LozengeTemplate.bind({});
SuccessSubtle.args = {
  variant: 'subtle',
  type: 'success',
  size: 'lg',
  children: 'Success',
};

export const SuccessBold = LozengeTemplate.bind({});
SuccessBold.args = {
  variant: 'bold',
  type: 'success',
  size: 'lg',
  children: 'Success',
};

export const SuccessIcon = LozengeTemplate.bind({});
const successIconSourceBody = `
<Lozenge
  variant="icon"
  type="success"
  icon={<Check />}
  size="lg"
>
  Success
</Lozenge>
`;
SuccessIcon.parameters = {
  docs: {
    source: {
      code: successIconSourceBody,
    },
  },
};
SuccessIcon.args = {
  variant: 'icon',
  type: 'success',
  icon: <Check />,
  size: 'lg',
  children: 'Success',
};

export const WarningSubtle = LozengeTemplate.bind({});
WarningSubtle.args = {
  variant: 'subtle',
  type: 'warning',
  size: 'lg',
  children: 'Warning',
};

export const WarningBold = LozengeTemplate.bind({});
WarningBold.args = {
  variant: 'bold',
  type: 'warning',
  size: 'lg',
  children: 'Warning',
};

export const WarningIcon = LozengeTemplate.bind({});
const warningIconSourceBody = `
<Lozenge
  variant="icon"
  type="warning"
  icon={<ExclamationDiamondFill />}
  size="lg"
>
  Warning
</Lozenge>
`;
WarningIcon.parameters = {
  docs: {
    source: {
      code: warningIconSourceBody,
    },
  },
};
WarningIcon.args = {
  variant: 'icon',
  type: 'warning',
  icon: <ExclamationDiamondFill />,
  size: 'lg',
  children: 'Warning',
};

export const ErrorSubtle = LozengeTemplate.bind({});
ErrorSubtle.args = {
  variant: 'subtle',
  type: 'error',
  size: 'lg',
  children: 'Error',
};

export const ErrorBold = LozengeTemplate.bind({});
ErrorBold.args = {
  variant: 'bold',
  type: 'error',
  size: 'lg',
  children: 'Error',
};

export const ErrorIcon = LozengeTemplate.bind({});
const errorIconSourceBody = `
<Lozenge
  variant="icon"
  type="error"
  icon={<ExclamationLg />}
  size="lg"
>
  Error
</Lozenge>
`;
ErrorIcon.parameters = {
  docs: {
    source: {
      code: errorIconSourceBody,
    },
  },
};
ErrorIcon.args = {
  variant: 'icon',
  type: 'error',
  icon: <ExclamationLg />,
  size: 'lg',
  children: 'Error',
};

export const InfoSubtle = LozengeTemplate.bind({});
InfoSubtle.args = {
  variant: 'subtle',
  type: 'info',
  size: 'lg',
  children: 'Info',
};

export const InfoBold = LozengeTemplate.bind({});
InfoBold.args = {
  variant: 'bold',
  type: 'info',
  size: 'lg',
  children: 'Info',
};

export const InfoIcon = LozengeTemplate.bind({});
const infoIconSourceBody = `
<Lozenge
  variant="icon"
  type="info"
  icon={<InfoLg />}
  size="lg"
>
  Info
</Lozenge>
`;
InfoIcon.parameters = {
  docs: {
    source: {
      code: infoIconSourceBody,
    },
  },
};
InfoIcon.args = {
  variant: 'icon',
  type: 'info',
  icon: <InfoLg />,
  size: 'lg',
  children: 'Info',
};
