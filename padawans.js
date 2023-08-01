const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');
function getPadawanNames() {
  return padawans.split('\n');
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const result = scores.split('\n');
  return result.map((strNum) => parseFloat(strNum));
}
console.log(getLightsaberScores());

const padawan = getPadawanNames();
const scoreses = getLightsaberScores();

function getStats() {
  const resultArr = [];
  for (let i = 0; i < padawan.length; i++) {
    resultArr.push(padawan[i]);
    for (let j = 0; j < scoreses.length; j++) {
      resultArr.push(scoreses[j]);
    }
  }
  return resultArr;
}
console.log(getStats());

function writeStats() {

}
