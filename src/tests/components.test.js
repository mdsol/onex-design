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

  it('check', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Check&styled=true'
      : 'http://localhost:3000/?component=Check&styled=false';
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

  it('expansionPanel', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=ExpansionPanel&styled=true'
      : 'http://localhost:3000/?component=ExpansionPanel&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('inlineEditSelect', async () => {
    console.log('process', process.env.STYLED);
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=InlineEditSelect&styled=true'
      : 'http://localhost:3000/?component=InlineEditSelect&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('inlineEditText', async () => {
    console.log('process', process.env.STYLED);
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=InlineEditText&styled=true'
      : 'http://localhost:3000/?component=InlineEditText&styled=false';
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

  it('menuItem', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=MenuItem&styled=true'
      : 'http://localhost:3000/?component=MenuItem&styled=false';
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

  it('pagination', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Pagination&styled=true'
      : 'http://localhost:3000/?component=Pagination&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('select', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Select&styled=true'
      : 'http://localhost:3000/?component=Select&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('switch', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Switch&styled=true'
      : 'http://localhost:3000/?component=Switch&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('tabs', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Tabs&styled=true'
      : 'http://localhost:3000/?component=Tabs&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('tag', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=Tag&styled=true'
      : 'http://localhost:3000/?component=Tag&styled=false';
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('textarea', async () => {
    const url = process.env.STYLED
      ? 'http://localhost:3000/?component=TextArea&styled=true'
      : 'http://localhost:3000/?component=TextArea&styled=false';
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
