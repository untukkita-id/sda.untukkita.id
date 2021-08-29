/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
const fs = require('fs');
const TARGET_DATA = require('../data/faskes-sheets.json');

const OBJECT_DATA = ['puskesmas', 'rumah-sakit', 'apotek', 'oksigen'];

module.exports = {
  splitData: function splitData(data) {
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
            fs.writeFileSync(`./data/${data}-sheets.json`, JSON.stringify(dataOutput, null, 2));
          } catch (err) {
            console.error(err);
          }
        }
      });
    }
  },
};
