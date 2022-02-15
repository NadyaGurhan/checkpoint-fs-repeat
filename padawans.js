const fs = require('fs');
function getPadawanNames() {
  let padawans;
  return padawans = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');

}
function getLightsaberScores() {
  let rating = [];
  return rating = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
