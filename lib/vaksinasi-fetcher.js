/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const fetch = require('cross-fetch');
const chalk = require('chalk');

const API_ENDPOINT = 'http://api.sda.untukkita.my.id/api/vaksinasi';

module.exports = {
  fetchVaksinasi: async function fetchVaksinasi() {
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => {
        try {
          fs.writeFileSync('./data/vaksinasi-sheets.json', JSON.stringify(json, null, 2));
          console.info(chalk.greenBright('Data saved to ./data/vaksinasi-sheets.json'));
        } catch (err) {
          console.error(err);
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
};
