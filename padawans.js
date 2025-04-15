const fs = require('fs');
const { EOL } = require('os');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split(EOL);
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL);

function getPadawanNames() {
  return padawans.filter((padawan) => padawan !== '');
}

function getLightsaberScores() {
  return scores.map((score) => Number(score));
}

function getStats() {
  const stat = [];
  for (let i = 0; i < scores.length; i++) {
    stat.push([padawans[i], Number(scores[i])]);
  }
  return stat;
}

function writeStats(stat) {
  stat.map((element) => element.join(' '));
  fs.writeFileSync(
    './data/stats.txt',
    stat.map((element) => element.join(' ')).join(EOL),
  );
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
