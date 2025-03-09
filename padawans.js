const fs = require('fs');
const { EOL } = require('os');
const padawnsList = fs.readFileSync('./data/padawans.txt', 'utf-8');
const grades = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const padArr = padawnsList.trim().split(EOL);
  return padArr;
}

function getLightsaberScores() {
  const gradesArr = grades.split(EOL).map(Number);
  return gradesArr;
}

function getStats() {
  const stats = getPadawanNames().map((name, index) => [
    name,
    Number(getLightsaberScores()[index]),
  ]);
  return stats;
}

function writeStats() {
  const write = fs.writeFileSync(
    './data/stats.txt',
    getStats().join(EOL).replace(/,/g, ' '),
  );
  return write;
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
