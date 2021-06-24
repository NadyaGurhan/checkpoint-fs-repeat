const fs = require("fs");

function getPadawanNames() {
  let fileContent = fs.readFileSync("./data/padawans.txt", "utf8");
  
  let result = fileContent.split("\n").join(',').split(',')
  let array = result.slice(0, 4)
  return array;
};
function getLightsaberScores() {
  let scores = fs.readFileSync("./data/scores.txt", 'utf8')
  .trim()
  return scores.split("\n")
}
function getStats() {

}
function writeStats() {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

