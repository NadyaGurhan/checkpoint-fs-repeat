const fs = require('fs');

const arrPadawan = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
const arrScore = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

function getPadawanNames() {
  arrPadawan.pop();
  return arrPadawan;
}

function getLightsaberScores() {
  const newArr = arrScore.map((elem) => Number(elem));
  return newArr;
}

function getStats() {
  const totalArr = [];
  for (let i = 0; i < arrPadawan.length; i += 1) {
    const newArr = [arrPadawan[i], Number(arrScore[i])];
    totalArr.push(newArr);
  }
  return totalArr;
}

function writeStats() {
  const mid = getStats();
  const mappedMid = mid.map((elem) => elem.join(' '));
  const end = mappedMid.join('\n');
  fs.writeFileSync('./data/stats.txt', end);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
