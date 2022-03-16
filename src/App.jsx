import { useState, useEffect } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { Badge as SoloBadge, Button as SoloButton, Tabs } from './components';
import './scss/platform.scss';
import { StyledAvatar, StyledBadge, StyledButtons } from './components/styledComponents';
import ViewComponents from './view-components';

const props = {
  type: 'important',
  size: 'sm',
  children: '100',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

const DevExamples = () => (
  <div className="p-5">
    <h2>Global CSS</h2>
    <p>
      <Button size="sm">Bootstrap Button</Button>
    </p>
    <p>
      <SoloButton>Onex Button</SoloButton>
    </p>
    <p>
      <Badge>10</Badge>
    </p>
    <p>
      <SoloBadge type="primary">10</SoloBadge>
    </p>
    <h2>Scoped CSS</h2>
    <p>
      <StyledButtons>Button</StyledButtons>
    </p>
    <p>
      <StyledAvatar />
    </p>
    <p>
      <StyledBadge {...props} />
    </p>
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
