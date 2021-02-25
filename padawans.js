const fs = require("fs");

const getPadawanNames = () => {
  return fs.readFileSync("./data/padawans.txt", "utf8").trim().split("\n");
};

const getLightsaberScores = () => {
  return fs
    .readFileSync("./data/scores.txt", "utf8")
    .trim()
    .split("\n")
    .map((el) => +el);
};

const getStats = () => {
  let getPadawan = getPadawanNames();
  let getLightsaber = getLightsaberScores();
  return getPadawan.map((newPadawan, i) => [newPadawan, getLightsaber[i]]);
};

const writeStats = () => {
  const dataB = getStats();
  fs.writeFileSync("./data/stats.txt", dataB.map((i) => i.join(" ")).join("\n"));
};
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
