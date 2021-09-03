/* eslint-disable @babel/no-invalid-this */
/* eslint-disable func-names */
/* eslint-disable no-console */
const fs = require('fs');
const fetch = require('cross-fetch');
const chalk = require('chalk');

const API_ENDPOINT = 'http://api.sda.untukkita.my.id/api/statistikcovid';

module.exports = {
  scrapeData: async function scrapeData() {
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => {
        try {
          fs.writeFileSync('./data/scraper-covidsda-sheets.json', JSON.stringify(json, null, 2));
          console.info(chalk.greenBright('Data saved to ./data/faskes-sheets.json'));
        } catch (err) {
          console.error(err);
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
};
