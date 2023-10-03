const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync("./data/padawans.txt", "utf8").split('\r\n');
  return names;
}
console.log(getPadawanNames())


function getLightsaberScores() {
  const grades = fs.readFileSync("data/scores.txt", "utf8").split('\r\n');
  return grades;
}
console.log(getLightsaberScores())