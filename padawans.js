const fs = require('fs');
const { get } = require('http');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

f
const padawansNames = "./data/padawans.txt"
let data = fs.readFileSync(getPadawanNames, 'utf-8')
console.log(data)
console.log(padawansNames)
