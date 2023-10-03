const fs = require("fs");

function getPadawanNames() {
  const padawanList = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split(`\r\n`);
  padawanList.splice(-1, 1);
  return padawanList;
}

function getLightsaberScores() {
  const scoresListNumber = [];
  const scoresList = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split(`\r\n`);
  scoresList.forEach((element) => {
    scoresListNumber.push(+element);
  });
  return scoresListNumber;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], scores[i]]);
  }
  stats.sort((a, b) => +b[1] - +a[1]);
  return stats;
}

function writeStats() {
  const stats = getStats();
  const array = [];
  for (let i = 0; i < stats.length; i += 1) {
    array.push(stats[i].join(" "));
  }
  let string = array.join("\n");
  console.log(string);
  fs.writeFileSync("./data/stats.txt", `${string}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
