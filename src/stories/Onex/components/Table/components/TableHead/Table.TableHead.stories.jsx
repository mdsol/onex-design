import { ExclamationDiamondFill } from 'react-bootstrap-icons';
import { Table, TableHead, TableRow, TableCell, Check } from '../../../../../../components';
import TableHeadDocumentation from './Table.TableHead.stories.mdx';

export default {
  title: 'Onex/Components/Table/TableHead',
  component: TableHead,
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
  parameters: {
    docs: {
      page: TableHeadDocumentation,
    },
  },
};

export const Default = (args) => (
  <Table>
    <TableHead {...args}>
      <TableRow>
        <TableCell align="center" width="60px">
          <Check id="header-check" size="sm" onChange={() => {}} />
        </TableCell>
        <TableCell width="50%">Study name</TableCell>
        <TableCell>Study short name</TableCell>
        <TableCell>Phase</TableCell>
        <TableCell align="center" width="60px">
          <ExclamationDiamondFill />
        </TableCell>
      </TableRow>
    </TableHead>
  </Table>
);

const tableHeadSourceBody = `
<CustomTable>
        <TableHead>
            <TableRow>
                <TableCell align="center" width="60px">
                    <Check
                        id="header-check"
                        size="sm"
                        onChange={() => {}}
                    />
                </TableCell>
                <TableCell width="50%">Study name</TableCell>
                <TableCell>Study short name</TableCell>
                <TableCell>Phase</TableCell>
                <TableCell align="center" width="60px">
                    <ExclamationDiamondFill />
                </TableCell>
            </TableRow>
        </TableHead>
    </CustomTable>
`;
Default.parameters = {
  docs: {
    source: {
      code: tableHeadSourceBody,
    },
  },
};
