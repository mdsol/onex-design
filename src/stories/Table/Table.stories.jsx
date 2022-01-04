import { ExclamationDiamondFill } from 'react-bootstrap-icons';
import {
    Table,
    TableControl,
    TableName,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    DataTableCell,
    TextField,
    Avatar,
    Badge,
    Check,
} from '../../components';
import TableMDX from './Table.stories.mdx';

export default {
    title: 'Components/Table/Table',
    component: Table,
    argTypes: {
        bordered: {
            description: 'Adds borders on all sides of the table and cells',
        },
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
            description: 'Enable a hover state on table rows within a ```<tbody>```',
        },
        striped: {
            description: 'Adds zebra-striping to any table row within the ```<tbody>```',
        },
        tableControlComponent: {
            description: 'Control component, normally ```TableControl```',
        },
        tableStyle: {
            description: 'Defines the table display style: filled or default',
        },
    },
    parameters: {
        docs: {
            page: TableMDX,
        },
    },
};

export const Default = (args) => (
    <Table
        {...args}
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
        <TableBody>
            <TableRow>
                <TableCell align="center">
                    <Check id="check-1" size="sm" onChange={() => {}} />
                </TableCell>
                <TableCell>
                    <Avatar
                        src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                        size="md"
                    />
                    Clinical and Radiological Evaluation of Patients With Vertebrobasilar
                    Insufficiency
                </TableCell>
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
            <TableRow>
                <TableCell align="center">
                    <Check id="check-2" size="sm" onChange={() => {}} />
                </TableCell>
                <TableCell>
                    <DataTableCell
                        img={
                            <Avatar
                                src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                                size="md"
                            />
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
                    <ExclamationDiamondFill />
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

const tableSourceBody = `
 <CustomTable
        {...args}
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
        <TableBody>
            <TableRow>
                <TableCell align="center">
                    <Check id="check-1" size="sm" onChange={() => {}} />
                </TableCell>
                <TableCell>
                    <Avatar
                        src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                        size="md"
                    />
                    Clinical and Radiological Evaluation of Patients With Vertebrobasilar
                    Insufficiency
                </TableCell>
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
            <TableRow>
                <TableCell align="center">
                    <Check id="check-2" size="sm" onChange={() => {}} />
                </TableCell>
                <TableCell>
                    <DataTableCell
                        img={
                            <Avatar
                                src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                                size="md"
                            />
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
                    <ExclamationDiamondFill />
                </TableCell>
            </TableRow>
        </TableBody>
    </CustomTable>
`;
Default.parameters = {
    docs: {
        source: {
            code: tableSourceBody,
        },
    },
};
