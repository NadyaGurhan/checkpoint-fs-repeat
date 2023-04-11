const fs = require('fs')
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map((e) => Number(e));

function getPadawanNames() {
return padawans
}

function getLightsaberScores() {
return scores
}

function getStats() {
  let res = [];
for (let i = 0; i < padawans.length; i += 1) {
res.push([padawans[i], scores[i]])
}
return res
}

function writeStats(stats) {
  let stat = stats;
  stat = getStats().map((e) => e.join(' ')).join('\n')
  return fs.writeFileSync('data/stats.txt', stat, 'utf-8')
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
