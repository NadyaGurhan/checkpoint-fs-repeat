const fs = require("fs");


function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  const charArr = data.split('\n');
  return charArr.slice(0, charArr.length - 1)
} 
// console.log(getPadawanNames())

function getLightsaberScores() {
  const dataScore = fs.readFileSync('data/scores.txt', 'utf8');
  const scoreArr = dataScore.split('\n');
  return scoreArr.map((e) => Number(e))
} 
getLightsaberScores()


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
