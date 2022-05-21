
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require("fs")

function getPadawanNames() {
  const names = fs.readFileSync("./data/padawans.txt", "utf8").trim()
  let line = names.split('\n');

return line

}

function getLightsaberScores() {

  let score = fs.readFileSync("data/scores.txt", "utf8").trim().split('\n').map((el) => Number(el))
return score
}

function getStats() {
  let arr = [];
  for(let i = 0; i < 4; i++) {
    let innerArr = []
    innerArr.push(getPadawanNames()[i], getLightsaberScores()[i])
    arr.push(innerArr)
  }
  return arr

}

function writeStats(stats) {
  let result = stats.map((el) => el.join(' ')).join('\n');
  fs.appendFileSync("./data/stats.txt", result, "utf8")

}
