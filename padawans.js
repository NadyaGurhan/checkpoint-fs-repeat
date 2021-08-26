const fs = require('fs');

function getPadawanNames() {
  const path = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return path.split(' \n');

}
function getLightsaberScores() {
  let path1 = fs.readFileSync('./data/scores.txt', 'utf8');
  let number = Number(path1.split(' \n'))
  return number;
}
function getStats() {
  for (let i = 0; i < getPadawanNames; i += 1) {

  }
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
    writeStats,
};
