import { Badge, Button } from 'react-bootstrap';
import { Badge as SoloBadge, Button as SoloButton } from './components';
import './scss/platform.scss';
import { StyledButtons } from './Styled';

const App = () => (
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
  </div>
);

export default App;
