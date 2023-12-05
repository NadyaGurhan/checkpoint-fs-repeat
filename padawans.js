const fs = require("fs");

function getPadawanNames() {
  const fileContent = fs.readFileSync("data/padawans.txt", "utf8");
  return fileContent.trim().split("\n");
}

function getLightsaberScores() {
  const fileContent = fs.readFileSync("data/scores.txt", "utf8");
  return fileContent.split("\n").map((score) => parseFloat(score));
}

function getStats() {
  const names = getPadawanNames().map((name) => name.trim());
  const scores = getLightsaberScores();
  return names.map((name, index) => [name, scores[index]]);
}

function writeStats(stats) {
  const statStrings = stats
    .filter(([name, score]) => name && score) // удаляем строки с пустыми значениями
    .map(([name, score]) => `${name} ${score}`)
    .join("\n");
  fs.writeFileSync("data/stats.txt", statStrings);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
