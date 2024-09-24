const fs = require("fs");

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};



function getPadawanNames() {
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8");
  return padawans.split("\r\n");
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

const stats = getStats()

function writeStats() {
  const data = stats.map(([name, score]) => `${name} ${score}`).join('\r\n')
  fs.writeFileSync("data/stats.txt", data);
}
console.log(writeStats());