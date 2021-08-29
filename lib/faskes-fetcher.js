/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const fetch = require('cross-fetch');
const chalk = require('chalk');

require('dotenv').config();

const SHEETS_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEETS_ID}/values/informasi-healthsupport?key=${process.env.GOOGLE_SHEET_API_KEY}&majorDimension=COLUMNS`;

module.exports = {
  fetchFaskes: async function fetchFaskes() {
    // Fetches data from Google Sheets
    fetch(SHEETS_ENDPOINT)
      .then(response => response.json())
      .then(json => {
        const data = json.values;
        const output = [];
        const nama = data[0];
        const jenis = data[1];
        const kontak = data[2];
        const alamat = data[3];
        const sosialmedia = data[4];
        const jam_operasional = data[5];
        const harga_layanan = data[6];
        const catatan = data[7];
        const verifikasi = data[8];
        const sumberdata = data[9];

        for (let i = 1; i < data[0].length; i += 1) {
          const item = {
            nama: nama[i],
            jenis: jenis[i],
            kontak: kontak[i],
            alamat: alamat[i],
            sosialmedia: sosialmedia[i],
            jam_operasional: jam_operasional[i],
            harga_layanan: harga_layanan[i],
            catatan: catatan[i],
            verifikasi: verifikasi[i],
            sumberdata: sumberdata[i],
          };
          output.push(item);
        }
        try {
          fs.writeFileSync('./data/faskes-sheets.json', JSON.stringify(output, null, 2));
          console.info(chalk.greenBright('Data saved to ./data/faskes-sheets.json'));
          splitData();
        } catch (err) {
          console.error(err);
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
};

function splitData() {
  // eslint-disable-next-line import/no-unresolved
  const TARGET_DATA = require('../data/faskes-sheets.json');
  const OBJECT_DATA = ['puskesmas', 'rumah-sakit', 'apotek', 'oksigen'];

  for (let i = 0; i < OBJECT_DATA.length; i += 1) {
    const dataOutput = [];
    TARGET_DATA.forEach(item => {
      if (item.jenis === OBJECT_DATA[i]) {
        const TargetFaskesItem = {
          nama: item.nama,
          jenis: item.jenis,
          kontak: item.kontak,
          alamat: item.alamat,
          sosialmedia: item.sosialmedia,
        };
        dataOutput.push(TargetFaskesItem);
        try {
          fs.writeFileSync(
            `./data/${OBJECT_DATA[i]}-sheets.json`,
            JSON.stringify(dataOutput, null, 2),
          );
          console.info(chalk.blueBright(`Data saved to ./data/${OBJECT_DATA[i]}-sheets.json`));
        } catch (err) {
          console.error(err);
        }
      }
    });
  }
}
