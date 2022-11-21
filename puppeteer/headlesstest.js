const puppeteer = require('puppeteer');

(async () => {
  const pathToExtension = "https://localhost:3000" + require('path').join(__dirname, '../src/views/entry.html');
  console.log("==========================" + pathToExtension);
  
  const browser = await puppeteer.launch({
    headless: 'chrome',
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });
  
  const page = await browser.newPage();
  await page.goto(pathToExtension);
  
  await page.type('username', 'username');
  await page.type('pwrd', 'password');
  await page.click('log');

  await browser.close();
})();
/*
import {BrowserWindow, app} from "electron";
import pie from "puppeteer-in-electron";
import puppeteer from "puppeteer-core";

const main = async () => {
  const browser = await pie.connect(app, puppeteer);

  const window = new BrowserWindow();
  const url = path.join(__dirname, './views/entry.html');
  console.log(url);
  await window.loadURL(url);

  const page = await pie.getPage(browser, window);
  console.log(page.url());
  window.destroy();
};

main();*/