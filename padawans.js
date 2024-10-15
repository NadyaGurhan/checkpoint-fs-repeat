const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync(__dirname + '/data/padawans.txt', 'utf-8');
  return data.split('\n').filter(Boolean);
}

function getLightsaberScores() {
  const data = fs.readFileSync(__dirname + '/data/scores.txt', 'utf-8');
  const scores = data
    .split('\n')
    .filter(Boolean)
    .map((score) => parseFloat(score));
  return scores;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();

  const stats = [];
  const length = Math.min(padawans.length, scores.length);

  for (let i = 0; i < length; i++) {
    stats.push([padawans[i], scores[i]]);
  }
  return stats;
}

function writeStats(stats) {
  let data = '';
  
  for (let i = 0; i < stats.length; i++) {
    data += stats[i][0] + ', ' + stats[i][1] + '\n';
  }

  fs.writeFileSync(__dirname + '/data/stats.txt', data, 'utf8');
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
