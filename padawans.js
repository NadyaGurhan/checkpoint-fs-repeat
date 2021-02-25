//
const fs = require("fs");

// const getPadawanNames, getLightsaberScores;

const getPadawanNames = function () {
  return fs.readFileSync("./padawans.txt", "utf-8").trim().split("\n");
};

const getLightsaberScores = function () {
  return fs
    .readFileSync("./scores.txt", "utf-8")
    .trim()
    .split("\n")
    .map((name) => Number(name));
  // return fs.readFileSync("scores.txt", "utf-8").trim().split("\n");
};

const getStats = function () {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  // let stats = [];
  const stat = names.map((el, i) => [el, scores[i]]);
  return stat;
};

const writeStats = function () {
  // fs.writeFileSync();
  let data = getStats();
  // fs.appendFileSync("./newFile", data + "\n");
};

console.log(writeStats());
//

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
