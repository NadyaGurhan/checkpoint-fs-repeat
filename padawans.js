const fs = require('fs');

function getPadawanNames() {
  let data = fs.readFileSync('./data/padawans.txt', 'utf-8');
  data = data.split('\n');
  data.pop();
  return data;
}

function getLightsaberScores() {
  let data = fs.readFileSync('./data/scores.txt', 'utf-8')
  data = data.split('\n');
  data = data.map(value => {
    return Number(value);
  })
  return data;
}

function getStats() {
  let padNames = getPadawanNames();
  let padScores = getLightsaberScores();
  let res = padNames.map((value, index) => {
    let arr = []
    arr.push(value, padScores[index])
    return arr
  });
  return res;
}

function writeStats(stats) {
  let str = stats.map(value => {
    return value[0] + ' ' + value[1];
  });
  fs.writeFileSync('data/stats.txt', str.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
