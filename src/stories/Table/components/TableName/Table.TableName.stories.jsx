import { TableName } from '../../../../components';
import TableNameDocumentation from './Table.TableName.stories.mdx';

export default {
    title: 'Components/Table/TableName',
    component: TableName,
    argTypes: {
        badgeNumber: {
            description: 'The content of the Badge component',
            control: 'text',
        },
        children: {
            description: 'The content of the component',
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
    },
    parameters: {
        docs: {
            page: TableNameDocumentation,
        },
    },
};

const TableNameTemplate = (args) => <TableName {...args} />;

export const Default = TableNameTemplate.bind({});
Default.args = {
    badgeNumber: '100',
    children: 'Test table',
};
