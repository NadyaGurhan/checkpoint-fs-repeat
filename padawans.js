const fs = require("fs");

function getPadawanNames() {
  const padawanNames = fs.readFileSync("./data/padawans.txt", "utf-8");
  const names = padawanNames.split("\n");
  return names;
}

function getLightsaberScores() {
  const padawanScores = fs.readFileSync("./data/scores.txt", "utf-8");
  const scores = padawanScores.split("\n");
  const scoresInt = scores.map((el) => Number(el));
  return scoresInt;
}

function getStats() {
  const stats = [];
  const padawanNames = fs.readFileSync("./data/padawans.txt", "utf-8");
  const padawanScores = fs.readFileSync("./data/scores.txt", "utf-8");
  const names = padawanNames.split("\n");
  const scores = padawanScores.split("\n");
  const scoresInt = scores.map((el) => Number(el));

  for (let i = 0; i < names.length; i++) {
    const array = [names[i], scoresInt[i]];
    stats.push(array);
  }

  return stats;
}

function writeStats() {
  const stats = [];
  const padawanNames = fs.readFileSync("./data/padawans.txt", "utf-8");
  const padawanScores = fs.readFileSync("./data/scores.txt", "utf-8");
  const names = padawanNames.split("\n");
  const scores = padawanScores.split("\n");

  for (let i = 0; i < names.length; i++) {
    const array = [`${names[i]} ${scores[i]}`];
    stats.push(array);
  }

  fs.writeFileSync("./data/stats.txt", stats.join("\n"), "utf-8");
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
