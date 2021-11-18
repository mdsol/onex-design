import Banner from '../components/Banner';

export default {
    title: 'Components/Banner',
    component: Banner,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Banner {...args}>NEW</Banner>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    autohide: false,
    message: 'TESTING',
    show: true,
};
