const fs = require("fs");

const getPadawanNames = () => {
  let arr = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .split("\n")
    .slice(0, -1);
  return arr;
};

const getLightsaberScores = () => {
  let arr = fs
    .readFileSync("./data/scores.txt", "utf8")
    .split("\n")
    .map(Number);

  return arr;
};

const getStats = () => {
  let arr = []
  for(let i=0, )
  return arr
};

const writeStats = () => {};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
