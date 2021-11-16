const fs = require("fs");
const padawans = fs.readFileSync("./data/padawans.txt", "utf-8").split("\n");
const score = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");

function getPadawanNames() {
  return padawans.filter((el) => el.length > 1);
}

// console.log(getPadawanNames());

function getLightsaberScores() {
  score.sort((a, b) => a + b);

  return score.map((item) => +item);
}

// console.log(getLightsaberScores());

function getStats() {
  let result = [];
  for (let i = 0; i < padawans.length - 1; i++) {
    result.push([padawans[i], Number(score[i])]);
  }

  return result;
}

console.log(getStats());

function writeStats() {
  let filePath = `./data/stats.txt`;
  return fs.writeFileSync(filePath, `${}}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
