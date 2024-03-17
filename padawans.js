const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8');
  const names = data.replace(/\r/g, '').split('\n');
  const out = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i] !== '') {
      out.push(names[i]);
    }
  }
  return out;
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf-8');
  const scores = data.replace(/\r/g, '').split('\n');
  const out = [];
  for (let i = 0; i < scores.length; i++) {
    out.push(parseFloat(scores[i]));
  }
  return out;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const out = [];
  for (let i = 0; i < names.length; i++) {
    out.push([names[i], scores[i]]);
  }
  return out;
}

function writeStats() {
  const stats = getStats();
  const out = [];
  for (let i = 0; i < stats.length; i++) {
    out.push(stats[i].join(' '));
  }
  fs.writeFileSync('data/stats.txt', out.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
