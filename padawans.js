const fs = require('fs');

function getPadawanNames() {
  const data1 = fs.readFile('./data/padawans', 'utf-8');
  const padawans = data1.split('\n');
  console.log(padawans);
  return padawans;
}
getPadawanNames();

function getLightsaberScores() {
  const data2 = fs.readFile('./data/scores', 'utf-8');
  const scores = data2.split('\n');
  console.log(scores);
  return scores;
}
getLightsaberScores();

function getStats() {

}
getStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};