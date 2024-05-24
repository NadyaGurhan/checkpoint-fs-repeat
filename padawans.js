const fs = require("fs");

function getPadawanNames() {
  const list = fs.readFileSync("./data/padawans.txt", "utf8");
  const noStr = list.trim();
  const arr = noStr.split("\n");
  return arr;
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf8');
  const arrNum = score.split('\n').map(Number)
  return arrNum
}

function getStats() {
  const name = getPadawanNames();
  const score = getLightsaberScores();
  const res = name.map((el, i) => [el, score[i]])
  return res
}

function writeStats() {
  const name = getPadawanNames();
  const score = getLightsaberScores();
  const res = name.map((el, i) => `${el} ${score[i]}`).join('\n');
  fs.writeFileSync('./data/stats.txt', res, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
