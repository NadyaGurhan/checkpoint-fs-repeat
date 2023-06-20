const fs = require("fs");

function getPadawanNames() {
  const padawans = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .trim()
    .split("\n");
  return padawans;
}
function getLightsaberScores() {
  const scores = fs
    .readFileSync("./data/scores.txt", "utf8")
    .trim()
    .split("\n");
  return scores.map((el) => +el);
}
function getStats() {
  let result = [];
  const padawans = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .trim()
    .split("\n");
  const scores = fs
    .readFileSync("./data/scores.txt", "utf8")
    .trim()
    .split("\n");
  for (let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], +scores[i]]);
  }
  return result;
}
function writeStats(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i + 1] != undefined) {
      fs.appendFileSync("./data/stats.txt", `${data[i].join(" ")}\n`);
    } else {
      fs.appendFileSync("./data/stats.txt", `${data[i].join(" ")}`);
    }
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
