const fs = require("fs");

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map(Number);
}

function getStats() {
  let names = getPadawanNames();
  let stats = getLightsaberScores();
  let statTable = [];
  for (let i = 0; i < names.length; i++) {
    statTable.push(names[i], stats[i]);
  }
  return statTable;
}

function writeStats() {
  return fs.appendFileSync('data/stats.txt', statTable, 'utf-8');
}

// console.log(getLightsaberScores());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
