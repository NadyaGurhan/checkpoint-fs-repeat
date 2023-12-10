const fs = require('fs');

function getPadawanNames() {
  const list = fs.readFileSync(('data/padawans.txt'), 'utf8');
  const result = (list.split('\n'));
  return result.slice(0, result.length - 1);
}

function getLightsaberScores() {
  const list = fs.readFileSync(('data/scores.txt'), 'utf8');
  const result = (list.split('\n'));
  return result.map((el) => Number(el));
}

function getStats() {
  const result = [];
  const names = getPadawanNames();
  const stat = getLightsaberScores();
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], Number(stat[i])]);
  }
  return result;
}
function writeStats() {
  const arr = getStats();
  const result = [];
  const stats = arr.map((el) => el.join(' '));
  result.push(stats);
  return result.map((elem) => fs.writeFileSync('data/stats.txt', elem.join('\n')));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
