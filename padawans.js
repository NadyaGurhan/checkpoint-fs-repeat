const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync("./data/padawans.txt", "utf-8").split('\n').slice(0, -1);
}

function getLightsaberScores() {
  const score = fs.readFileSync("./data/scores.txt", "utf-8").split('\n');
  return score.map((el) => Number(el));
}

function getStats() {
  const name = getPadawanNames();
  const score = getLightsaberScores();
  const result = [];
  for (let i = 0; i < name.length; i += 1) {
    result.push(name[i], score[i]);
  }
  return result;
}

function writeStats() {
  const stats = getStats();
  return fs.writeFileSync('./data/stats.txt', stats.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
