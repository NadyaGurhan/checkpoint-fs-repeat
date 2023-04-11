const fs = require("fs");

function getPadawanNames() {
  const readFile = fs.readFileSync("./data/padawans.txt", "utf-8").split("\n");
  return readFile.filter((el) => el != "");
}

function getLightsaberScores() {
  const readFile = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");
  return readFile.map((el) => +el);
}

function getStats() {
  const res = getLightsaberScores();
  const result = getPadawanNames().map((a, i) => [a, res[i]]);
  return result;
}

function writeStats(stat) {
  const data = fs.writeFileSync(
    "data/stats.txt",
    stat.join("\n").replace(/[,]/gm, " "),
    "utf8"
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
