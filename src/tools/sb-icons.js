const fs = require('fs');
const got = require('got');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const bsIconsUrl = 'https://icons.getbootstrap.com';

const snakeToPascal = (string) => {
    return string
        .split('-')
        .map((substr) => substr.charAt(0).toUpperCase() + substr.slice(1))
        .join('');
};

try {
    (async () => {
        const response = await got(bsIconsUrl);
        const dom = new JSDOM(response.body);
        const synonyms = {};

        // Create an Array out of the HTML Elements for filtering using spread syntax.
        const nodeList = [...dom.window.document.getElementsByClassName('name')];

        nodeList.forEach((iconName) => {
            synonyms[snakeToPascal(iconName.textContent)] = `${
                iconName.textContent
            } ${iconName.parentNode.parentNode.getAttribute('data-tags')}`;
        });
        fs.writeFile(
            `src/stories/icons.js`,
            `export default ${JSON.stringify(synonyms)};`,
            (err) => {
                if (err) {
                    console.error(err);
                }
                console.info('Icon synonyms data written.');
            },
        );
    })();
} catch (err) {
    console.error(`Storybook browsers data file could not be written.`, err);
}
