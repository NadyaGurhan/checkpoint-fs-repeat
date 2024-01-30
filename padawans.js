const fs = require('fs')

function readPadawans() {
  const padawansStr = fs.readFileSync("./data/padawans.txt", { encoding: 'utf-8' });
  const padawans = padawansStr.trim().split(/[\r\n]+/);
  return padawans;
}

function readScores() {
  const scoresStr = fs.readFileSync("./data/scores.txt", { encoding: 'utf-8' });
  const scores = scoresStr.trim().split(/[\r\n]+/).map(Number);
  return scores;
}

function getPadawanNames() {
  return readPadawans();
}

function getLightsaberScores() {
  return readScores();
}

function getStats() {
  const padawans = readPadawans();
  const scores = readScores();
  return padawans.map((name, i) => [name, scores[i]])
}

function writeStats() {
  const stats = getStats();
  const data = stats.map((item) => `${item[0]} ${item[1]}`).join('\n');
  fs.writeFileSync("./data/stats.txt", data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
