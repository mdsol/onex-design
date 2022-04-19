const puppeteer = require('puppeteer');
// eslint-disable-next-line import/no-unresolved
const configs = require('../../webpack.config');

const href = `http://localhost:${configs.devServer.port}`;

describe('components render', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('avatar', async () => {
    const url = process.env.STYLED
      ? `${href}/?component=Avatar&styled=true`
      : `${href}/?component=Avatar&styled=false`;
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
      ? `${href}/?component=Badge&styled=true`
      : `${href}/?component=Badge&styled=false`;
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
      ? `${href}/?component=Button&styled=true`
      : `${href}/?component=Button&styled=false`;
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
      ? `${href}/?component=Check&styled=true`
      : `${href}/?component=Check&styled=false`;
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
      ? `${href}/?component=Dropdown&styled=true`
      : `${href}/?component=Dropdown&styled=false`;
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
      ? `${href}/?component=ExpansionPanel&styled=true`
      : `${href}/?component=ExpansionPanel&styled=false`;
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
      ? `${href}/?component=InlineEditSelect&styled=true`
      : `${href}/?component=InlineEditSelect&styled=false`;
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
      ? `${href}/?component=InlineEditText&styled=true`
      : `${href}/?component=InlineEditText&styled=false`;
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
      ? `${href}/?component=Lozenge&styled=true`
      : `${href}/?component=Lozenge&styled=false`;
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
      ? `${href}/?component=MenuItem&styled=true`
      : `${href}/?component=MenuItem&styled=false`;
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
      ? `${href}/?component=Navigation&styled=true`
      : `${href}/?component=Navigation&styled=false`;
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
      ? `${href}/?component=Pagination&styled=true`
      : `${href}/?component=Pagination&styled=false`;
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
      ? `${href}/?component=Select&styled=true`
      : `${href}/?component=Select&styled=false`;
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
      ? `${href}/?component=Switch&styled=true`
      : `${href}/?component=Switch&styled=false`;
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('tablePagination', async () => {
    const url = process.env.STYLED
      ? `${href}/?component=TablePagination&styled=true`
      : `${href}/?component=TablePagination&styled=false`;
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('table', async () => {
    const url = process.env.STYLED
      ? `${href}/?component=Table&styled=true`
      : `${href}/?component=Table&styled=false`;
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
      ? `${href}/?component=Tabs&styled=true`
      : `${href}/?component=Tabs&styled=false`;
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
      ? `${href}/?component=Tag&styled=true`
      : `${href}/?component=Tag&styled=false`;
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
      ? `${href}/?component=TextArea&styled=true`
      : `${href}/?component=TextArea&styled=false`;
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('textfield', async () => {
    const url = process.env.STYLED
      ? `${href}/?component=TextField&styled=true`
      : `${href}/?component=TextField&styled=false`;
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('searchField', async () => {
    const url = process.env.STYLED
      ? `${href}/?component=SearchField&styled=true`
      : `${href}/?component=SearchField&styled=false`;
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('toasts', async () => {
    const url = process.env.STYLED
      ? `${href}/?component=Toasts&styled=true`
      : `${href}/?component=Toasts&styled=false`;
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('toggleButton', async () => {
    const url = process.env.STYLED
      ? `${href}/?component=ToggleButton&styled=true`
      : `${href}/?component=ToggleButton&styled=false`;
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('toggleButtonGroup', async () => {
    const url = process.env.STYLED
      ? `${href}/?component=ToggleButtonGroup&styled=true`
      : `${href}/?component=ToggleButtonGroup&styled=false`;
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('tooltip', async () => {
    const url = process.env.STYLED
      ? `${href}/?component=Tooltip&styled=true`
      : `${href}/?component=Tooltip&styled=false`;
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#app > div > div.wrapper');
    const element = await page.$('#app > div > div.wrapper');
    const image = await element.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('typography', async () => {
    const url = process.env.STYLED
      ? `${href}/?component=Typography&styled=true`
      : `${href}/?component=Typography&styled=false`;
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
