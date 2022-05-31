const fs = require('fs')

function getPadawanNames() {
  let name = fs.readFileSync('./data/padawans.txt', "utf-8")
  let result = (name.split("\n"))
  return result.slice(0, -1);
}


function getLightsaberScores() {
  let score = fs.readFileSync('./data/scores.txt', "utf-8")
  let scoerArr = score.split("\n")
  let result = scoerArr.map(el => parseFloat(el))
  return result
}
//console.log(getLightsaberScores())
function getStats() {
  let name = getPadawanNames()
  let score = getLightsaberScores()
  let res = []
  for (let i = 0; i < name.length; i++) {
    res.push([name[i], score[i]])
  }
  return res
}


function writeStats() {
  return fs.writeFileSync("./data/stats.txt", getStats().join("\n"))
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
