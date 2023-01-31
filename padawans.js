const fs = require("fs");

function getPadawanNames() {
  const result = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .trim()
    .split("\n");
  return result;
}

function getLightsaberScores() {
  const result = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");
  const final = [];
  result.forEach((elem) => final.push(Number(elem)));

  return final;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];

  padawans.forEach((elem, index) => {
    result.push(new Array(padawans[index], scores[index]));
  });

  return result;
}

function writeStats() {
  const result = fs.writeFile(".data/stats.txt", getStats);
  return result;
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
