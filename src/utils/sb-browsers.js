const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const browserslist = require('browserslist');

const supported = fs.readFileSync('.browserslistrc');

const browsers = browserslist();

console.warn('Make sure to have run update:bl to keep the list of browsers up to date.');
try {
  fs.writeFile(
    `src/stories/browsers.js`,
    `export default {
            supported: \`${supported}\`,
            browsers: ${JSON.stringify(browsers).replace(/(,)/g, ',\r\n')}
        };`,
    (err) => {
      if (err) {
        console.error(err);
      }
      console.info('Storbyook data written.');
    },
  );
} catch (err) {
  console.error(`Storybook browsers data file could not be written.`, err);
}
