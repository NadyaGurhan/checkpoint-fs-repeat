const fs = require("fs");

function getPadawanNames() {
  const padawans = fs.readFileSync("data/padawans.txt", "utf8");
  const padArr = padawans.split("\n");
  let newArr = [];
  for (let i = 0; i < padArr.length; i++) {
    if (padArr[i].trim()) {
      newArr.push(padArr[i].trim());
    }
  }
  return newArr;
}

function getLightsaberScores() {
  const scores = fs.readFileSync("data/scores.txt", "utf8");
  const scoresArr = scores.split("\n");
  let newArr = [];
  for (let i = 0; i < scoresArr.length; i++) {
    if (scoresArr[i].trim()) {
      newArr.push(Number(scoresArr[i].trim()));
    }
  }
  return newArr;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  let newArr = [];

  for (let i = 0; i < padawans.length; i++) {
    newArr.push([padawans[i], scores[i]]);
  }
  return newArr;
}

function writeStats() {
  const stats = getStats();
  fs.writeFileSync(`data/stats.txt`, `${stats.join("\n")}`, "utf-8");
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
