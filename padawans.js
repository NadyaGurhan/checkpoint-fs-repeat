module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'UTF-8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'UTF-8').split('\n');

console.log(scores)

function getPadawanNames() {
  const arr = padawans;

}
