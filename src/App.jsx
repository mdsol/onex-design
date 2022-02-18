import { Badge, Button } from 'react-bootstrap';
import { Badge as SoloBadge, Button as SoloButton } from './components';
import './scss/platform.scss';
import { StyledAvatar, StyledBadge, StyledButtons } from './styled';

const props = {
  type: 'important',
  size: 'sm',
  children: '100',
  className: 'custom-badge',
  dataTestId: 'text-badge-id',
};

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
    <p>
      <StyledAvatar />
    </p>
    <p>
      <StyledBadge {...props} />
    </p>
  </div>
);

export default App;
