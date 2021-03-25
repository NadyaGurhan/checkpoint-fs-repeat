const fs = require('fs');
// let data = fs.readFileSync('padawans.txt', 'utf-8');

function getPadawanNames() {
  let names = fs.readFileSync('data/padawans.txt', 'utf-8').split("\n");
  names.pop();
  return names;
}

function getLightsaberScores() {
  let scores = fs.readFileSync('data/scores.txt', 'utf-8').split("\n").map((el) => +el);
  return scores;
}

function getStats() {
  let stats = [];
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  for (let i = 0; i < names.length; i++) {
    stats.push([names[i],scores[i]]);
  }
  return stats;
}

function writeStats() {
  let statStr = getStats().join("\n").replace(/,/gm, " ");
  fs.writeFileSync('data/stats.txt', statStr)

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
