import { useState, useEffect } from 'react';
import { Tabs, Badge } from './components';
import './scss/platform.scss';
import ViewComponents from './view-components';
import { CameraFillIcon } from './icons';

const DevExamples = () => (
  <div className="p-5">
    <div>
      <Badge type="default" variant="status">
        Default
      </Badge>
      <Badge type="info" variant="status">
        Information
      </Badge>
      <Badge type="important" variant="status">
        Error
      </Badge>
      <Badge type="success" variant="status">
        Success
      </Badge>
      <Badge type="warning" variant="status">
        Worning
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
