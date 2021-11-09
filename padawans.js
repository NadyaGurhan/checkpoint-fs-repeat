
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
} = require('../padawans.spec.js')

const fs = require('fs');

function getPadawanNames() {
  let result = fs.readFileSync('../data/padawans.txt', 'utf-8'),
  return result;
}
console.log(getPadawanNames());
