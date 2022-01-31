import { Col, Container, Row } from 'react-bootstrap';

export default {
  title: 'Colors',
};

const mainColors = ['medidata', 'primary', 'secondary'];
const textColors = ['primary', 'secondary', 'disabled'];
const backgroundColors = ['primary', 'secondary', 'tertiary', 'border'];
const brandBgColors = ['primary', 'secondary', 'tertiary'];
const statusColors = ['success', 'warning', 'error'];
const graphColors = [
  'navy-blue',
  'genoa',
  'dodger-blue',
  'lavender',
  'apricot',
  'casablanca',
  'ripe-lemon',
  'jagged-ice',
  'border',
  'light-border',
];

// eslint-disable-next-line react/prop-types
const Swatch = ({ group, name }) => (
  <Col xs="6" md="3" lg="2" className="text-center">
    <h5 className="mb-2">{name}</h5>
    <div
      className="ratio ratio-1x1"
      style={{
        backgroundColor: `var(--${group}-${name})`,
      }}
    />
    <h6 className="mt-2 mb-1">{`var(--${group}-${name})`}</h6>
    <h6>{getComputedStyle(document.documentElement).getPropertyValue(`--${group}-${name}`)}</h6>
  </Col>
);

export const Colors = () => (
  <Container>
    <Row>
      <Col>
        <h1>Colors</h1>
        <p>All colors listed below are set as CSS variables set on the :root element.</p>
        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">
            Read more
          </a>{' '}
          about how to use CSS variables.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Main</h4>
      </Col>
    </Row>
    <Row>
      {mainColors.map((colorName) => (
        <Swatch group="main" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Text</h4>
      </Col>
    </Row>
    <Row>
      {textColors.map((colorName) => (
        <Swatch group="text" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Background</h4>
      </Col>
    </Row>
    <Row>
      {backgroundColors.map((colorName) => (
        <Swatch group="background" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Brand Background</h4>
      </Col>
    </Row>
    <Row>
      {brandBgColors.map((colorName) => (
        <Swatch group="brand-bg" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Status</h4>
      </Col>
    </Row>
    <Row>
      {statusColors.map((colorName) => (
        <Swatch group="status" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Status Text</h4>
      </Col>
    </Row>
    <Row>
      {statusColors.map((colorName) => (
        <Swatch group="status-text" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Status Background</h4>
      </Col>
    </Row>
    <Row>
      {statusColors.map((colorName) => (
        <Swatch group="status-bg" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Graph</h4>
      </Col>
    </Row>
    <Row>
      {graphColors.map((colorName) => (
        <Swatch group="graph" name={colorName} />
      ))}
    </Row>
  </Container>
);
