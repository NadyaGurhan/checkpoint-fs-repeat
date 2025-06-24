const fs = require('fs');
const { get } = require('http');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return scores.map((el) => el - 0);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < names.length; i++) {
    const newArr = [];
    newArr.push(names[i]);
    newArr.push(scores[i]);
    result.push(newArr);
  }
  return result;
}

function writeStats() {
  const stats = fs.writeFileSync('./data/stats.txt', '');
}
console.log(getPadawanNames(), getLightsaberScores(), getStats(), writeStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
