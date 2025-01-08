const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    console.log('Browser launched successfully');

    const page = await browser.newPage();
    console.log('New page created');

    console.log('Navigating to Google...');
    await page.goto('https://www.google.com');
    console.log('Successfully loaded Google!');

    console.log('Taking screenshot...');
    await page.screenshot({ path: 'test-screenshot.png' });
    console.log('Screenshot saved');

    await browser.close();
    console.log('Browser closed');
  } catch (error) {
    console.error('Error:', error);
  }
})();