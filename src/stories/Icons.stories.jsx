import { useEffect, useState } from 'react';
import { Alert, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import googleIconsName from './icons';
import { Icon } from '../components';

export default {
  title: 'Icons',
};

const allIcons = Object.keys(googleIconsName);

export const Icons = () => {
  const [displayIcons, setDisplayIcons] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    let matchingIcons = [];
    if (search) {
      matchingIcons = allIcons.filter((key) => key && key.indexOf(search) > -1);
    }
    setDisplayIcons(matchingIcons.length ? matchingIcons : allIcons);
  }, [search]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Icons</h1>
          <p>
            The entire icon set from Google Material Icons is approved for use. You can use several
            approaches for installing icons:
          </p>
          <p>
            <ol>
              <li>
                <p>
                  <b>as font&apos;s package:</b>{' '}
                  <code>yarn add @material-design-icons/font@latest</code>
                  <p>
                    after it you can import icons on different ways:
                    <ul>
                      <li>
                        import js: <code>import '@material-design-icons/font'</code>
                      </li>
                      <li>
                        import css: <code>@import '@material-design-icons/font''</code>
                      </li>
                      <li>
                        import html:{' '}
                        <code>
                          &lt;link href="/path/to/@material-design-icons/font/index.css"
                          rel="stylesheet" /&gt;
                        </code>
                      </li>
                    </ul>
                  </p>
                  To display an icon, use one of the following:
                  <ul>
                    <li>
                      filled: <code>&lt;span className="material-icons"&gt;face&lt;/span&gt;</code>
                    </li>
                    <li>
                      outlined:{' '}
                      <code>&lt;span className="material-icons-outlined"&gt;face&lt;/span&gt;</code>
                    </li>
                    <li>
                      round:{' '}
                      <code>&lt;span className="material-icons-round"&gt;face&lt;/span&gt;</code>
                    </li>
                    <li>
                      sharp:{' '}
                      <code>&lt;span className="material-icons-sharp"&gt;face&lt;/span&gt;</code>
                    </li>
                    <li>
                      two tone:{' '}
                      <code>&lt;span className="material-icons-two-tone"&gt;face&lt;/span&gt;</code>
                    </li>
                  </ul>
                </p>
              </li>
              <li>
                <b>as icons&apos;s package:</b> <code>@material-design-icons/svg@latest</code>
                <p>
                  Material icons are available in five styles—filled, outlined, round, sharp and
                  two-tone. SVGs for each icon are located in the corresponding style directory:
                  <code>@material-design-icons/svg/&#123;style&#125;/&#123;icon&#125;.svg</code>
                </p>
                <p>
                  For example, SVGs for <b>face</b> icon are located at:
                  <br />
                  <code>
                    @material-design-icons/svg/filled/face.svg
                    @material-design-icons/svg/outlined/face.svg
                    @material-design-icons/svg/round/face.svg
                    @material-design-icons/svg/sharp/face.svg
                    @material-design-icons/svg/two-tone/face.svg
                  </code>
                </p>
                <p>
                  You can use @svgr/webpack to import SVGs as React components: <br />
                  <code>import Face from '@material-design-icons/svg/filled/face.svg';</code>
                </p>
              </li>
              <li>
                <b>using as font:</b> <code>@material-design-icons/svg@latest</code>
                <p>
                  The font and variable font folders contain pre-generated font files that can be
                  included in a project. This is especially convenient for the web; however, it is
                  generally better to link to the web font hosted on Google Fonts:
                  <ul>
                    <li>
                      import html:
                      <br />
                      all styles:{' '}
                      <code>
                        &lt;link href="https://fonts.googleapis.com/css2?family=Material+Icons"
                        rel="stylesheet" /&gt;
                      </code>
                      <br />
                      one style:{' '}
                      <code>
                        &lt;link
                        href="https://fonts.googleapis.com/css2?family=Material+Icons+&#123;style&#125;"
                        rel="stylesheet" /&gt;
                      </code>
                    </li>
                    <li>
                      import scss/css:
                      <br />
                      all styles:{' '}
                      <code>
                        @import url('https://fonts.googleapis.com/css2?family=Material+Icons');
                      </code>
                      <br />
                      one style:{' '}
                      <code>
                        @import
                        url('https://fonts.googleapis.com/css2?family=Material+Icons+&#123;style&#125;');
                      </code>
                    </li>
                  </ul>
                </p>
              </li>
            </ol>
            <p>
              full installing instruction here:{' '}
              <a
                href="https://github.com/google/material-design-icons"
                target="_blank"
                rel="noreferrer"
              >
                github.com/google/material-design-icons
              </a>
            </p>
          </p>
          <h4>Material Icons in onex library</h4>
          <p>
            In our design system we added only rounded icons.
            <p>
              <b>Usage:</b>
              <br />
              You can use 'Icon' component for it:
              <br />
              <code>&lt;Icon&gt;name of icon&lt;/Icon&gt;</code>
              <br />
              Or you can use original google material approach:
              <br />
              <code>&lt;span class="material-icons-round"&gt;name of icon&lt;/span&gt;</code>
              <br />
              (so that the icon has common styles, we recommend using the Icon component)
            </p>
          </p>
          <p>
            You can read full information on official website:{' '}
            <a
              href="https://fonts.google.com/icons?icon.style=Rounded&icon.set=Material+Icons"
              target="_blank"
              rel="noreferrer"
            >
              google material icons
            </a>
          </p>
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
      <div className="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list">
        {displayIcons.map((iconName) => (
          <div key={iconName} className="col mb-4 text-center">
            <div
              className="p-3 py-4 mb-2 bg-light text-center rounded"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <Icon>{iconName}</Icon>
            </div>
            <small style={{ wordWrap: 'break-word' }}>{iconName}</small>
          </div>
        ))}
      </div>
      {displayIcons.length === 0 ? (
        <Alert variant="light" style={{ backgroundColor: 'var(--background-secondary)' }}>
          No icons found matching <strong>{search}</strong>
        </Alert>
      ) : null}
    </Container>
  );
};
