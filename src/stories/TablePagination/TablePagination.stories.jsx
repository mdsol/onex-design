import { TablePagination } from '../../components';
import TablePaginationMDX from './TablePagination.stories.mdx';

export default {
    title: 'Components/TablePagination',
    component: TablePagination,
    argTypes: {
        className: { control: 'text' },
        dataTestId: { control: 'text' },
        rows: 100,
        rowsDividers: [5, 10, 20, 25, 50],
        defaultRowsPerPage: 10,
        size: 'lg',
    },
    parameters: {
        docs: {
            page: TablePaginationMDX,
        },
    },
};

const Template = (props) => <TablePagination {...props} />;

export const Small = Template.bind({});

Small.args = {
    size: 'sm',
    className: 'tablePagination',
    dataTestId: 'tablePagination-id',
    rowsDividers: [5, 10, 20, 25, 50],
    defaultRowsPerPage: 10,
    rows: 100,
};

export const Large = Template.bind({});

Large.args = {
    size: 'lg',
    className: 'tablePagination',
    dataTestId: 'tablePagination',
    rowsDividers: [5, 10, 20, 25, 50],
    defaultRowsPerPage: 10,
    rows: 100,
};
