const fs = require('fs');

function getPadawanNames() {
 const namesPadawans = fs.readFileSync("./data/padawans.txt", "utf8").split("\n").splice(0, 4);
  return namesPadawans;
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const arrScores = fs.readFileSync("./data/scores.txt", "utf8").split("\n");
  const scoresPadawans = arrScores.map(Number);
  return scoresPadawans;
}
getLightsaberScores();

function getStats() {
  const namesPadawans = getPadawanNames();
  const scoresPadawans = getLightsaberScores();
  const stats = [];
 for (let i = 0; i < namesPadawans.length; i += 1) {
 stats.push([namesPadawans[i], scoresPadawans[i]]);
}
 return stats;
}
console.log(getStats());

function writeStats() {
  const stats = getStats();
  fs.writeFileSync('data/stats.txt', stats.map((el) => el.join(' ')).join('\n'));
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
