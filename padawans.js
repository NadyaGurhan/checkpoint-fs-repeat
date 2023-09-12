const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const padawans = fs.readFileSync("data/padawans.txt", "utf-8").split("\n");
const scores = fs
  .readFileSync("data/scores.txt", "utf-8")
  .split("\n")
  .map((el) => Number(el));

function getPadawanNames() {
  return padawans.filter((el) => el.length > 0);
}

function getLightsaberScores() {
  return scores;
}

function getStats() {
  const res = [];
  let temp = [];

  for (let i = 0; i < scores.length; i += 1) {
    temp.push(padawans[i], scores[i]);
    res.push(temp);
    temp = [];
  }

  return res;
}

function writeStats() {
  return fs.writeFileSync('data/stats.txt', getStats().join('\n').replaceAll(',', ' '));
}
