const fs = require("fs");

const padawans = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');

const scores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  return padawans.filter((el) => el !== "");
}
console.log(getPadawanNames());

function getLightsaberScores() {
  return scores.map((el) => Number(el));
}
console.log(getLightsaberScores());

// function getStats(){
// let stats =[]

// }
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
