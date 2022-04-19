const fs = require('fs');

const names = fs.readFileSync('data/padawans.txt', 'utf8').split('\n').filter(str => str.length > 0);
const scores = fs.readFileSync('data/scores.txt', 'utf8').split('\n').filter(str => str.length > 0);
const scoresNum = []
const stats = []

for (let i = 0; i < scores.length; i += 1) {
  scoresNum.push(parseFloat(scores[i], 10))
}

for (let i = 0; i < names.length; i += 1) {
  stats[i] = new Array;
  stats[i].push(names[i]);
  stats[i].push(scoresNum[i]);
  // console.log(stats);
}



function getPadawanNames() {
  return names;
}

function getLightsaberScores() {
  return scoresNum;
}

function getStats() {
  return stats;
}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
