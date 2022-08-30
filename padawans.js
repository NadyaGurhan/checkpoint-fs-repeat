const fs = require('fs');

function getPadawanNames() {
  const padawansNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawansNames.pop();
  return padawansNames;
}

function getLightsaberScores() {
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return lightsaberScores.map((el) => Number(el));
}

function getStats() {
  const a = getPadawanNames();
  const b = getLightsaberScores();
  const result = [];
  for (let i = 0; i < a.length; i++) {
    const final = [a[i], b[i]];
    result.push(final);
  }
  return result;
}

function writeStats() {
  const c = getStats().map((el) => el.join(' '));
  //console.log(c);
  fs.writeFileSync('data/stats.txt', c.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
