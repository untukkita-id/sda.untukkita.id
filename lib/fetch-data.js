// Imports Scripts:
const chalk = require('chalk');

(function fetchData() {
  console.info(chalk.yellow('Fetching data...'));

  const fetchFaskes = require('./faskes-fetcher');
  fetchFaskes
    .fetchFaskes()
    .then(() => {
      console.info(chalk.green('Faskes Data fetched!'));
    })
    .catch(err => {
      console.error(chalk.red(err));
    });

  const scrapeData = require('./covid-sda-scrapper');
  scrapeData
    .scrapeData()
    .then(() => {
      console.info(chalk.green('covidSDA Data scraped!'));
    })
    .catch(err => {
      console.error(chalk.red(err));
    });

  const fetchVaksinasi = require('./vaksinasi-fetcher');
  fetchVaksinasi
    .fetchVaksinasi()
    .then(() => {
      console.info(chalk.green('Vaksinasi Data fetched!'));
    })
    .catch(err => {
      console.error(chalk.red(err));
    });
})();
