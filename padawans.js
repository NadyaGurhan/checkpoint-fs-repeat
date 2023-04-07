const fs = require("fs");
const dataPadawans = fs.readFileSync("./data/padawans.txt", "utf-8");
const dataScores = fs.readFileSync("./data/scores.txt", "utf-8");

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  return dataPadawans.split("\n").filter((elem) => elem);
}

function getLightsaberScores() {
  return dataScores.split("\n").map((elem) => Number(elem));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((elem, i) => [elem, scores[i]]);
}

function writeStats() {
  return fs.writeFileSync(
    "./data/stats.txt",
    getStats()
      .map((elem) => elem.join(" "))
      .join("\n"),
    "utf-8"
  );
}
