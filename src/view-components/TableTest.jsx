import {
  Avatar,
  Icon,
  Badge,
  Check,
  TextField,
  TableControl,
  TableName,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  DataTableCell,
  Table,
} from '../components';

const TableTest = () => (
  <Table
    tableStyle="filled"
    hover
    tableControlComponent={
      <TableControl>
        <TableName badgeNumber="100">Test table</TableName>
        <TextField controlId="search" placeholder="search" showDefaultIcon />
      </TableControl>
    }
  >
    <TableHead>
      <TableRow>
        <TableCell align="center" width="60px">
          <Check id="header-check" size="sm" />
        </TableCell>
        <TableCell width="50%">Study name</TableCell>
        <TableCell>Study short name</TableCell>
        <TableCell>Phase</TableCell>
        <TableCell align="center" width="60px">
          <Icon>priority_high</Icon>
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell align="center">
          <Check id="check-1" size="sm" />
        </TableCell>
        <TableCell>
          <Avatar src="https://robohash.org/my-own-slug.png?size=300x300&set=set1" size="md" />
          Clinical and Radiological Evaluation of Patients With Vertebrobasilar Insufficiency
        </TableCell>
        <TableCell>Sinus pressure study</TableCell>
        <TableCell>
          <Badge size="sm" type="default">
            19
          </Badge>
        </TableCell>
        <TableCell align="center">
          <Icon>priority_high</Icon>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">
          <Check id="check-2" size="sm" />
        </TableCell>
        <TableCell>
          <DataTableCell
            img={
              <Avatar src="https://robohash.org/my-own-slug.png?size=300x300&set=set1" size="md" />
            }
            subTitle="Vertebrobasilar Insufficiency"
          >
            Clinical and Radiological Evaluation of Patients With
          </DataTableCell>
        </TableCell>
        <TableCell>Sinus pressure study</TableCell>
        <TableCell>
          <Badge size="sm" type="default">
            8
          </Badge>
        </TableCell>
        <TableCell align="center">
          <Icon>priority_high</Icon>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default TableTest;
