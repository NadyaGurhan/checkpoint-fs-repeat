const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const fileIncludes = fs.readFileSync(`data/padawans.txt`, data, 'utf-8')
  return fileIncludes.trim().split('/n')
}

function getLightsaberScores() {
  const fileIncludes = fs.readFileSync(`data/scores.txt`, 'utf-8').split('/n')
  return fileIncludes.map((el) => Number(el));
}

function getStats() {
  const names = getPadawanNames.map((el) => el.trim())
  const scores = getLightsaberScores();
  return names.map((el, i) => [el, scores[i]]);
}

function writeStats() {
  const stats = getStats();
  const result = stats.join("\n").replaceAll(",", " ");
  const newData = fs.writeFileSync("data/stats.txt", result, "utf-8");
  return newData;
}
