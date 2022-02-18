const puppeteer = require('puppeteer');

describe('buttons render', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('onex button', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/tests', {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > p:nth-child(3) > button');
    const element = await page.$('#app > div > p:nth-child(3) > button');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
