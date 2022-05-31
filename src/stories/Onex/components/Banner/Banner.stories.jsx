import { Banner } from '../../../../components';

export default {
  title: 'Onex/Components/Banner',
  component: Banner,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    dataTestId: { control: 'text' },
  },
};

const Template = (props) => <Banner {...props} />;

export const Info = Template.bind({});

Info.args = {
  variant: 'info',
  children: (
    <>
      We’re making changes to our server and Data Center products, including the end of sale for new
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      server licenses on. <a href="#">Learn more</a>
    </>
  ),
  dataTestId: 'banner-info',
};

export const Error = Template.bind({});

Error.args = {
  variant: 'error',
  children: (
    <>
      We’re making changes to our server and Data Center products, including the end of sale for new
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      server licenses on. <a href="#">Learn more</a>
    </>
  ),
  dataTestId: 'banner-warning',
};

export const Warning = Template.bind({});

Warning.args = {
  variant: 'warning',
  children: (
    <>
      We’re making changes to our server and Data Center products, including the end of sale for new
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      server licenses on. <a href="#">Learn more</a>
    </>
  ),
  dataTestId: 'banner-warning',
};
