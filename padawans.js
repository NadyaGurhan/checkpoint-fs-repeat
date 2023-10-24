const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync("./data/padawans.txt", "utf-8");
  return names.split("\n");
}
function getLightsaberScores() {
  
}

// function getStats() {
//   const names = getPadawanNames();
//   const scores = getLightsaberScores();
//   const stats = names.map((name, index) => [name, scores[index]]);
//   return stats;
// }

// function writeStats(stats) {
//   const statsString = stats.map(([name, score]) => `${name} ${score}`).join('\n');
//   fs.writeFileSync('data/stats.txt', statsString);
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
