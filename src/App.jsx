import { useState, useEffect, useMemo } from 'react';
import { Tabs, Check, DataGrid, Modal, Button } from './components';
import './scss/platform.scss';
import ViewComponents from './view-components';

const dataGridColumns = [
  {
    Header: 'Hospital',
    columns: [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Study',
        accessor: 'study',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Created',
        accessor: 'created',
      },
    ],
  },
];

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => ({
  id: 'M123',
  study: `United States${Math.floor(Math.random() * 30)}`,
  country: `United States${Math.floor(Math.random() * 1000)}`,
  category: 'Management',
  created: '26 Aug 2020',
});

const makeData = (...lens) => {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => ({
      ...newPerson(),
      subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
    }));
  };

  return makeDataLevel();
};

const DevExamples = () => {
  const [show, setShow] = useState(false);
  const dataGridData = useMemo(() => makeData(30), []);

  const handleModalPrimaryAction = () => setShow(false);
  const handleModalSecondaryAction = () => setShow(false);

  return (
    <div className="p-5">
      <div>
        <Check id="check-id" type="radio" checked disabled>
          Test label text
        </Check>
        <br />
        <br />
        <DataGrid columns={dataGridColumns} data={dataGridData} rowsDividers={[10, 20, 30]} />
        <br />
        <Button variant="primary" onClick={() => setShow(true)}>
          Launch demo modal
        </Button>
        <Modal
          show={show}
          handleClose={() => setShow(false)}
          onSecondaryClick={handleModalSecondaryAction}
          onPrimaryClick={handleModalPrimaryAction}
          secondaryActionName="Secondary Action"
          primaryActionName="Save Changes"
          size="lg"
          showFooter={false}
        >
          Woohoo, youre reading this text in a modal!
        </Modal>
      </div>
    </div>
  );
};

const TabItems = [
  { title: 'Dev mode', eventKey: 'devMode' },
  { title: 'Test mode', eventKey: 'testMode' },
];

const App = () => {
  const [currentTab, setCurrentTab] = useState('devMode');

  useEffect(() => {
    if (currentTab === 'devMode') {
      window.history.pushState('', '', window.location.origin);
    }
  }, [currentTab]);

  return (
    <div style={{ padding: '50px' }}>
      <Tabs size="lg" visibleItems={TabItems} onSelect={setCurrentTab} activeKey={currentTab} />
      {currentTab === 'devMode' && <DevExamples />}
      {currentTab === 'testMode' && <ViewComponents />}
    </div>
  );
};

export default App;
