const chalk = require('chalk');

const fetchFaskes = require('./faskes-fetcher');
const scrapeData = require('./covid-sda-scrapper');
const fetchVaksinasi = require('./vaksinasi-fetcher');

(function fetchData() {
  console.info(chalk.yellow('Fetching data...'));

  fetchFaskes.fetchFaskes();

  scrapeData.scrapeData();

  fetchVaksinasi.fetchVaksinasi();
})();
