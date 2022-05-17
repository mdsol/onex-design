import { Col, Container, Row } from 'react-bootstrap';

export default {
  title: 'Colors',
};

const basicColors = ['white', 'black', 'accent'];
const primaryColors = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const secondaryColors = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const successColors = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const warningColors = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const errorColors = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
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
        <h4>Basic</h4>
      </Col>
    </Row>
    <Row>
      {basicColors.map((colorName) => (
        <Swatch group="basic" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Primary</h4>
      </Col>
    </Row>
    <Row>
      {primaryColors.map((colorName) => (
        <Swatch group="primary" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Neutral</h4>
      </Col>
    </Row>
    <Row>
      {secondaryColors.map((colorName) => (
        <Swatch group="secondary" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Positive</h4>
      </Col>
    </Row>
    <Row>
      {successColors.map((colorName) => (
        <Swatch group="success" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Warning</h4>
      </Col>
    </Row>
    <Row>
      {warningColors.map((colorName) => (
        <Swatch group="warning" name={colorName} />
      ))}
    </Row>
    <Row>
      <Col>
        <h4>Error</h4>
      </Col>
    </Row>
    <Row>
      {errorColors.map((colorName) => (
        <Swatch group="error" name={colorName} />
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
