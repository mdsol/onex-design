import { useState, useEffect } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { Tabs, Badge, Check } from './components';
import './scss/platform.scss';
import ViewComponents from './view-components';

const DevExamples = () => (
  <div className="p-5">
    <div>
      <Check type="radio" />
    </div>
    <div>
      <Badge type="primary" variant="counter">
        100
      </Badge>
    </div>
    <div>
      <Badge type="important" variant="status">
        Important
      </Badge>
    </div>
    <div>
      <Badge type="success" variant="status-bold">
        Success
      </Badge>
    </div>
    <div>
      <Badge type="added" variant="counter">
        <LockIcon />
        Test
      </Badge>
    </div>
  </div>
);

const TabItems = [
  { title: 'Dev mode', eventKey: 'devMode' },
  { title: 'Test mode', eventKey: 'testMode' },
];

const App = () => {
  const [currentTab, setCurrentTab] = useState('testMode');

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
