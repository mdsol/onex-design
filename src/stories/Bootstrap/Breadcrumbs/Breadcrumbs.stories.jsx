import { Breadcrumb } from '../../../components';

export default {
  title: 'Bootstrap/Components/Breadcrumbs',
  component: Breadcrumb,
};

export const Example = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
      Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
  </Breadcrumb>
);
