const fs = require('fs');

function getPadawanNames() {
  const filePadawan = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const names = filePadawan.split('\r\n');
  console.log(typeof filePadawan);
  console.log(typeof names);
  return names;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
