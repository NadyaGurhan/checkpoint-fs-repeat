const fs = require("fs");
const padawans = fs.readFileSync(__dirname + "/data/padawans.txt", "utf8");
const scores = fs.readFileSync(__dirname + "/data/scores.txt", "utf8");
const padawansArray = padawans.split("\n");
const scoresArray = scores.split("\n");

function getPadawanNames() {
  return padawansArray.slice(0, padawansArray.length - 1);
}

function getLightsaberScores() {
  return scoresArray.map((el) => Number(el));
}

function getStats() {
  const result = [];
  for (let i = 0; i < scoresArray.length; i++) {
    const row = [];
    row.push(padawansArray[i], Number(scoresArray[i]));
    result.push(row);
  }
  return result;
}

function writeStats(stats) {
  let data = "";
  stats.forEach((el) => {
    data += el.join(" ") + "\n";
  });
  fs.writeFileSync(__dirname + "/data/stats.txt", data.slice(0,-1));
}

writeStats(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
