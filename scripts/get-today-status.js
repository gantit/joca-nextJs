const chromium = require('chrome-aws-lambda')
const fs = require('fs')

const date = new Date()
const year = date.getFullYear()
const day = `${date.getDate()}`.padStart(2, '0')
const month = `${date.getMonth() + 1}`.padStart(2, '0')
const jsonFileName = `${year}${month}${day}.json`
const jsonFilePath = `./public/data/${jsonFileName}`

const getData = async () => {
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true
  })
  const page = await browser.newPage()
  await page.goto('https://flo.uri.sh/visualisation/5087020/embed', {
    waitUntil: 'networkidle0'
  })
  var { data } = await page.evaluate(() => window.template)

  await browser.close()
  const comunities = {}

  data.rows.forEach(
    ({ columns }) =>
      (comunities[columns[0]] = {
        comunity: comunities[columns[0]],
        perimetralComunity: columns[1],
        perimetralMunicipal: columns[2],
        curfew: columns[3],
        socialMeetings: columns[4],
        catering: columns[5],
        shops: columns[6],
        lastUpdate: columns[7]
      })
  )

  await fs.promises.writeFile(jsonFilePath, JSON.stringify(comunities))
  await fs.promises.copyFile(
    `./public/data/${jsonFileName}`,
    './public/data/latest.json'
  )
  return comunities
}

getData()
