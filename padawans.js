const fs = require('fs');

const PATH = {
  padawans: 'data/padawans.txt',
  scores: 'data/scores.txt',
  stats: 'data/stats.txt',
};

function getPadawanNames() {
  const data = fs.readFileSync(PATH.padawans, 'utf-8').split('\n');
  return data.filter((el) => {
    if (el) return true;
    return '';
  });
}

function getLightsaberScores() {
  const data = fs.readFileSync(PATH.scores, 'utf-8').split('\n');
  return data.map((el) => {
    if (el) return +el;
    return '';
  });
}

function getStats() {
  const stats = [];
  const padawansNames = getPadawanNames();
  const padawansScores = getLightsaberScores();

  padawansNames.map((padawan, index) => stats.push([padawan, padawansScores[index]]));
  return stats;
}
console.log(getStats());

function writeStats() {
  const dataRaw = getStats();
  const data = dataRaw.map((el) => el.join(' ')).join('\n');

  fs.rmSync(PATH.stats);
  fs.appendFileSync(PATH.stats, data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
