const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
  const result = padawans.split('\n');
  result.pop();
  return result;
}

function getLightsaberScores() {
  const score = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').split('\n').map((el) => Number(el));
  return score;
}

const getStats = () => {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const newArr = names.map((name, index) => [name, scores[index]]);
  return newArr;
};

const writeStats = () => {
  const arrToStr = getStats().join('\n').replaceAll(',', ' ');
  const write = fs.writeFileSync(`${__dirname}/data/stats.txt`, arrToStr, 'utf-8');
  return write;
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
