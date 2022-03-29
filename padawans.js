const fs = require('fs')

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8')
const names = padawans.split('\n');

const getPadawanNames = names.map(((item) => item.split(' ').

console.log(getPadawanNames)





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

