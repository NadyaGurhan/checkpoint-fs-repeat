const fs = require('node:fs');

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  return scores.map((elem) => Number(elem));
}

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  return names.filter((elem) => elem !== '');
}

function getStats() {
  const result = [];
  for (let i = 0; i < getPadawanNames().length; i += 1) {
    result.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return result;
}

function writeStats() {
  fs.writeFileSync(
    './data/stats.txt',
    getStats()
      .map((elem) => elem.join(' '))
      .join('\n'),
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
