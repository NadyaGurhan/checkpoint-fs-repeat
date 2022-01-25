const fs = require('fs');

const padawanNamesList = fs.readFileSync('./data/padawans.txt', 'utf8');
const padawanNames = padawanNamesList.split('\n');
const padawanScoresList = fs.readFileSync('./data/scores.txt', 'utf8');
const padawanScores = padawanScoresList.split('\n');

function getPadawanNames() {
  const finalPadawanNames = [];
  for (let i = 0; i < padawanNames.length; i += 1) {
    if (padawanNames[i] !== '') {
      finalPadawanNames.push(padawanNames[i]);
    }
  }
  return finalPadawanNames;
}

function getLightsaberScores() {
  const finalPadawanScores = [];
  for (let i = 0; i < padawanScores.length; i += 1) {
    if (padawanScores[i] !== '') {
      finalPadawanScores.push(+padawanScores[i]);
    }
  }
  return finalPadawanScores;
}

function getStats() {
  const table = [];
  const tablePadawanScores = getLightsaberScores();
  const tablePadawanNames = getPadawanNames();
  for (let i = 0; i < tablePadawanScores.length; i += 1) {
    table.push([tablePadawanNames[i], tablePadawanScores[i]]);
  }
  return table;
}

const getStatsString = getStats().join(', ').split(', ').map((el) => el.replace(/,/g, ' '));

function writeStats() {
  const fileName = './data/stats.txt';
  const data = getStatsString.join('\n');
  return fs.writeFileSync(fileName, data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
