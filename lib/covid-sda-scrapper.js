const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const url = 'https://covid19.sidoarjokab.go.id/'


try {
  const {
    data
  } = axios.get(url)
  const $ = cheerio.load(data)
  const featuredAngkaKejadian = $('.angka-kejadian')
  const AngkaKejadian = []

  for (let i = 0; i < featuredAngkaKejadian.length; i++) {
    let AngkaWrapper = $(featuredAngkaKejadian[i]).find('.text-white b')[0],
      angka = $(AngkaWrapper).text()

    AngkaKejadian.push(angka)
  }

  fs.writeFile(
    './data/angka-kejadian.json',
    JSON.stringify(AngkaKejadian, null, 2),
    (err) => {
      if (err) {
        console.error(err)
        return
      }
      console.info('Successfully written data to file ./data/angka-kejadian.json')
    }
  )
} catch (err) {
  console.error(err)
}
