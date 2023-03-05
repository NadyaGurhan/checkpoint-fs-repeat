const fs = require('fs');

const padawans = fs
  .readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8')
  .split('\n')
  .slice(0, -1);
const scores = fs
  .readFileSync(`${__dirname}/data/scores.txt`, 'utf-8')
  .split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  const result = scores.map((elem) => +elem);
  return result;
}

function getStats() {
  const result = {};
  for (let i = 0; i < padawans.length; i++) {
    result[`${padawans[i]}`] = +scores[i];
  }
  return Object.entries(result);
}

function writeStats(item) {
  fs.writeFileSync(
    `${__dirname}/data/stats.txt`,
    item.join('\n').replaceAll(',', ' '),
    'utf-8'
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
