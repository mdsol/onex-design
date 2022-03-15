const sass = require('sass');
const fs = require('fs');

const getFiles = () => {
  const folderThemeName = process.argv[2];

  return fs.readdirSync(`src/themes/${folderThemeName}`).reduce(
    (acc, file) => `${acc}
    @import 'src/themes/${folderThemeName}/${file}';`,
    '',
  );
};

const scssFileNames = fs
  .readdirSync(`src/components`, { withFileTypes: true })
  .reduce((acc, item) => (item.isDirectory() ? [...acc, item.name] : acc), []);

const themeImportFiles = getFiles();

scssFileNames.map((componentName) => {
  try {
    const result = sass.renderSync({
      data: `@import 'node_modules/bootstrap/scss/functions';
        ${themeImportFiles}
        @import 'node_modules/bootstrap/scss/variables';
        @import 'node_modules/bootstrap/scss/mixins';
        @import 'src/components/${componentName}/scss/index.scss';`,
    });
    if (result.css) {
      const folderName = `src/components/${componentName}/styled`;

      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }

      fs.writeFile(`${folderName}/platform.css`, result.css, (err) => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
      console.info(`CSS generated for ${componentName}`);
    } else {
      console.error(`No CSS for ${componentName}`);
    }
  } catch (err) {
    console.error(`Something broke for ${componentName}`, err);
  }

  return null;
});
