const { log } = require("console")
const { number } = require("yargs")

function getPadawanNames() {
  const fs = require("fs")
  const arr = fs.readFileSync("./data/padawans.txt", "utf8").split("\n")
  return arr.splice(0, 4)
}
function getLightsaberScores() {
  const fs = require("fs")
  const arr = fs.readFileSync("./data/scores.txt", "utf8").split("\n")
  const arr2 = arr.map(elem => Number(elem))
  return arr2.sort((a,b) => b-a)
}
function getStats() {
  const fs = require("fs")
  const arr = fs.readFileSync("./data/padawans.txt", "utf8").split("\n")
  const sl = arr.splice(0, 4)
  const arr2 = fs.readFileSync("./data/scores.txt", "utf8").split("\n")
  const result = sl.map((el, i) => el = el + ", " + arr2[i])
  const resuls2 = result.map(el => el.split(", "))
  const resuls3 = resuls2.map(el => el.map(el => el == +el ? +el : el))
  return resuls3
 
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
