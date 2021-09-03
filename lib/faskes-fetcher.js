const fs = require('fs');
const fetch = require('cross-fetch');
const chalk = require('chalk');

const API_ENDPOINT = 'http://api.sda.untukkita.my.id/api/fasilitaskesehatan';
const OBJECT_LIST = ['puskesmas', 'rumah-sakit', 'apotek', 'oksigen'];

module.exports = {
  fetchFaskes: function fetchFaskes() {
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(json => {
        for (let i = 0; i < OBJECT_LIST.length; i += 1) {
          const dataOutput = [];
          json.forEach(item => {
            if (item.jenis === OBJECT_LIST[i]) {
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
                  `./data/${OBJECT_LIST[i]}-sheets.json`,
                  JSON.stringify(dataOutput, null, 2),
                );
                console.info(
                  chalk.blueBright(`Data saved to ./data/${OBJECT_LIST[i]}-sheets.json`),
                );
              } catch (err) {
                console.error(err);
              }
            }
          });
        }
      });
  },
};
