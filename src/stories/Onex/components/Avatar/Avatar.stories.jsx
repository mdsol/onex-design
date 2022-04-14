import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';
import { Avatar } from '../../../../components';

const AvatarTemplate = (args) => <Avatar {...args} />;

export default {
  title: 'Onex/Components/Avatar',
  component: Avatar,
  argTypes: {
    className: {
      description: 'Name of the CSS class',
      control: 'text',
    },
    size: {
      description: 'Size of the avatar',
    },
    name: {
      description: 'Will be used to generate avatar based on the initials of the person',
      control: 'text',
    },
    children: {
      description:
        'Used to render icon or text elements inside the Avatar. This can be an element, or just a string',
    },
    src: {
      description: 'The url of a remote image or an image object',
      control: 'text',
    },
    hoverDisabled: {
      description:
        'Disables the avatar hover, for size ```xs``` and ```sm``` hover disabled automatically',
    },
    dataTestId: {
      description: 'Id of the component for testing',
    },
    onClick: {
      description: 'Callback fired when click on component',
    },
  },
};

export const Default = AvatarTemplate.bind({});

export const Image = AvatarTemplate.bind({});
Image.args = {
  src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
};

export const Icon = AvatarTemplate.bind({});

const iconSourceBody = `
<Avatar>
    <BugReportRoundedIcon />
</Avatar>
`;

Icon.parameters = {
  docs: {
    source: {
      code: iconSourceBody,
    },
  },
};
Icon.args = {
  children: <BugReportRoundedIcon />,
};

export const ExtraSmall = AvatarTemplate.bind({});
ExtraSmall.args = {
  src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
  size: 'xs',
};

export const Small = AvatarTemplate.bind({});
Small.args = {
  src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
  size: 'sm',
};

export const Medium = AvatarTemplate.bind({});
Medium.args = {
  src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
  size: 'md',
};

export const Large = AvatarTemplate.bind({});
Large.args = {
  src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
  size: 'lg',
};
