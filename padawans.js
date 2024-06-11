const fs = require("fs");

function getPadawanNames() {
  return fs.readFileSync("./data/padawans.txt", "utf8").split(`\n`);
}

function getLightsaberScores() {
  return fs.readFileSync("./data/scores.txt", "utf8").split(`\n`).map(Number);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();

  let result = [];
  for (let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
}

function writeStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  let result = "";
  for (let i = 0; i < padawans.length - 1; i++) {
    result += padawans[i] + " " + scores[i] + "\n";
  }
  if ((i = padawans.length - 1)) {
    result += padawans[i] + " " + scores[i];
  }
  return fs.writeFileSync("./data/stats.txt", result);
}

writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
