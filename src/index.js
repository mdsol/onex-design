// eslint-disable-next-line import/no-import-module-exports
import { render } from 'react-dom';
// eslint-disable-next-line import/no-import-module-exports
import App from './App';

render(<App />, document.getElementById('app'));

module.hot.accept();
