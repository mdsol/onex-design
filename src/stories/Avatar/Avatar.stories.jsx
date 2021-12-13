import { BugFill } from 'react-bootstrap-icons';
import { Avatar } from '../../components';
import AvatarDocumentation from './Avatar.stories.mdx';

export default {
    title: 'Components/Avatar',
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
            control: 'text',
        },
        src: {
            description: 'The url of a remote image or an image object',
            control: 'text',
        },
        hoverDisabled: {
            description: 'Disables the avatar hover',
        },
    },
    parameters: {
        docs: {
            page: AvatarDocumentation,
        },
    },
};

const AvatarTemplate = (args) => <Avatar {...args} />;

export const Default = AvatarTemplate.bind({});

export const Initials = AvatarTemplate.bind({});
Initials.args = {
    children: 'KK',
};

export const Name = AvatarTemplate.bind({});
Name.args = {
    name: 'Test User',
};

export const Image = AvatarTemplate.bind({});
Image.args = {
    src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
};

export const Icon = AvatarTemplate.bind({});

const iconSourceBody = `
<Avatar> 
    <BugFill />
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
    children: <BugFill />,
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

export const ExtraLarge = AvatarTemplate.bind({});
ExtraLarge.args = {
    src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
    size: 'xl',
};

export const ExtraExtraLarge = AvatarTemplate.bind({});
ExtraExtraLarge.args = {
    src: 'https://robohash.org/my-own-slug.png?size=300x300&set=set1',
    size: 'xxl',
};
