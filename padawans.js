const fs = require('fs');

const strDataPadawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const strDataScores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  const arrDataPadawans = strDataPadawans.split('/n');
  return arrDataPadawans;
}

function getLightsaberScores() {
  const arrDataScores = strDataScores.split('/n');
  return arrDataScores;
}

const arrGetStats = [];

function getStats() {
  const arrDataPadawans = strDataPadawans.split('/n');
  const arrDataScores = strDataScores.split('/n');
  const arrGetStats1Person = [];
  for (let i = 0; i < arrDataPadawans; i += 1) {
    arrGetStats1Person.push = arrDataPadawans[i] + arrDataScores[i];
    arrGetStats.push(arrGetStats1Person);
  }
  return arrGetStats;
}

function ()

const newFileStat = fs.writeFile('./data/stats.txt', 'hello content', writeStats() {

});

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
