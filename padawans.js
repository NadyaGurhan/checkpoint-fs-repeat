const fs = require('fs');

function getPadawanNames() {
  let mass = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1);
  return mass
}

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  let num = scores.map(word => Number(word));
  return num;
}

function getStats() {

}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

getPadawanNames()