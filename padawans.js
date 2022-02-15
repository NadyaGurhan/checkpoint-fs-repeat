const fs = require('fs');

const data = fs.readFileSync('./data/padawans.txt', 'utf-8');
const data1 = fs.readFileSync('./data/scores.txt', 'utf-8');

const padawans = data.split('\n');
const scores = data1.split('\n');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  padawans.pop();
  return padawans;
}

function getLightsaberScores() {
  return scores.map((el) => Number(el));
}

function getStats() {
  const result = [];
  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], Number(scores[i])]);
  }
  return result;
}

function writeStats() {
  const result = getStats();
  const final = result.join('\n').replaceAll(',', ' ');
  return fs.writeFileSync('./data/stats.txt', final);
}
