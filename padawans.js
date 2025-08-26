const fs = require('fs');
const EOL = require('os').EOL;

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
}

function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => +el);
}

function getStats() {
  const result = [];
  let name = getPadawanNames();
  let num = getLightsaberScores();

  for (let i = 0; i < name.length; i++) {
    result.push([name[i], num[i]]);
  }
  return result;
}

function writeStats(stats) {
  const data = stats.map((stat) => `${stat[0]} ${stat[1]}`).join(EOL);
  return fs.writeFileSync('./data/stats.txt', data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
