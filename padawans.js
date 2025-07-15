const fs = require('fs');

function getPadawanNames() {
  let names = [];
  names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  names.pop();
  return names;
}

function getLightsaberScores() {
  let names = [];
  names = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < names.length; i++) {
    names[i] -= 0;
  }
  return names;
}

function getStats() {
  const keys = getPadawanNames();
  const value = getLightsaberScores();
  let result = [];
  let elem = [];
  for (let i = 0; i < keys.length; i++) {
    elem.push(keys[i]);
    elem.push(value[i]);
    result.push(elem);
    elem = [];
  }
  return result;
}

function getStatsS() {
  const keys = getPadawanNames();
  const value = getLightsaberScores();
  let result = [];
  let elem = [];
  for (let i = 0; i < keys.length; i++) {
    elem.push(keys[i] + ` ${value[i]}`);
    result.push(elem);
    elem = [];
  }
  result.push('')
  return result;
}
function writeStats () {
  fs.writeFileSync('./data/stats.txt', getStatsS().join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
