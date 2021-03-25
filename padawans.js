const fs = require("fs");

let padNamesArr = [];
let padScoresArr = [];
function getPadawanNames () {
  padNamesArr = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padNamesArr.pop();
  return padNamesArr;
}
function getLightsaberScores() {
  padScoresArr = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  return padScoresArr;
}
function getStats() {
  let stats = [];
  for (let j of padNamesArr) {
      stats.push(j);
    }
    console.log(stats);
  }
  
getStats();


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
