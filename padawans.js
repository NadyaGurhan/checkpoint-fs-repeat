const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  return fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n')
    .slice(0, -1);
}

function getLightsaberScores() {
  const num = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return num.map(Number);
}

function getStats() {
  const jedi = getPadawanNames();
  const lightSaber = getLightsaberScores();
  const scores = [];

  for (let i = 0; i < jedi.length; i++) {
    const score = [jedi[i], lightSaber[i]];
    scores.push(score);
  }

  return scores;
}

function writeStats() {

  const filePath = `./data/stats.txt`;
  const text = getStats().join('\n')
  .replaceAll(',', ' ');
  return fs.writeFileSync(filePath, text);
}
