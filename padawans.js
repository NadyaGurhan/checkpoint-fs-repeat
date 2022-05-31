const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');

const grade = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  return padawans.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  return grade.split('\n').map(Number);
}

const names = getPadawanNames();
const scores = getLightsaberScores();

function getStats() {
  const newArr = [];
  for (let i = 0; i < names.length; i += 1) {
    const insideArr = [];
    insideArr.push(names[i], scores[i]);
    newArr.push(insideArr);
  }
  return newArr;
}

const stats = getStats();

function writeStats() {
  const data = fs.writeFileSync('./data/stats.txt', stats);
  return data;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
