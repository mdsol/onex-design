import { Table, TableCell, TableHead, TableRow, TableBody } from '../../../../../../components';

export default {
  title: 'Onex/Components/Table/TableRow',
  component: TableRow,
  argTypes: {
    children: {
      description: 'The content of the component',
    },
    className: {
      description: 'Name of the CSS class',
      control: 'text',
    },
    dataTestId: {
      description: 'Id of the component for testing',
      control: 'text',
    },
    hover: {
      description: 'If ```true```, the table row will shade on hover',
      control: 'boolean',
    },
    selected: {
      description: 'If ```true```, the table row will have the selected shading',
      control: 'boolean',
    },
    variant: {
      description: 'Automatically set variant based on the table element parent (head, body, etc)',
    },
  },
};

export const Body = (args) => (
  <Table>
    <TableBody>
      <TableRow {...args}>
        <TableCell width="50%">Table row body</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Header = (args) => (
  <Table>
    <TableHead>
      <TableRow {...args}>
        <TableCell width="50%">Table row header</TableCell>
      </TableRow>
    </TableHead>
  </Table>
);
