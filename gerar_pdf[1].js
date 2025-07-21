const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const filePath = `file://${path.resolve(__dirname, 'index.html')}`;
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'resultado.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
})();
