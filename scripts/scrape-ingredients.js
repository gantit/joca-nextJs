const CSVToJSON = require('csvtojson')
const chromium = require('chrome-aws-lambda')
const fs = require('fs')

const date = new Date()
const year = date.getFullYear()
const day = `${date.getDate()}`.padStart(2, '0')
const month = `${date.getMonth() + 1}`.padStart(2, '0')
const jsonFileName = `ingredientes.json`
const jsonFilePath = `./public/data/${jsonFileName}`

const stripHtml = (str) => {
  if (str === null || str === '') {
    return false
  } else {
    str = str.toString()
  }
  return str.replace(/(<([^>]+)>)/gi, '')
}

const resultsPage = () => {
  var ingredientes = [
    ...document.querySelectorAll('.show_entries div a:first-child')
  ]
  var data = [...ingredientes].map((ingrediente) => {
    if (ingrediente) {
      const link = ingrediente.href
      const title = ingrediente.title
      const img = ingrediente.querySelector('img').src
      return { link, title, img }
    }
  })
  return data
}

const nextPage = () => {
  const directions = [...document.querySelectorAll('.pagination .direction')]
  const data = directions.some((i) => i.innerText === 'Siguiente')
  if (data) {
    const [url] = directions.filter((i) => i.innerText === 'Siguiente')
    return url.href
  }
  return data
}

const ingredientList= []
const scanAllPages = async (page) => {
  const nextPageURL = await page.evaluate(nextPage)
  if (nextPageURL) {
    const ingredientsByPage = await page.evaluate(resultsPage)
    await page.goto(nextPageURL, {
      waitUntil: ['networkidle0', 'domcontentloaded']
    })
    console.log(ingredientsByPage)
    ingredientList.push(...ingredientsByPage)
    scanAllPages(page)
    return false
  }
  console.log({fin:'---termino',ingredientList})
  await fs.promises.writeFile(jsonFilePath, JSON.stringify(ingredientList))
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
  await page.goto('https://www.recetas.com/ingredientes/', {
    waitUntil: ['networkidle0', 'domcontentloaded']
  })

  await scanAllPages(page)


  
}

getData()
