const fs = require("fs");

function getPadawanNames() {
  const array = fs.readFileSync("./data/padawans.txt", "utf8").split("\n");
  console.log(array);
  return array;
}
getPadawanNames();

function getLightsaberScores() {
  const array = fs.readFileSync("./data/scores.txt", "utf8").split("\n");
  console.log(array);
  return array;
}
getLightsaberScores();

function getStats(names, scores) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    result.push(`${names[i]} ${scores[i]}`);
  }
  let arr = result.map((element) => element.split(', ')).slice(1).filter;
  console.log(result);
}
getStats(getPadawanNames(),getLightsaberScores());

// function writeStats() {

// }
module.exports = {
  getPadawanNames,
  //  getLightsaberScores,
  // getStats,
  // writeStats,
};
