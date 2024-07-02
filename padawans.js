const fs = require("fs");
const path = require("path");

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const filePath = path.join(__dirname, "data", "padawans.txt");
  const data = fs.readFileSync(filePath, "utf8");
  const names = data.split("\n").filter((name) => name !== "");
  return names;
}

function getLightsaberScores() {
  const filePath = path.join(__dirname, "data", "scores.txt");
  const data = fs.readFileSync(filePath, "utf8");
  const names = data
    .split("\n")
    .filter((name) => name !== "")
    .map((name) => Number(name));
  return names;
}

function getStats() {
  const filePathPadawan = path.join(__dirname, "data", "padawans.txt");
  const filePathScores = path.join(__dirname, "data", "scores.txt");

  const padawanDate = fs.readFileSync(filePathPadawan, "utf8").split(",");
  const scoresDate = fs.readFileSync(filePathScores, "utf8").split(",");

  const stats = [];
  for (let i = 0; i < padawanDate.length; i++) {
    const name = padawanDate[i];
    const score = scoresDate[i];
    stats.push([name, score]);
  }
  return stats;
}

function writeStats() {}
