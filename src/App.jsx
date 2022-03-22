import { useState, useEffect } from 'react';
import { Tabs, Check } from './components';
import './scss/platform.scss';
import ViewComponents from './view-components';

const DevExamples = () => (
  <div className="p-5">
    <div>
      <Check id="check-id" type="radio" checked disabled>
        Test label text
      </Check>
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
