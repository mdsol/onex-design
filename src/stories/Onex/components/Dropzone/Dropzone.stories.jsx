import { Dropzone } from '../../../../components';

const DropzoneTemplate = (args) => <Dropzone {...args} />;

export default {
  title: 'Onex/Components/Dropzone',
  component: Dropzone,
};

export const Default = DropzoneTemplate.bind({});
