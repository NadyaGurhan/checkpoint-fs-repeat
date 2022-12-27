const fs = require("fs");

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  let padavans = fs.readFileSync("data/padawans.txt", "utf-8");
  return padavans.trim().split("\n");
}
function getLightsaberScores() {
  let scores = fs.readFileSync("data/scores.txt", "utf-8");
  return scores
    .trim()
    .split("\n")
    .map((e) => +e);
}

function getStats() {
  let arr1 = getPadawanNames();
  let arr2 = getLightsaberScores();
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}

function writeStats() {
  let getStat = getStats().join("\n").replace(/\,/gi, " ");
  console.log(getStat);
  let newFile = fs.writeFileSync("data/stats.txt", getStat);
  return newFile;
}
