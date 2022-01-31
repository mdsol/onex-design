import { useState, useEffect } from 'react';
import { Container, Row, Col, FloatingLabel, Form, Alert } from 'react-bootstrap';
import * as BsIcons from 'react-bootstrap-icons';
import iconSynonyms from './icons';

export default {
  title: 'Icons',
};

// eslint-disable-next-line react/prop-types
const Icon = ({ iconName }) => {
  const Dynamic = BsIcons[iconName];
  return <Dynamic size="40" />;
};

const allIcons = Object.keys(BsIcons);

export const Icons = () => {
  const [displayIcons, setDisplayIcons] = useState(allIcons);
  const [search, setSearch] = useState();

  useEffect(() => {
    let matchingIcons = allIcons;
    if (search) {
      matchingIcons = Object.keys(iconSynonyms).filter(
        (key) => iconSynonyms[key].indexOf(search) > -1,
      );
    }
    setDisplayIcons(matchingIcons);
  }, [search]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Icons</h1>
          <p>Bootstrap Icons only https://icons.getbootstrap.com/.</p>
          <p>If using React, https://github.com/ismamz/react-bootstrap-icons</p>
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
          <li className="col mb-4 text-center">
            <div
              className="p-3 py-4 mb-2 bg-light text-center rounded"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <Icon iconName={iconName} />
            </div>
            <small>{iconName}</small>
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
