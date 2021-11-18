import { Container, Row, Col } from 'react-bootstrap';
import SbData from './browsers';

export default {
    title: 'Browsers',
};

const browserNames = {
    and_chr: 'Chrome for Android',
    and_ff: 'Firefox for Android',
    and_uc: 'UC Browser for Android',
    and_qq: 'QQ Browser',
    android: 'Android Browser',
    baidu: 'Baidu Browser',
    chrome: 'Chrome',
    edge: 'Edge',
    firefox: 'Firefox',
    ie: 'Internet Explorer',
    ie_mob: 'IE Mobile',
    ios_saf: 'iOS Safari',
    kaios: 'KaiOS',
    op_mini: 'Opera Mini',
    op_mob: 'Opera Mobile',
    opera: 'Opera',
    safari: 'Safari',
    samsung: 'Samsung Internet',
};

export const Browsers = () => (
    <Container>
        <Row>
            <Col>
                <h1>Browsers</h1>
                <p>
                    Official policy to support the latest browsers, no support for any version of
                    IE.
                </p>
                <p>
                    We care more about what features a browser supports vs. market share
                    (international audience considered).
                </p>
                <p>Webpack, Babel, CSS Auto Prefixer all rely on our .browserslistrc file.</p>
                <p>.browserslistrc file contents:</p>
                <pre
                    style={{ backgroundColor: 'var(--background-secondary)' }}
                    className="p-3 rounded"
                >
                    {SbData.supported}
                </pre>
                <h3>Supported Browsers</h3>
                {SbData.browsers.map((line) => (
                    <p className="mb-1">
                        <strong>{browserNames[line.split(' ')[0]]}</strong> >= {line.split(' ')[1]}
                    </p>
                ))}
            </Col>
        </Row>
    </Container>
);
