const sass = require('sass');
const fs = require('fs');

const components = [
    'accordion',
    'alert',
    'badge',
    'breadcrumb',
    'button-group',
    'buttons',
    'card',
    'carousel',
    'close',
    'containers',
    'dropdown',
    'forms',
];

components.map((component) => {
    try {
        const result = sass.renderSync({
            data: `@import 'src/scss/theme.scss';
            @import 'functions';
            @import 'variables';
            @import 'mixins';
            @import '${component}';`,
            includePaths: ['node_modules/bootstrap/scss'],
            // file: `src/scss/bs-components/${component}.scss`,
        });
        if (result.css) {
            fs.writeFile(`dist/css/${component}.css`, result.css, (err) => {
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
});
