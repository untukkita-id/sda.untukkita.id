/* eslint-disable no-console */
const fs = require('fs');
const cheerio = require('cheerio');
const fetch = require('cross-fetch');

const url = 'https://covid19.sidoarjokab.go.id/';

fetch(url)
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    const $ = cheerio.load(html);
    const data = [];

    $('.angka-kejadian').each(function () {
      data.push($(this).find('.text-white b')[0].children[0].data);
    });

    const output = {
      lastUpdate: new Date(),
      positif: data[0],
      sembuh: data[1],
      meninggal: data[2],
    };

    try {
      fs.writeFileSync('./data/scraper-covidsda-sheets.json', JSON.stringify(output, null, 2));
    } catch (err) {
      console.log(err);
    }
  });
