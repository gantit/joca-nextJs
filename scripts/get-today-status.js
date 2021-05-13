const CSVToJSON = require('csvtojson')
const chromium = require('chrome-aws-lambda')
const fs = require('fs')

const date = new Date()
const year = date.getFullYear()
const day = `${date.getDate()}`.padStart(2, '0')
const month = `${date.getMonth() + 1}`.padStart(2, '0')
const jsonFileName = `${year}${month}${day}.json`
const jsonFilePath = `./public/data/${jsonFileName}`

const stripHtml = (str) =>  {
  if ((str===null) || (str==='')) {
    return false;
  } else {
    str = str.toString();
  }
  return str.replace( /(<([^>]+)>)/ig, '');
}


const getData = async () => {
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true
  })
  const page = await browser.newPage()
  await page.goto('https://datawrapper.dwcdn.net/qegM7/', { waitUntil: 'networkidle0' })
  const {chartData}  = await page.evaluate(() => window.__DW_SVELTE_PROPS__.data)
  
  await page.reload({ waitUntil: ['networkidle0', 'domcontentloaded'] })
  await browser.close()
  const source = await CSVToJSON().fromString(stripHtml(chartData))
  const comunities =  source.filter(({Comunidad})=> !!Comunidad)
  const data = {}
  
  comunities.forEach((comunity)=>{
    if (comunity.Comunidad === "Comunidad Foral de Navarra") {
      comunity.Comunidad = "Navarra"
    }
    
    if (comunity.Comunidad === "Principado de Asturias"){
      comunity.Comunidad = "Asturias"
    }

    if (comunity.Comunidad === "Islas Baleares") {
      comunity.Comunidad = "Baleares"
    }

    data[comunity.Comunidad] = {
      comunityName: comunity.Comunidad,
      movility: comunity.Movilidad,
      maxGroups: comunity['Reunión'],
      catering: comunity['Comercio y restauración'],
      curfew: comunity['Toque de queda'],
      incidence: comunity.Incidencia
    }
  })

  await fs.promises.writeFile(jsonFilePath, JSON.stringify(data))
  await fs.promises.copyFile(
    `./public/data/${jsonFileName}`,
    './public/data/latest.json'
  )
  return data
}

getData()
