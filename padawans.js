const fs = require('fs');

function getPadawanNames() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.split('\n').slice(0,-1)
}

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  let result = scores.split('\n').join(' ').split(' ');
  return result.map(el => +el);
}

function getStats() {

}

getLightsaberScores()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
