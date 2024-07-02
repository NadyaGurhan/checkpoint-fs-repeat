const fs = require("fs");

const padawans = fs.readFileSync("./data/padawans.txt", "utf8").split("\n");
const scores = fs
  .readFileSync("./data/scores.txt", "utf8")
  .split("\n")
  .map((num) => Number(num));
function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores;
}

function getStats() {
  const res = [];

  for (let index = 0; index < padawans.length; index++) {
    const newArr = [];
    newArr.push(`${padawans[index]}`, Number(`${scores[index]}`));
    res.push(newArr);
  }
  return res;
}

// fs.writeFileSync();
function writeStats(statistics) {
  const data = statistics.join("\n").split(",").join(" ");

  fs.writeFileSync("data/stats.txt", data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

