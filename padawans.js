const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames () {
  let fileContent = fs.readFileSync('./data/padawans.txt', 'utf8')
  let padawanNames = fileContent.split('\n');
  return  padawanNames.slice(0, 4)
}

function getLightsaberScores () {
  let fileContent = fs.readFileSync('./data/scores.txt', 'utf8')
  let padawanScore = fileContent.split('\n');
  return  padawanScore.slice(0, 4)
}
function getStats () {

}
function writeStats () {


}