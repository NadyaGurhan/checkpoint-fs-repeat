const fs = require('fs')
function getPadawanNames() {
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8");
  return padawans.split("\n");
}

function getLightsaberScores() {
  const data = fs.readFileSync("./data/scores.txt", "utf8");
  return data.split("\n").map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, index) => [name, scores[index]]);
}


function writeStats(resultData) {
  fs.writeFileSync(
    "./data/stats.txt",
    resultData.join("\n").replace(/,/g, " ")
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

