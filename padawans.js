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
  const scoresString = getListOf(scores).map((num) => {
    const numNumber = Number(num);
    return Number.isNaN(numNumber) ? '' : numNumber;
  });
  return scoresString;
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
