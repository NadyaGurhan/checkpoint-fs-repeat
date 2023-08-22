const fs = require('fs');

function getPadawanNames() {
  const text = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
  const padawans = text.split('\n').slice();
  return padawans
}
function getLightsaberScores() {
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');
  const scoresMain = scores.split('\n').map((scores) => Number(scores));
  return scoresMain;
}

function getStats() {
const padawansAll = 
}
function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
