const puppeteer = require('puppeteer');
// eslint-disable-next-line import/no-unresolved
const configs = require('../../webpack.config');
const { config: componentsConfig } = require('../view-components/components-config');

const href = `http://localhost:${configs.devServer.port}`;

describe('components render', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  componentsConfig.data.components.forEach(({ name }) => {
    it(name.toLowerCase(), async () => {
      const url = process.env.STYLED
        ? `${href}/?component=${name}&styled=true`
        : `${href}/?component=${name}&styled=false`;

      const page = await browser.newPage();
      await page.goto(url, {
        waitUntil: 'networkidle2',
      });
      await page.waitForSelector('#app > div > div.wrapper');
      const element = await page.$('#app > div > div.wrapper');
      const image = await element.screenshot();

      expect(image).toMatchImageSnapshot();
    });
  });

  afterAll(async () => {
    await browser.close();
  });
});
