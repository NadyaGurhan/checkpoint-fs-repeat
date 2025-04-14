const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

function getPadawanNames() {
  return (fs.readFileSync('./data/padawans.txt', 'utf-8')).split(/\r?\n/);
}

function getLightsaberScores() {
  return (fs.readFileSync('./data/scores.txt', 'utf-8')).split(/\r?\n/);
}

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getStats() {
  const arrPadawans = [];
  const arrScores = [];
  arrPadawans.push(padawans)
  arrScores.push(scores)
  
  console.log(arrPadawans);
  console.log(arrScores);
}

console.log(getStats())