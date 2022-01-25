const fs = require('fs');

let teamList = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
let scoreList = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
const padawanNames = teamList.pop();
const padawanScores = scoreList.map((elem) => +elem);

function getPadawanNames() {
  return teamList;
}

function getLightsaberScores() {
  return padawanScores;
}

function getStats() {
  let statsTable = [];
  let singlePerson = [];
  for (let i = 0; i < teamList.length; i++) {
    statsTable.push(teamList[i], padawanScores[i]);
  }

  return statsTable;
}

function writeStats() {
  let statsTable = getStats();
  let writeFile = fs.appendFileSync('./data/stats.txt', statsTable);
  return writeFile;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
