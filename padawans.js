const fs = require('fs');

const padawansStr = fs.readFileSync('./data/padawans.txt', 'utf8');
const padawanNames = padawansStr.split('\n');
padawanNames.pop();
const scoresStr = fs.readFileSync('./data/scores.txt', 'utf8');
const scoresStrArr = scoresStr.split('\n');

function getPadawanNames() {
  return padawanNames;
}

function getLightsaberScores() {
  const scores = [];
  scoresStrArr.forEach((element) => {
    scores.push(+element);
  });
  return scores;
}

function getStats() {
  const stats = [];
  for (let i = 0; i < padawanNames.length; i += 1) {
    stats.push([]);
    console.log(stats);
  }
  padawanNames.forEach((element, index) => {
    stats[index].push(element);
    console.log(stats);
  });
  getLightsaberScores().forEach((element, index) => {
    stats[index].push(element);
  });
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
