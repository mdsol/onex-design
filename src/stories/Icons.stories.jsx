import * as MuiIcons from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Alert, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import iconSynonyms from './icons';

export default {
  title: 'Icons',
};

// eslint-disable-next-line react/prop-types
const Icon = ({ iconName }) => {
  const Dynamic = MuiIcons[iconName];
  return <Dynamic size="40" />;
};

const allIcons = Object.keys(MuiIcons);

export const Icons = () => {
  const [displayIcons, setDisplayIcons] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    let matchingIcons = [];
    if (search) {
      matchingIcons = Object.keys(MuiIcons).filter(
        (key) => iconSynonyms[key] && iconSynonyms[key].indexOf(search) > -1,
      );
    }
    setDisplayIcons(matchingIcons.length ? matchingIcons : allIcons);
  }, [search]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Icons</h1>
          <p>
            The entire icon set from Material Icons is approved for use. Icons are not provided in
            1x, you will need to install the necessary libraries:
          </p>
          <code>yarn add @mui/material @mui/icons-material</code>
        </Col>
      </Row>
      <Row>
        <Col>
          <FloatingLabel controlId="floatingInput" label="Search Icons" className="mb-3">
            <Form.Control
              type="search"
              placeholder="Search Icons"
              onKeyUp={(e) => setSearch(e.target.value.trim())}
              onChange={(e) => setSearch(e.target.value.trim())}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <ul className="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list">
        {displayIcons.map((iconName) => (
          <li key={iconName} className="col mb-4 text-center">
            <div
              className="p-3 py-4 mb-2 bg-light text-center rounded"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <Icon iconName={iconName} />
            </div>
            <small style={{ wordWrap: 'break-word' }}>{iconName}</small>
          </li>
        ))}
      </ul>
      {displayIcons.length === 0 ? (
        <Alert variant="light" style={{ backgroundColor: 'var(--background-secondary)' }}>
          No icons found matching <strong>{search}</strong>
        </Alert>
      ) : null}
    </Container>
  );
};
