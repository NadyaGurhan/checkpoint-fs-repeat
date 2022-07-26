const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

  let padawan;
  let score;
  let stats;
  let scoreTable;

  function getPadawanNames () {
    padawan = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').filter(names => names.length > 0);
    return padawan
  }

  function getLightsaberScores () {
    score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').filter(names => names.length > 0)
    for (i = 0; i < score.length; i++) {
      score[i] = score[i] * 1
    }
    return score
  }

  function getStats () {
    for (i = 0; i < padawan.length; i++) {
      stats[i] = padawan[i]
      stats[i] = score[i]
    }
    return stats
  }

  function writeStats () {
    scoreTable = fs.writeFileSync('./data/stats.txt', 'utf-8', stats)
    return scoreTable
  }