import { BugFill, BinocularsFill } from 'react-bootstrap-icons';
import {
  DataTableCell,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Avatar,
} from '../../../../../../components';

const icons = { Bug: <BugFill />, Binoculars: <BinocularsFill /> };

export default {
  title: 'Onex/Components/Table/TableCell/DataTableCell',
  component: DataTableCell,
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
    icon: {
      description: 'Icon element',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          ArrowUp: 'Up',
          ArrowDown: 'Down',
        },
      },
    },
    iconPosition: {
      description: 'Icon positioning relative to other elements',
      control: 'text',
    },
    img: {
      description: 'Img element, could be ```<Avatar>```',
    },
    subTitle: {
      description: 'Caption displayed at the bottom',
      control: 'text',
    },
  },
};

export const Default = (args) => (
  <Table>
    <TableBody>
      <TableRow>
        <TableCell>
          <DataTableCell
            {...args}
            img={
              <Avatar
                src="https://robohash.org/my-own-slug.png?size=300x300&set=set1"
                size="md"
                hoverDisabled
              />
            }
            subTitle="Vertebrobasilar Insufficiency"
          >
            Clinical and Radiological Evaluation of Patients With
          </DataTableCell>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
