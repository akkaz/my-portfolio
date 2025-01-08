const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport for better screenshots
    await page.setViewport({ width: 1280, height: 800 });
    
    // Navigate to Google
    await page.goto('https://www.google.com');
    console.log('Loaded Google');
    
    // Take screenshot of homepage
    await page.screenshot({ path: 'google-home.png' });
    console.log('Took homepage screenshot');
    
    // Type into search box
    await page.type('textarea[name="q"]', 'puppeteer automation');
    console.log('Typed search query');
    
    // Press Enter immediately
    await page.keyboard.press('Enter');
    console.log('Pressed Enter');
    
    // Wait for search results
    await page.waitForSelector('#search');
    console.log('Search results loaded');
    
    // Take screenshot of results
    await page.screenshot({ path: 'google-results.png' });
    console.log('Took results screenshot');
    
    // Get titles of search results
    const titles = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('h3')).slice(0, 5).map(h3 => h3.textContent);
    });
    
    console.log('\nFirst 5 search results:');
    titles.forEach((title, i) => console.log(`${i + 1}. ${title}`));
    
    await browser.close();
    console.log('\nDone! Screenshots saved: google-home.png, google-results.png');
  } catch (error) {
    console.error('Error:', error);
  }
})();