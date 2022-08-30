const fs = require('fs');

const padawansString = fs.readFileSync('./data/padawans.txt', 'utf8');
const scoresString = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  const preparedString = padawansString.trimEnd();
  const padawansList = preparedString.split('\n');
  return padawansList;
}

function getLightsaberScores() {
  const scoresList = scoresString.split('\n');
  const intScoresList = scoresList.map((str) => Number(str));
  return intScoresList;
}

function getStats() {
  const preparedString = padawansString.trimEnd();
  const padawansList = preparedString.split('\n');
  const scoresList = scoresString.split('\n');
  const intScoresList = scoresList.map((str) => Number(str));
  const statsList = [[], []];
  for (let i = 0; i < padawansList.length; i += 1) {
    statsList[i].push(padawansList[i], intScoresList[i]);
  }
  console.log(statsList);
  return statsList;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  //writeStats,
};
