const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  let padawans = fs.readFileSync('data/padawans.txt', 'utf8').split('\n').filter((e) => e !== '');
  return padawans;
}
function getLightsaberScores() {
  let scores = fs.readFileSync('data/scores.txt', 'utf8').split('\n').filter((e) => e !== '').map((e) =>+e);
  return scores;
}
function getStats() {
  let stats = [];
  let padawans = fs.readFileSync('data/padawans.txt', 'utf8').split('\n').filter((e) => e !== '');
  let scores = fs.readFileSync('data/scores.txt', 'utf8').split('\n').filter((e) => e !== '').map((e) =>+e);
  for (let i = 0; i < padawans.length; i++) {
    stats.push([padawans[i], scores[i]])
    
  }
  fs.writeFileSync(`data/stats.txt`, stats)
  return stats
}
function writeStats(stats) {
stats.map((e) => e.join(','))
let stats2 = stats.map((e) => e.join(',')).join('\n').replace(/,/g, ' ');
fs.writeFileSync(`data/stats.txt`, stats2);
return stats2;

}
console.log(writeStats(getStats()));
