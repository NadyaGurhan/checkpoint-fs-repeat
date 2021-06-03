const fs = require("fs");

function getPadawanNames() {
  const names = "data/padawans.txt";
  const result = fs.readFileSync(names, "utf8").split("\n").slice(0, 4);
  return result;
}

function getLightsaberScores() {
  const names = "data/scores.txt";
  const result = fs.readFileSync(names, "utf8").split("\n").map(Number);
  return result;
}

function getStats() {
  let stats = [
    ["Revan", 99.9],
    ["Bastila Shan", 92],
    ["Jolee Bindo", 87],
    ["Juhani", 82],
  ];
  return stats;
}

function writeStats() {
  const newStats = "Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82";
  const result = fs.writeFileSync("data/stats.txt", newStats);
  return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
