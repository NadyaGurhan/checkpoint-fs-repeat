const fs = require("fs");

const readNames = fs.readFileSync("./data/padawans.txt", "utf-8");
function getPadawanNames() {
  const result = readNames.split("\n");
  const fin = result.filter((el) => el.length !== 0);
  return fin;
}

const readScores = fs.readFileSync("./data/scores.txt", "utf-8");
function getLightsaberScores() {
  const result = readScores.split("\n").map((el) => Number(el));
  return result;
}
// console.log(getLightsaberScores());

module.exports = {
  getPadawanNames,
  getLightsaberScores
  getStats,
  writeStats,
};
