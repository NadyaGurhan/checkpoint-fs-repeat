const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
function getPadawanNames () {
  const names = fs.readFileSync("./data/padawans.txt", "utf8");
  return names.split("\r\n").slice(0, -1)
}
console.log (getPadawanNames ());

function getLightsaberScores () {
  const score = fs.readFileSync("./data/scores.txt", "utf8");
  return score.split("\r\n").slice(0, -1)
}  
console.log (getLightsaberScores ())

// function getStats () {
//   const namesScore = [];
//   const names = fs.readFileSync("./data/padawans.txt", "utf8");
//   const score = fs.readFileSync("./data/scores.txt", "utf8");
//   for (let i = 0; 
//   namesScore.push
// }