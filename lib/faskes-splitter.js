const fs = require('fs');
const TARGET_DATA = require('../data/faskes-sheets.json');

const OBJECT_DATA = ['puskesmas', 'rumah-sakit', 'apotek', 'oksigen'];

function SplitData(data) {
  const dataOutput = [];
  TARGET_DATA.forEach(item => {
    if (item.jenis === data) {
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

for (let i = 0; i < OBJECT_DATA.length; i += 1) {
  SplitData(OBJECT_DATA[i]);
}
