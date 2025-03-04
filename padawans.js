const fs = require('fs');
const { EOL } = require('os');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split(EOL);
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL);

function getListOf(array) {
  const result = [];
  array.forEach((element) => {
    if (element !== '') result.push(element);
  });
  return result;
}

function getPadawanNames() {
  return getListOf(padawans);
}

function getLightsaberScores() {
  const result = [];
  const scoresString = getListOf(scores).map((num) => {
    const numNumber = Number(num);
    // проверка на наличие пустых или не численных строк
    return Number.isNaN(numNumber) ? '' : numNumber;
  });
  scoresString.forEach((score) => {
    // избавляемся от пустых строк
    if (score !== '') result.push(score);
  });
  return result;
}

function getStats() {
  result = [];
  padawansList = getPadawanNames();
  scoresList = getLightsaberScores();
  for (let i = 0; i < padawansList.length; i++) {
    result.push([padawansList[i], scoresList[i]]);
  }
  return result;
}

function writeStats() {
  const fullList = getStats()
    .map((el) => el.join(' '))
    .join(EOL);
  fs.writeFileSync('./data/stats.txt', fullList);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
