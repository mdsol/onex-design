import 'regenerator-runtime/runtime';

const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

jest.setTimeout(30000);
