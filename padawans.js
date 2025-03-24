const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const nameRead = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return nameRead.split(`${EOL}`).filter(Boolean);
}

function getLightsaberScores() {
  const scoreRead = fs.readFileSync('./data/scores.txt', 'utf-8');
  const resultArray = scoreRead.split(`${EOL}`);
  return resultArray.map((el) => Number(el));
}

function getStats() {
  const result = [];
  const nameArr = getPadawanNames();
  const scoreArr = getLightsaberScores();
  for (let i = 0; i < nameArr.length; i++) {
    result.push([nameArr[i], scoreArr[i]]);
  }
  return result;
}

function writeStats() {
  const stats = getStats();
  const res1 = [];
  for (const i of stats) {
    res1.push(i.join(' '));
  }
  const result = res1.join('\n');
  fs.writeFileSync('./data/stats.txt', `${result}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
