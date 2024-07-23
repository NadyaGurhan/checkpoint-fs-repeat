const fs = require("fs");

function getPadawanNames() {
  return fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split("\n")
    .filter((item) => item !== "");
}

function getLightsaberScores() {
  return fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .filter((item) => item !== "")
    .map((item) => +item);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();

  return padawans.reduce((acc, item, index) => {
    acc.push([item, scores[index]]);
    return acc;
  }, []);
}

function writeStats() {
  const result = getStats();
  fs.writeFileSync(
    "./data/stats.txt",
    result.map((item) => item.join(" ")).join("\n"),
    "utf-8"
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
