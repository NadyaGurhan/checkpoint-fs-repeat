const fs = require('fs')
const padawan = fs.readFileSync('/Users/timurminzulin/elbrus/phase-1/week1/tuesday/checkpoint-fs/data/padawans.txt', 'utf-8')


function getPadawanNames() {
  let arr = padawan.split('\n')
  let pad = arr.filter(a => a != '');
  return pad;
}
console.log(getPadawanNames())

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
