import { useState, useEffect } from 'react';
import { Tabs, Badge } from './components';
import './scss/platform.scss';
import ViewComponents from './view-components';
import { CameraFillIcon } from './icons';

const DevExamples = () => (
  <div className="p-5">
    <div>
      <Badge iconStart={<CameraFillIcon />} type="default" variant="counter">
        100
      </Badge>
      <Badge iconStart={<CameraFillIcon />} type="primary" variant="counter">
        100
      </Badge>
      <Badge iconStart={<CameraFillIcon />} type="important" variant="counter">
        100
      </Badge>
      <Badge iconStart={<CameraFillIcon />} type="removed" variant="counter">
        100
      </Badge>
      <Badge iconStart={<CameraFillIcon />} type="added" variant="counter">
        100
      </Badge>
      <Badge type="default-invert" variant="counter" iconEnd={<CameraFillIcon />}>
        100
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
