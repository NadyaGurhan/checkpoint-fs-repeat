const fs = require('fs')

function getPadawanNames() {
  const names = fs.readFileSync( ('./data/padawans.txt'), 'utf-8').split('\n')
  names.pop()
  return names
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return scores.map((el) => Number(el));
}

function getStats () {
  const stats = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    let padawanScore = []
    padawanScore.push(getPadawanNames()[i], getLightsaberScores()[i])
    stats.push(padawanScore)
  }
  return stats
}

function writeStats() {
  const res = getStats().map((el) => el.join(' ')).join('\n');
  // console.log(res);
  fs.writeFileSync('./data/stats.txt', `${res}`);
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
