import { Button, Icon, Dropdown, Badge, Tag } from '../../../../components';

export const dropdownItems = [
  { eventKey: 'one', title: 'Option 1' },
  { eventKey: 'two', title: 'Option 2' },
  { eventKey: 'three', title: 'Option 3' },
];

export const demoGridColumns = [
  {
    Header: 'Study Id',
    accessor: 'studyId',
  },
  {
    Header: 'Study Name',
    accessor: 'studyName',
    type: 'custom',
  },
  {
    Header: 'Stage',
    accessor: 'stage',
    type: 'custom',
  },
  {
    Header: 'Status',
    accessor: 'status',
    type: 'custom',
  },
  {
    Header: 'Phase',
    accessor: 'phase',
  },
  {
    accessor: 'action',
    Header: (
      <Button variant="tertiary" type="icon">
        <Icon>settings</Icon>
      </Button>
    ),
    Cell: ({ row }) => (
      <Dropdown variant="tertiary" buttonStyle="icon" align="end" items={dropdownItems} />
    ),
    type: 'action',
  },
];

export const demoGridData = () =>
  Array.from({ length: 20 }, (v, i) => ({
    studyId: `A19580${i}`,
    studyName: { value: `Study name ${i}`, leadingIcon: <Icon>check_circle</Icon> },
    stage: {
      component: (
        <Badge type="default" variant="status">
          Stage {i}
        </Badge>
      ),
    },
    status: {
      component: (
        <Badge type="default" variant="status">
          Status {i}
        </Badge>
      ),
    },
    phase: i,
  }));

export const demoCellGridColumns = [
  {
    Header: 'Study Id',
    accessor: 'studyId',
  },
  {
    Header: 'Study Name',
    accessor: 'studyName',
    type: 'custom',
  },
  {
    Header: 'Stage',
    accessor: 'stage',
    type: 'custom',
  },
  {
    Header: 'Status',
    accessor: 'status',
    type: 'editable',
  },
  {
    Header: 'Phase',
    accessor: 'phase',
  },
  {
    accessor: 'action',
    Header: (
      <Button variant="tertiary" type="icon">
        <Icon>settings</Icon>
      </Button>
    ),
    Cell: ({ row }) => (
      <Dropdown variant="tertiary" buttonStyle="icon" align="end" items={dropdownItems} />
    ),
    type: 'action',
  },
];

export const demoCellGridData = [
  {
    studyId: 'A195800',
    studyName: {
      value: 'Study name 1',
      leadingIcon: <Icon>check_circle</Icon>,
      trailingIcon: <Icon>info</Icon>,
    },
    stage: {
      component: <Tag>Stage 1</Tag>,
    },
    status: 'Status 1',
    phase: 1,
  },
  {
    studyId: 'A195801',
    studyName: {
      value: 'Study name 2',
      leadingIcon: <Icon>check_circle</Icon>,
      trailingIcon: <Icon>info</Icon>,
    },
    stage: {
      component: <Tag>Stage 2</Tag>,
    },
    status: 'Status 2',
    phase: 2,
  },
  {
    studyId: 'A195802',
    studyName: {
      value: 'Study name 3',
      leadingIcon: <Icon>check_circle</Icon>,
      trailingIcon: <Icon>info</Icon>,
    },
    stage: {
      component: <Tag>Stage 3</Tag>,
    },
    status: 'Status 3',
    phase: 3,
  },
  {
    studyId: 'A195803',
    studyName: {
      value: 'Study name 4',
      leadingIcon: <Icon>check_circle</Icon>,
      trailingIcon: <Icon>info</Icon>,
    },
    stage: {
      component: <Tag>Stage 4</Tag>,
    },
    status: 'Status 4',
    phase: 4,
  },
  {
    studyId: 'A195804',
    studyName: {
      value: 'Study name 5',
      leadingIcon: <Icon>check_circle</Icon>,
      trailingIcon: <Icon>info</Icon>,
    },
    stage: {
      component: <Tag>Stage 5</Tag>,
    },
    status: 'Status 5',
    phase: 5,
  },
];

export const gridColumns = [
  {
    Header: 'Study Id',
    accessor: 'studyId',
    hasDivider: true,
  },
  {
    Header: 'Study Name',
    accessor: 'studyName',
  },
  {
    Header: 'Stage',
    accessor: 'stage',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];

export const gridData = [
  {
    studyId: 'A195800',
    studyName: 'Study name 1',
    stage: 'Stage 1',
    status: 'Status 1',
  },
  {
    studyId: 'A195801',
    studyName: 'Study name 2',
    stage: 'Stage 2',
    status: 'Status 2',
  },
  {
    studyId: 'A195802',
    studyName: 'Study name 3',
    stage: 'Stage 2',
    status: 'Status 3',
  },
  {
    studyId: 'A195803',
    studyName: 'Study name 4',
    stage: 'Stage 4',
    status: 'Status 4',
  },
  {
    studyId: 'A195804',
    studyName: 'Study name 5',
    stage: 'Stage 5',
    status: 'Status 5',
  },
];

export const gridCustomHeaderColumns = [
  ...gridColumns,
  {
    Header: (
      <Button variant="tertiary" type="icon">
        <Icon>settings</Icon>
      </Button>
    ),
    accessor: 'action',
    type: 'action',
    hasDivider: true,
  },
];
