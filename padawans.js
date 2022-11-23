const fs = require('fs');

function getPadawanNames() {
  const padawans = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n')
    .slice(0, -1);
  return padawans;
}

getPadawanNames();

function getLightsaberScores() {
  const saberScores = fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((string) => Number(string));
  return saberScores;
}

getLightsaberScores();

function getStats() {
  const padawans = getPadawanNames();
  const saberScores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], saberScores[i]]);
  }
  return result;
}

getStats();

function writeStats() {
  const result = getStats();
  const data = fs.writeFileSync(
    './data/stats.txt',
    `${result.join('\n').split(',').join(' ')}`
  );
  return data;
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
