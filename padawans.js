const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt', 'utf8').split('\n');
  names.pop();
  return names;
}

function getLightsaberScores() {
  const value = fs.readFileSync('data/scores.txt', 'utf8').split('\n');
  const newValue = value.map((el) => Number(el));
  return newValue;
}

function getStats() {
  const list = {};
  const name = getPadawanNames();
  const score = getLightsaberScores();
  // eslint-disable-next-line no-return-assign
  name.forEach((nameVal, scoreVal) => list[nameVal] = score[scoreVal]);
  return Object.entries(list);
}

function writeStats() {
  const result = fs.appendFileSync('data/stats.txt', getStats().join('\n').split(',').join(' '));
  return result;
}

console.log(getStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
