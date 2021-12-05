import Toast from '../components/Toast';

export default {
    title: 'Components/Toast',
    component: Toast,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Toast {...args}>NEW</Toast>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    autohide: false,
    message: 'TESTING',
    show: true,
};
