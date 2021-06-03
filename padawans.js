const fs = require("fs");

function getPadawanNames() {
  const padawans = "./data/padawans.txt";
  const data = fs.readFileSync(padawans, "utf8");
  let arrNames = data.split('\n').slice(0, 4);
  return arrNames;
}

function getLightsaberScores() {
  const scores = "./data/scores.txt";
  const data = fs.readFileSync(scores, 'utf-8');
  let arrScores = data.split('\n').map(Number);
  return arrScores;
 }

function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let stats = [];
  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
 }

function writeStats() {
  let stats = getStats().join('\n').replace(/,/g, ' ');
  fs.writeFileSync("data/stats.txt", stats);
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
