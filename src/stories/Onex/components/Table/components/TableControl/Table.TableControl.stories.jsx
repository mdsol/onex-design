import { TableName, TextField, TableControl } from '../../../../../../components';
import TableControlDocumentation from './Table.TableControl.stories.mdx';

export default {
    title: 'Onex/Components/Table/TableControl',
    component: TableControl,
    argTypes: {
        children: {
            description:
                'The content of the component, normally ```TableName``` and ```TextField```',
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
            page: TableControlDocumentation,
        },
    },
};

export const Default = (args) => (
    <TableControl {...args}>
        <TableName badgeNumber="100">Test table</TableName>
        <TextField controlId="search" placeholder="search" onChange={() => {}} showDefaultIcon />
    </TableControl>
);
