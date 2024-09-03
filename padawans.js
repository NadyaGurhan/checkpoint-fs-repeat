const fs = require('fs');

const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
const marks = fs.readFileSync('./data/scores.txt', 'utf-8');
const save = fs.writeFileSync('./data/statistics', 'utf-8');
const getPadawanNames = () => {
  const arr = names.split('\r\n');
  arr.pop();
  return arr;
};
function getLightsaberScores() {
  const num = fs.readFileSync('./data/scores.txt', 'utf-8');
  const res = num.split('\n').map(Number);
  return res;
}

const getStats = () => {
  const result = [];
  const name = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < name.length; i++) {
    result.push([name[i], scores[i]]);
  }
  return result;
};
const writeStats = () => {
  const result = getStats().map((el) => `${el[0]} ${el[1]}`).join('\n');
  fs.writeFileSync('./data/stats.txt', result, 'utf-8');
};
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
