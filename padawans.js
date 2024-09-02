const { log } = require("console");
const fs = require("fs");
const { EOL } = require("os");

function getPadawanNames() {
  const newText = fs.readFileSync("./data/padawans.txt", "utf-8");
  const newTextArr = newText.split(EOL);
  newTextArr.pop();
  return newTextArr;
}

function getLightsaberScores() {
  const scoresText = fs.readFileSync("./data/scores.txt", "utf-8");
  return scoresText.split(EOL).map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  const result = [];

  for (let i = 0; i < names.length; i++) {
    result.push([names[i], scores[i]]);
  }
  return result;
}

function writeStats() {
  const stats = getStats();

  const newStats = stats.map((i) => i.join(" "));
  const newStatsText = newStats.join("\n");
  const createStats = fs.writeFileSync("./data/stats.txt", newStatsText);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// console.log(('Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82'))

console.log(writeStats());
