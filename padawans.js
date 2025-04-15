const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(arr) {
  const padavans = fs.readFile('padawans.txt', 'utf-8')
  padavans.split(' ')
}
console.log(getPadawanNames(arr))




function writeStats(arrName) {
  fs.writeFileSync(`./data/ stats-names.txt`, arrName.join('\n'));
}