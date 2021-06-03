const fs = require("fs");

function getPadawanNames() {
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8");
  const arr = padawans.split("\n");
  return arr.slice(0, arr.length - 1);
}

function getLightsaberScores() {
  const score = fs.readFileSync("./data/scores.txt", "utf8");
  const arr = score.split("\n").map((el) => +el);
  return arr;
}

function getStats() {
  let newArr = [];
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8");
  const arrPadawans = padawans.split("\n");
  const score = fs.readFileSync("./data/scores.txt", "utf8");
  const arrScore = score.split("\n").map((el) => +el);

  for (let i = 0; i < padawans.length; i++) {
    newArr.push(arrPadawans[i], arrScore[i]);
  }
  return newArr;
}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
