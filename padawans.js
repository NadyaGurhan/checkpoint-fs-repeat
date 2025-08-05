const fs = require('fs');
const { toNamespacedPath } = require('path/win32');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
};

function getPadawanNames(){
const names = fs.readFileSync ('./data/padawans.txt', 'utf-8');
const names1 = names.split('\r\n')
names1.pop()
return names1
}
console.log (getPadawanNames());

function getLightsaberScores(){
const stats  = fs.readFileSync ('./data/scores.txt', 'utf-8');
return stats.split('\r\n').map((a)=> Number(a));
}
console.log (getLightsaberScores());

function getStats () {
  const names = getPadawanNames();
  const stats = getLightsaberScores();
  const allStats = names.map((a, b) => [a, stats[b]]);
  return allStats;
}
console.log (getStats());
