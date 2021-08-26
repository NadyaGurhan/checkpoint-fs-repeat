const fs = require('fs');

function getPadawanNames() {
  let result = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return result.split('\n').slice(0, -1);
}
function getLightsaberScores() {
  let result = fs.readFileSync('./data/scores.txt', 'utf-8');
  let split = result.split('\n');
  return split.map(el => Number(el));
}

function getStats() {
  //   let arr = [];
  // let names = getPadawanNames();
  // let scores = getLightsaberScores();

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  //writeStats,
}
