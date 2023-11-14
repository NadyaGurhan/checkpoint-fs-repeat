const fs = require('fs');

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  if (padawanNames[padawanNames.length - 1] === '') padawanNames.pop();
  return padawanNames;
}

function getLightsaberScores() {
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => Number(el));
  return lightsaberScores;
}

function getStats() {
  const padawanNames = getPadawanNames();
  const lightsaberScores = getLightsaberScores();
  const stats = [];
  padawanNames.forEach((el, i) => {
    stats.push([el, lightsaberScores[i]]);
  });
  return stats;
}

function writeStats() {
  const stats = getStats().map((el) => el.join(' '));
  let text = stats[0];
  for (let i = 1; i < stats.length; i += 1) {
    text += `\n${stats[i]}`;
  }
  fs.writeFileSync('./data/stats.txt', text);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
