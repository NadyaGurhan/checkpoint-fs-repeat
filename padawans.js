const fs = require('fs');

const data = fs.readFileSync('./data/padawans.txt', 'utf-8');
const a = data.trim().split('\n');

function getPadawanNames() {
  const arr = [];
  for (let i = 0; i < a.length; i += 1) {
    arr.push(a[i]);
  }
  return arr;
}
// console.log(getPadawanNames());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
