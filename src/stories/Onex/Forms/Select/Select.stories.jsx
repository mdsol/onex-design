import { Select } from '../../../../components';
import SelectMDX from './Select.stories.mdx';

export default {
    title: 'Onex/Forms/Select',
    component: Select,
    argTypes: {
        className: { control: 'text' },
        dataTestId: { control: 'text' },
        options: [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ],
        size: 'lg',
        isMulti: true,
        isDisabled: false,
        isInvalid: false,
        errorMessage: undefined,
        selectedValues: [],
        isAsync: false,
    },
    parameters: {
        docs: {
            page: SelectMDX,
        },
    },
};

const Template = (props) => <Select {...props} />;

export const Small = Template.bind({});

Small.args = {
    size: 'sm',
    className: 'select',
    dataTestId: 'select',
    options: [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ],
    isMulti: true,
};

export const Large = Template.bind({});

Large.args = {
    size: 'lg',
    className: 'select',
    dataTestId: 'select',
    options: [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ],
    isMulti: true,
};
