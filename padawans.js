const fs = require("fs");

const getPadawanNames = () =>
  fs.readFileSync("data/padawans.txt", "utf-8").trim().split("\n");

const getLightsaberScores = () =>
  fs
    .readFileSync("data/scores.txt", "utf-8")
    .trim()
    .split("\n")
    .map((el) => Number(el));

const getStats = () => {
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  return names.map((name, index) => [name, scores[index]]);
};

const writeStats = (stats) => {
  const data = stats.map((el) => el.join(" ")).join("\n");
  fs.writeFileSync("data/stats.txt", data);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
