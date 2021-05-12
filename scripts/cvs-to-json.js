const CSVToJSON = require('csvtojson')
const chromium = require('chrome-aws-lambda')
const fs = require('fs')

const date = new Date()
const year = date.getFullYear()
const day = `${date.getDate()}`.padStart(2, '0')
const month = `${date.getMonth() + 1}`.padStart(2, '0')
const jsonFileName = `${year}${month}${day}.json`
const jsonFilePath = `./public/data/${jsonFileName}`

const getCvsRoute = async () => {
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: false,
    ignoreHTTPSErrors: true
  })
  const page = await browser.newPage()
  await page.goto('https://datawrapper.dwcdn.net/qegM7/', {
    waitUntil: 'networkidle0'
  })
  page.setRequestInterception(true)

  let req = ''

  page.on('request', (request) => {
    if (request.resourceType() === 'fetch') {
      req = request.url()
    }
    request.continue()
  })
  await page.reload({ waitUntil: ['networkidle0', 'domcontentloaded'] })
  await browser.close()
  return req
}

const getData = () => {
  const cvsRoute = getCvsRoute()

  CSVToJSON()
    .fromFile(cvsRoute)
    .then((source) => {
      console.log({ source })
      // source.push({
      //     "sku": "34890",
      //     "title": "Fortnite",
      //     "hardware": "Nintendo Switch",
      //     "price": "00.00"
      // });
      // var csv = JSONToCSV(source, { fields: ["sku", "title", "hardware", "price" ]});
      // FileSystem.writeFileSync("./destination.csv", csv);
    })
}

getData()

/* 

'

const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");

CSVToJSON().fromFile("./source.csv").then(source => {
    source.push({
        "sku": "34890",
        "title": "Fortnite",
        "hardware": "Nintendo Switch",
        "price": "00.00"
    });
    var csv = JSONToCSV(source, { fields: ["sku", "title", "hardware", "price" ]});
    FileSystem.writeFileSync("./destination.csv", csv);
});


https://static.dwcdn.net/data/qegM7.csv

*/
