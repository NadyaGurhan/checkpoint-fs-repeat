const fs = require('fs');

const padawansData = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scoreData = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawansData.trim().split('\n');
}

function getLightsaberScores() {
  return scoreData.split('\n').map((el) => +el);
}

function getStats() {
  const result = [];
  const padawans = padawansData.trim().split('\n');
  const scores = scoreData.split('\n').map((el) => +el);

  for (let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
}

function writeStats() {
  const data = getStats();
  // console.log(data);
  const result = data.map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', result);
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
