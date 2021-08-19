const fetch = require('cross-fetch');
const fs = require('fs');
require('dotenv').config();
const { performance } = require('perf_hooks');

const SHEETS_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEETS_ID}/values/informasi-healthsupport?key=${process.env.GOOGLE_SHEET_API_KEY}&majorDimension=COLUMNS`;

export default function handler(req, res) {
  const perSTart = performance.now();
  return new Promise((resolve, reject) => {
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
        // Send the data to the client
        res.status(200).json(output);
        const perEnd = performance.now();
        console.log(
          `[PERFORMANCE] [ GET api/data/faskes ] : Request Successful in: ${perEnd - perSTart}ms`
        );
        resolve();
      })
      .catch(err => {
        console.log(`[ERROR] An Error Has Been Occured \n ${err}`);
        return resolve();
      });
  });
}
