/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const fetch = require('cross-fetch');
const fs = require('fs');
require('dotenv').config();

const SHEETS_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEETS_ID}/values/informasi-healthsupport?key=${process.env.GOOGLE_SHEET_API_KEY}&majorDimension=COLUMNS`;

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
      console.log('Data saved to ./data/faskes-sheets.json');
    } catch (err) {
      console.log(err);
    }
  })
  .catch(err => {
    console.log(err);
  });
