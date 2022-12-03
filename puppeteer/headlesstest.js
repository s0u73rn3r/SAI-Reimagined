/*const puppeteer = require('puppeteer');

(async () => {
  const pathToExtension =  + require('path').join(__dirname, '../src/views/entry.html');
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
})();*/
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

const electron = require("electron");
const puppeteer = require("puppeteer-core");

//setTimeout(function() {}, 5000);

// testing successful login
(async () => {
  try {
    const app = await puppeteer.launch({
      executablePath: electron,
      args: ["."],
      headless: false
    });
    const pages = await app.pages();
    const [page] = pages;

    await page.type('input[id=username]', 'Student1');
    await page.type('input[id=pwrd]', 'testing');
    await page.click('button#log');
    
    //const loginSuccess = 'div#buttons.btn-group';
    //await page.waitForSelector(loginSuccess);

    await page.close();
    await app.close();
  } catch (error) {
    console.error(error);
  }
})();