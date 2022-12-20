const fs = require('fs')


function getPadawanNames() {
  const names = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n')
    .slice(0, -1)

return names;
}

// console.log(getPadawanNames());

function getLightsaberScores() {
  const scores = fs
  .readFileSync('./data/scores.txt', 'utf-8')
  .split('\n')
  .map((el) => Number(el))
  return scores;
}

// console.log(getLightsaberScores()); 

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = padawans.map((el, i) => [el, scores[i]])
  return stats

}
// console.log(getStats()); 

function writeStats() {
  const statGet = getStats();
  const data = statGet
    .map((el) => el.join(' '))
    .join('\n');
  fs.writeFileSync('./data/stats.txt', data, 'utf-8');
}
writeStats(); 

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


