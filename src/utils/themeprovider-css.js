// eslint-disable-next-line import/no-extraneous-dependencies
const sass = require('sass');
const fs = require('fs');

function getArgs() {
  const args = {};
  process.argv.slice(2, process.argv.length).forEach((arg) => {
    // long arg
    if (arg.slice(0, 2) === '--') {
      const longArg = arg.split('=');
      const longArgFlag = longArg[0].slice(2, longArg[0].length);
      const longArgValue = longArg.length > 1 ? longArg[1] : true;
      args[longArgFlag] = longArgValue;
    }
    // flags
    else if (arg[0] === '-') {
      const flags = arg.slice(1, arg.length).split('');
      flags.forEach((flag) => {
        args[flag] = true;
      });
    }
  });
  return args;
}
const { BUNDLE } = getArgs();

try {
  const platformCSS = sass.renderSync({
    data: `@import 'src/scss/platform.scss';`,
  });
  const themeproviderCSS = sass.renderSync({
    data: `@import 'src/scss/fonts.scss'; .onex-themeprovider { ${platformCSS.css} }`,
    outputStyle: 'compressed',
  });
  if (themeproviderCSS.css) {
    fs.writeFile(
      BUNDLE ? `dist/themeprovider.css` : `src/components/ThemeProvider/platform.css`,
      themeproviderCSS.css
        .toString()
        .replaceAll(/ body {/g, ' {')
        .replaceAll(/.onex-themeprovider :root {/g, ':root {'),
      (err) => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      },
    );
    console.info(`CSS generated for ThemeProvider`);
  } else {
    console.error(`No CSS for ThemeProvider`);
  }
} catch (err) {
  console.error(`Something broke for ThemeProvider CSS`, err);
}
