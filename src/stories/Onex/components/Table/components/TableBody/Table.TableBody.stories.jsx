import { ExclamationDiamondFill } from 'react-bootstrap-icons';
import { Table, TableBody, TableRow, TableCell, Badge } from '../../../../../../components';

export default {
  title: 'Onex/Components/Table/TableBody',
  component: TableBody,
  argTypes: {
    children: {
      description: 'The content of the component, normally ```TableRow``` with ```TableCells```',
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
};

export const Default = (args) => (
  <Table>
    <TableBody {...args}>
      <TableRow>
        <TableCell>Sinus pressure study</TableCell>
        <TableCell>
          <Badge size="sm" type="default">
            19
          </Badge>
        </TableCell>
        <TableCell align="center">
          <ExclamationDiamondFill />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
