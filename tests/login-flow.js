const { chromium } = require('playwright');
const path = require('path');

const appUrl = `file://${path.join(__dirname, '..', 'public', 'index.html')}`;

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(appUrl);
    await page.fill('#username', 'student');
    await page.fill('#password', 'bootcamp123');
    await page.click('#login-button');
    console.log('Test passed: Login Passed');

  

    const message = await page.textContent('#welcome-text');

    if (!message.includes('Your automation passed.')) {
      throw new Error(`Unexpected result message: ${message}`);
    }

    console.log('Test passed: login flow works perfectly2..................');
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error('Test failed:', error.message);
  process.exit(1);
});