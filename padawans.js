const fs = require ('fs')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  names.pop();
  return names
}

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(el => Number(el));
  return scores
}

function getStats() {
  let stats = [];
  let padawans = getPadawanNames();
  let scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], scores[i]])
  }
  return stats
}

function writeStats() {
  let stats = getStats();
  let statsNew = stats.map(el => el.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', statsNew);
  return statsNew
}

console.log(writeStats())
