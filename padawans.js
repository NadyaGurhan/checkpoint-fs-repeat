const fs = require('fs');

function getPadawanNames(){
  const names = fs.readFileSync('data/padawans.txt', 'utf8');
  return names
};
console.log(names);

function getLightsaberScores(){
  const scores = fs.readFileSync('data/scores.txt', 'utf8');
  return scores
};

function getStats(names, scores){
  const stats = [];
  for (let i = 0; i < names.length; i++){
    stats.push(`${names[i]}, scores[i]`)
  }
  return stats
}

function writeStats(){
  const write = fs.writeFileSync('data/stats.txt', stats.join('\n', 'utf8'))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
