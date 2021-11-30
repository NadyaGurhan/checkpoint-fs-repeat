const fs = require('fs');

function getPadawanNames() {
  const names = [];
  const name = fs.readFileSync('./data/padawans.txt').toString().split('\n').map((item) => {
    if (item !== '') {
      names.push(item);
    }
  });
  return names;
}

console.log(getPadawanNames());

function getLightsaberScores() {
  const scores = [];
  const score = fs.readFileSync('./data/scores.txt').toString().split('\n').map((item) => {
    if (item !== '') {
      scores.push(Number(item));
    }
  });
  return scores;
}

console.log(getLightsaberScores());

function getStats() {
  const stats = [];
  for (i = 0; i < getPadawanNames().length; i++) {
    stats.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  // for (const person of stats) {
  //   fs.appendFileSync('./data/stats.txt', `\n${person}`);
  // }
  return stats;
}
getStats();

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
