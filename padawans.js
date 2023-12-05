const fs = require("fs");
const path = require("path");

const getPadawanNames = () => {
  let names = fs
    .readFileSync(path.join(__dirname, "./data/padawans.txt"), "utf-8")
    .split("\n");
  return names;
};

const getLightsaberScores = () => {
  let scores = fs
    .readFileSync(path.join(__dirname, "./data/scores.txt"), "utf-8")
    .split("\n");
  return scores.map((el) => Number(el));
};

const getStats = () => {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  let arr = [];
  for (let i = 0; i < padawans.length; i++) {
    arr.push([padawans[i], scores[i]]);
  }
  return arr;
};

let stats = getStats();
const writeStats = (stats) => {
  let str = stats.join("\n").replaceAll(",", " ");
  fs.writeFileSync(path.join(__dirname, "./data/stats.txt"), str);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
