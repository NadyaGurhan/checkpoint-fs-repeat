const fs = require('fs');
const { EOL } = require('os');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames () {
  const data = fs.readFileSync('./data/padawans.txt', 'utf-8')
return data.split(EOL);
}
// console.log(getPadawanNames())

function getLightsaberScores () {
  const data = fs.readFileSync('./data/scores.txt', 'utf-8')
  return data.split(EOL).map(Number);
}


