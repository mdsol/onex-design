const sass = require('sass');
const fs = require('fs');

const components = ['Buttons'];
components.map((component) => {
  try {
    const result = sass.renderSync({
      data: `@import 'node_modules/bootstrap/scss/functions';
        @import 'src/components/theme/colors';
        @import 'src/components/theme/sizes';
        @import 'node_modules/bootstrap/scss/variables';
        @import 'node_modules/bootstrap/scss/mixins';
        @import 'src/components/${component}/styles/variables';
        @import 'node_modules/bootstrap/scss/${component.toLowerCase()}';
        @import 'src/components/${component}/styles/${component.toLowerCase()}';`,
      // file: `src/scss/bs-components/${component}.scss`,
    });
    if (result.css) {
      fs.writeFile(`src/Styled/${component}.css`, result.css, (err) => {
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
