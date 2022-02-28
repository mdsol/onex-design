const puppeteer = require('puppeteer');

describe('components render', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('avatar', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Avatar&styled=true'
      : 'http://localhost:3000/?component=Avatar&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('badge', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Badge&styled=true'
      : 'http://localhost:3000/?component=Badge&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('buttons', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Button&styled=true'
      : 'http://localhost:3000/?component=Button&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('dropdown', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Dropdown&styled=true'
      : 'http://localhost:3000/?component=Dropdown&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('lozenge', async () => {
    console.log('process', process.env.STYLED);
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Lozenge&styled=true'
      : 'http://localhost:3000/?component=Lozenge&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('navigation', async () => {
    console.log('process', process.env.STYLED);
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Navigation&styled=true'
      : 'http://localhost:3000/?component=Navigation&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
