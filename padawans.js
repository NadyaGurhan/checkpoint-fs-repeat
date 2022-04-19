const fs = require('fs');

function getPadawanNames () {
  const arrOfPadawan = fs.readFileSync('./data/padawans.txt', 'utf8');
  return arrOfPadawan.trim().split('\n');
};
function getLightsaberScores () {
  const arrOfMarks= fs.readFileSync('./data/scores.txt', 'utf8');
  return arrOfMarks.split('\n').map(el => el = typeof 'number');
}
function getStats () {

}
function writeStats () {

}
 
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
