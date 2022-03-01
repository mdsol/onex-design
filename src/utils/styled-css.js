const sass = require('sass');
const fs = require('fs');

const firstLetterLoverCase = (string) => string.charAt(0).toLowerCase() + string.slice(1);
const firstLetterUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const getFiles = () => {
  const folderThemeName = process.argv[2];

  return fs.readdirSync(`src/themes/${folderThemeName}`).reduce(
    (acc, file) => `${acc}
    @import 'src/themes/${folderThemeName}/${file}';`,
    '',
  );
};

const getStylesOfComponents = () => fs.readdirSync(`src/scss/components`).map((file) => file);

const themeImportFiles = getFiles();
const components = ['ToggleButtonGroup'];

components.map((component) => {
  try {
    const result = sass.renderSync({
      data: `@import 'node_modules/bootstrap/scss/functions';
        ${themeImportFiles}
        @import 'node_modules/bootstrap/scss/variables';
        @import 'node_modules/bootstrap/scss/mixins';
        @import 'src/scss/components/${firstLetterLoverCase(component)}';`,
    });
    if (result.css) {
      const folderName = `src/Styled/${component}`;

      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }

      fs.writeFile(`${folderName}/platform.css`, result.css, (err) => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
      console.info(`CSS generated for ${component}`);
    } else {
      console.error(`No CSS for ${component}`);
    }
  } catch (err) {
    console.error(`Something broke for ${component}`, err);
  }

  return null;
});
