const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawans.split('\n').filter((el) => el != 0);
}

function getLightsaberScores() {
  const newArr = scores.split('\n');
  const result = [];
  for (let i = 0; i < newArr.length; i++) {
    result.push(+newArr[i]);
  }
  return result;
}

function getStats() {
  const result = [];
  const names = getPadawanNames();
  const scores2 = getLightsaberScores();
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], scores2[i]]);
  }
  return result;
}

console.log(getStats());

function writeStats() {
  const data = getStats().join('\n');
  return fs.writeFileSync('./data/stats.txt', data.split(',').join(' '));
}

console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
