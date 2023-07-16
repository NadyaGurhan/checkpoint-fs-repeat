const fs = require("fs");

function getPadawanNames() {
  const padawans = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .trim()
    .split("\n")
    .map((el) => el.trim("\r"));

  return padawans;
}

function getLightsaberScores() {
  const scores = fs
    .readFileSync("./data/scores.txt", "utf8")
    .trim()
    .split("\n")
    .map((el) => Number(el.trim("\r")));

  return scores;
}

function getStats() {
  const statsArr = [];

  const padawans = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .trim()
    .split("\n")
    .map((el) => el.trim("\r"))
    .map((el) => {
      statsArr.push(el.split());
    });

  const scores = fs
    .readFileSync("./data/scores.txt", "utf8")
    .trim()
    .split("\n")
    .map((el) => el.trim("\r"));
  for (i = 0; i < scores.length; i++) {
    statsArr[i].push(Number(scores[i]));
  }
  return statsArr;
}

function writeStats(statsArr) {
  for (let i = 0; i < statsArr.length; i++) {
    fs.appendFileSync("data/stats.txt", `${statsArr[i]}\n`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
