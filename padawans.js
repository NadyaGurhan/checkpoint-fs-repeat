const fs = require ('fs');
const { toNamespacedPath } = require('path');

function getPadawanNames() {
  const arr1 =[]
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8')
  for(let i =0; i<names.length; i++){
    console.log (names[i])
    // arr1.push(`$`)
  }
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
