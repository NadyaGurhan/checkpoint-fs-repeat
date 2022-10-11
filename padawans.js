const fs = require('fs')
function getPadawanNames() {
  return fs.readFileSync(`data/padawans.txt`, 'utf-8').trim().split('\n')
}
function getLightsaberScores() {
  const score = fs.readFileSync(`data/scores.txt`, 'utf-8').split('\n');
  return score.map((el) => Number(el))
}
function getStats() {
  const pad = getPadawanNames();
  const score = getLightsaberScores();
  const res = [];
 for (let i=0;i<pad.length;i+=1) {
  res.push([pad[i], score[i]])
 }
 return res;
}
function writeStats() {
  const res = getStats()
  const result = res.join('\n').split(',').join(' ')
  return fs.writeFileSync('data/stats.txt', result);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
