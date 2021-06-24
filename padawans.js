const fs = require("fs")
const dataNames = fs.readFileSync("./data/padawans.txt", "utf8")
const dataScores = fs.readFileSync("./data/scores.txt", "utf-8")

function getPadawanNames () {
  const arr = dataNames.split("\n")
  arr.pop();
  return arr;
}
function getLightsaberScores () {
  const arr = dataScores.split("\n")
  numberedArr = arr.map((el) => + el)
  return numberedArr
}

function getStats () {
  const names = getPadawanNames()
  const scores = getLightsaberScores()
  // console.log(names);
  // console.log(scores);
  const arr = names.map((el, i) => [el, scores[i]])
  // console.log((arr));
  return arr
}

function writeStats () {
  const dataStats = getStats()
  // console.log(dataStats)
  // console.log(dataStats.map((el) => el.join(" ")))
  // console.log(dataStats.map((el) => el.join(" ")).join("\n"))
  const data = dataStats.map((el) => el.join(" ")).join("\n")
  fs.writeFileSync("data/stats.txt", data)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// writeStats()

