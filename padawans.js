const fs = require("fs");

const path = require("path");

const padawans = fs
  .readFileSync(path.join(__dirname, "./data/padawans.txt"), "utf-8")
  .split("\n");
const lightsabers = fs
  .readFileSync(path.join(__dirname, "./data/scores.txt"), "utf-8")
  .split("\n");

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  const scores = lightsabers.map((el) => Number(el));
  return scores;
}

function getStats() {
  const table = [];
  const scores = lightsabers.map((el) => Number(el));
  for (let i = 0; i < padawans.length; i++) {
    table.push([padawans[i], scores[i]]);
  }
  return table;
}

function writeStats() {
  const stats = getStats().join('\n').replaceAll(',', ' ');
  fs.writeFileSync('./data/stats.txt', `${stats}`, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
