const fs = require('fs')

function getPadawanNames(){
const data = fs.readFileSync('data/padawans.txt', 'utf8');
return data.split('\n')
.map(name => name.trim())
.filter(Boolean);
}

function getLightsaberScores(){
  return fs.readFileSync('data/scores.txt', 'utf8')
  .split('\n')
  .map(Number)
}

function getStats(){
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, index) => [name, scores[index]])
}

function writeStats(stats){
const data = stats.map(([name,score]) => `${name} ${score}`).join('\n');
fs.writeFileSync('data/stats.txt', data, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
