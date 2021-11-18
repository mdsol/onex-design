import Badge from '../components/Badge';

export default {
    title: 'Components/Badge',
    component: Badge,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Badge {...args}>NEW</Badge>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    type: 'primary',
    size: 'lg',
};
