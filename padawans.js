const { clear } = require('console');
const fs = require('fs')

function getPadawanNames () {
 const padawans = fs.readFileSync("./data/padawans.txt", "utf8")
  let names = [];
  for (let i = 0; i < padawans.length; i++) {
    names = names.push(padawans[i]).split(", ")
  }
  return names
}

const function getLightsaberScores () {
  const scores = fs.readFileSync("./data/scores.txt", "utf8")
  let score = []
  for (let i = 0; i < scores.length; i++) {
    score = score.push(scores[i]).split(", ")
  }
return score
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
