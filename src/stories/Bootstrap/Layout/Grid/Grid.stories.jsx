import { Container, Row, Col } from '../../../../components';
import GridDocumentation from './Grid.stories.mdx';

import { containerArgTypes, columnArgTypes, rowArgTypes } from './data';

export default {
  title: 'Bootstrap/Layout/Grid',
  component: Container,
  parameters: {
    docs: {
      page: GridDocumentation,
    },
  },
};

export const GridContainer = (args) => (
  <Container {...args}>
    <Row className="bg-light border">
      <Col>1 of 1</Col>
    </Row>
  </Container>
);

GridContainer.argTypes = containerArgTypes;

export const FluidContainer = (args) => (
  <Container {...args}>
    <Row className="bg-light border">
      <Col>1 of 1</Col>
    </Row>
  </Container>
);

FluidContainer.args = {
  fluid: true,
};

FluidContainer.argTypes = containerArgTypes;

export const FluidContainerWithProp = (args) => (
  <Container {...args}>
    <Row className="bg-light border">
      <Col>1 of 1</Col>
    </Row>
  </Container>
);

FluidContainerWithProp.args = {
  fluid: 'md',
};

FluidContainerWithProp.argTypes = containerArgTypes;

export const AutoLayoutColumn = (args) => (
  <Container>
    <Row>
      <Col {...args} className="bg-light border">
        1 of 2
      </Col>
      <Col {...args} className="bg-light border">
        2 of 2
      </Col>
    </Row>
    <Row>
      <Col {...args} className="bg-light border">
        1 of 3
      </Col>
      <Col {...args} className="bg-light border">
        2 of 3
      </Col>
      <Col {...args} className="bg-light border">
        3 of 3
      </Col>
    </Row>
  </Container>
);

AutoLayoutColumn.argTypes = columnArgTypes;

export const OneColumnWidth = (args) => (
  <Container>
    <Row>
      <Col className="bg-light border">1 of 3</Col>
      <Col {...args} className="bg-light border">
        2 of 3 (wider)
      </Col>
      <Col className="bg-light border">3 of 3</Col>
    </Row>
  </Container>
);

OneColumnWidth.args = {
  xs: '5',
};

OneColumnWidth.argTypes = columnArgTypes;

export const VariableWidthContent = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col className="bg-light border" xs lg="2">
        1 of 3
      </Col>
      <Col className="bg-light border" md="auto">
        Variable width content
      </Col>
      <Col className="bg-light border" xs lg="2">
        3 of 3
      </Col>
    </Row>
    <Row>
      <Col className="bg-light border">1 of 3</Col>
      <Col className="bg-light border" md="auto">
        Variable width content
      </Col>
      <Col className="bg-light border" xs lg="2">
        3 of 3
      </Col>
    </Row>
  </Container>
);

export const ResponsiveGrid = () => (
  <Container>
    <Row>
      <Col className="bg-light border" sm={8}>
        sm=8
      </Col>
      <Col className="bg-light border" sm={4}>
        sm=4
      </Col>
    </Row>
    <Row>
      <Col className="bg-light border" sm>
        sm=true
      </Col>
      <Col className="bg-light border" sm>
        sm=true
      </Col>
      <Col className="bg-light border" sm>
        sm=true
      </Col>
    </Row>
  </Container>
);

export const ResponsiveGridWithBreakpoints = () => (
  <Container>
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <Row>
      <Col className="bg-light border" xs={12} md={8}>
        xs=12 md=8
      </Col>
      <Col className="bg-light border" xs={6} md={4}>
        xs=6 md=4
      </Col>
    </Row>

    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
    <Row>
      <Col className="bg-light border" xs={6} md={4}>
        xs=6 md=4
      </Col>
      <Col className="bg-light border" xs={6} md={4}>
        xs=6 md=4
      </Col>
      <Col className="bg-light border" xs={6} md={4}>
        xs=6 md=4
      </Col>
    </Row>

    {/* Columns are always 50% wide, on mobile and desktop */}
    <Row>
      <Col className="bg-light border" xs={6}>
        xs=6
      </Col>
      <Col className="bg-light border" xs={6}>
        xs=6
      </Col>
    </Row>
  </Container>
);

export const ResponsiveGridWithOrderFirstVariant = () => (
  <Container>
    <Row>
      <Col className="bg-light border" xs>
        First, but unordered
      </Col>
      <Col className="bg-light border" xs={{ order: 12 }}>
        Second, but last
      </Col>
      <Col className="bg-light border" xs={{ order: 1 }}>
        Third, but second
      </Col>
    </Row>
  </Container>
);

export const ResponsiveGridWithOrderSecondVariant = () => (
  <Container>
    <Row>
      <Col className="bg-light border" xs={{ order: 'last' }}>
        First, but last
      </Col>
      <Col className="bg-light border" xs>
        Second, but unordered
      </Col>
      <Col className="bg-light border" xs={{ order: 'first' }}>
        Third, but first
      </Col>
    </Row>
  </Container>
);

export const ResponsiveGridWithOffset = () => (
  <Container>
    <Row>
      <Col className="bg-light border" md={4}>
        md=4
      </Col>
      <Col
        className="bg-light border"
        md={{ span: 4, offset: 4 }}
      >{`md={{ span: 4, offset: 4 }}`}</Col>
    </Row>
    <Row>
      <Col
        className="bg-light border"
        md={{ span: 3, offset: 3 }}
      >{`md={{ span: 3, offset: 3 }}`}</Col>
      <Col
        className="bg-light border"
        md={{ span: 3, offset: 3 }}
      >{`md={{ span: 3, offset: 3 }}`}</Col>
    </Row>
    <Row>
      <Col
        className="bg-light border"
        md={{ span: 6, offset: 3 }}
      >{`md={{ span: 6, offset: 3 }}`}</Col>
    </Row>
  </Container>
);

export const ColumnWidthInRow = (args) => (
  <Container>
    <Row {...args}>
      <Col className="bg-light border">1 of 2</Col>
      <Col className="bg-light border">2 of 2</Col>
    </Row>
    <Row xs={1} md={2}>
      <Col className="bg-light border">1 of 3</Col>
      <Col className="bg-light border">2 of 3</Col>
      <Col className="bg-light border">3 of 3</Col>
    </Row>
    <Row xs="auto">
      <Col className="bg-light border">1 of 3</Col>
      <Col className="bg-light border">2 of 3</Col>
      <Col className="bg-light border">3 of 3</Col>
    </Row>
  </Container>
);

ColumnWidthInRow.args = {
  xs: '2',
  md: '5',
  lg: '6',
};

ColumnWidthInRow.argTypes = rowArgTypes;

export const ColumnWidthInRowOverride = (args) => (
  <Container>
    <Row {...args}>
      <Col className="bg-light border">1 of 3</Col>
      <Col className="bg-light border" xs={6}>
        2 of 3
      </Col>
      <Col className="bg-light border">3 of 3</Col>
    </Row>
  </Container>
);

ColumnWidthInRowOverride.args = {
  md: '4',
};

ColumnWidthInRowOverride.argTypes = rowArgTypes;
