const fs = require("fs");

function getPadawanNames() {
  let result = fs.readFileSync("./data/padawans.txt", "utf-8").split("\n");
  result.pop();
  return result;
}

function getLightsaberScores() {
  let result = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .map((el) => Number(el));
  return result;
}

function getStats() {
  let result = [];
  let padawans = getPadawanNames();
  let scores = getLightsaberScores();

  for (let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
}
function writeStats() {
  fs.writeFileSync(
    "data/stats.txt",
    getStats().join("\n").replaceAll(",", " "),
    () => {
      console.log("done");
    }
  );
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
