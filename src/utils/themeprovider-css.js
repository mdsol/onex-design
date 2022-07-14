// eslint-disable-next-line import/no-extraneous-dependencies
const sass = require('sass');
const fs = require('fs');

try {
  const fontsCSS = sass.renderSync({
    data: `@import 'src/scss/fonts.scss';`,
  });
  const platformCSS = sass.renderSync({
    data: `@import 'src/scss/platform.scss';`,
  });
  const themeproviderCSS = sass.renderSync({
    data: ` html .onex-themeprovider { ${platformCSS.css} }`,
  });
  if (themeproviderCSS.css) {
    fs.writeFile(
      `dist/themeProvider.css`,
      `
      ${fontsCSS.css}
      ${themeproviderCSS.css
        .toString()
        .replaceAll(
          /@import url\("https:\/\/fonts.googleapis.com\/css2\?family=Noto\+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap"\);/g,
          '',
        )
        .replaceAll(
          /@import url\("https:\/\/fonts.googleapis.com\/css2\?family=Material\+Icons\+Round"\);/g,
          '',
        )
        .replaceAll(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '')
        .replaceAll(/ body {/g, ' {')
        .replaceAll(/html .onex-themeprovider :root {/g, ':root {')}`,
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
