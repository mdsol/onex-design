const sass = require('sass');
const fs = require('fs');
const componentsInfo = require('./styleComponentGenerator/components');

const firstLetterLoverCase = (string) => string.charAt(0).toLowerCase() + string.slice(1);

const components = componentsInfo.map((elem) => elem.name);
components.map((component) => {
  try {
    const result = sass.renderSync({
      data: `@import 'src/scss/general';
        @import 'src/scss/components/${firstLetterLoverCase(component)}';`,
      // file: `src/scss/bs-components/${component}.scss`,
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
