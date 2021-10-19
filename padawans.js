const fs = require('fs')

function getPadawanNames () {
  let names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  names.split(', ');
  names.length.pop()
  return names
}










module.exports = {
  getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
};


