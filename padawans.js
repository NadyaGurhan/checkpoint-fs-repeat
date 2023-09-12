const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const padawans = fs.readFileSync("data/padawans.txt", "utf-8").split("\n");
const scores = fs.readFileSync("data/scores.txt", "utf-8").split("\n").map((el) => Number(el));


function getPadawanNames() {
  return padawans.filter((el) => el.length > 0);
}

function getLightsaberScores() {
  return scores;
}

function getStats() {
  const res = [];

  for (let i = 0; i < scores.length; i += 1) {
    res.push([padawans[i], scores[i]]);
  }

  return res;
};

function writeStats() {

}