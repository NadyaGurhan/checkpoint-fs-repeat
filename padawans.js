const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const pathNamePadawans = '/data/padawans.txt';
const pathNameScores = '/data/scores.txt';
const pathNameStats = '/data/stats.txt';

const dataPadawans = fs.readFileSync(__dirname + pathNamePadawans, 'utf-8');
const dataScores = fs.readFileSync(__dirname + pathNameScores, 'utf-8');

function getPadawanNames() {
  return dataPadawans.split('\n').filter((el) => el.length > 0);
}

function getLightsaberScores() {
  const result = dataScores.split('\n').filter((el) => el.length > 0);
  return result.map(Number);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  return padawans.map((el, index) => {
    return [el, scores[index]];
  });
}

function writeStats() {
  const data = getStats().map((el) => el.join(' '));
  const resultData = data.join('\n');
  fs.writeFileSync(__dirname + pathNameStats, resultData);
}
