const fs = require('fs');
const { EOL } = require('os')
const { toNamespacedPath } = require('path');

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt')
  return names.toString().split(EOL)
}
console.log(getPadawanNames())

module.exports = {
  getPadawanNames,
 // getLightsaberScores,
  //getStats,
  //writeStats,
};
