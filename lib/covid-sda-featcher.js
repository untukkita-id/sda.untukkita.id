const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const url = 'https://covid19.sidoarjokab.go.id/'

async function scrapeData() {
  try {
    const {data} = await axios.get(url)
    const $ = cheerio.load(data)
    const featuredAngkaKejadian = $('.angka-kejadian')
    const AngkaKejadian = []

    for (let i = 0; i < featuredAngkaKejadian.length; i++) {
      let AngkaWrapper = $(featuredAngkaKejadian[i]).find('.text-white b')[0],
        angka = $(AngkaWrapper).text()

      AngkaKejadian.push(angka)
    }

    console.dir(AngkaKejadian)

    fs.writeFile(
      'angka-kejadian.json',
      JSON.stringify(AngkaKejadian, null, 2),
      (err) => {
        if (err) {
          console.error(err)
          return
        }
        console.log('Successfully written data to file')
      }
    )
  } catch (err) {
    console.error(err)
  }
}
// Invoke the above function
scrapeData()
