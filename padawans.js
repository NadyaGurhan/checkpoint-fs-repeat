const fs = require('fs');

function getPadawanNames() {
  const result = [];
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  padawans.split('\n').forEach((el) => {
    if (el !== '') result.push(el);
  });
  return result;
}

function getLightsaberScores() {
  const result = [];
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  scores.split('\n').forEach((el) => {
    if (el !== '') result.push(+el);
  });
  return result;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < scores.length; i += 1) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
}

function writeStats() {
  let data = getStats();
  data = data.map((el) => {return el.join(' ')}).join('\n');
  fs.writeFileSync('data/stats.txt', data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
