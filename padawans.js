const fs = require('fs');
const padawan = fs.readFileSync("data/padawans.txt" , "utf-8").split('\n');
console.log(padawan)

const scores = fs.readFileSync("data/scores.txt" , "utf-8"  ).split('\n');


console.log(scores);
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
