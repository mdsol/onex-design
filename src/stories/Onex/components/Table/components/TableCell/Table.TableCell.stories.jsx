import { Table, TableBody, TableRow, TableCell, TableHead } from '../../../../../../components';
import TableCellDocumentation from './Table.TableCell.stories.mdx';

export default {
    title: 'Onex/Components/Table/TableCell',
    component: TableCell,
    argTypes: {
        align: {
            description: 'Set the text-align on the table cell content',
        },
        children: {
            description: 'The content of the component',
        },
        className: {
            description: 'Name of the CSS class',
            control: 'text',
        },
        component: {
            description: 'The component used for the root node',
            control: 'text',
        },
        dataTestId: {
            description: 'Id of the component for testing',
            control: 'text',
        },
        variant: {
            description:
                'Specify the cell type. The prop defaults to the value inherited from the parent TableHead or TableBody components.',
        },
        width: {
            description: 'Specify the cell width',
        },
    },
    parameters: {
        docs: {
            page: TableCellDocumentation,
        },
    },
};

export const Body = (args) => (
    <Table>
        <TableBody>
            <TableRow>
                <TableCell {...args}>Table cell body</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export const Header = (args) => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell {...args}>Table cell header</TableCell>
            </TableRow>
        </TableHead>
    </Table>
);
