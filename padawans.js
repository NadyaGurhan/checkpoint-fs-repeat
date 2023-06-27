/* eslint-disable no-plusplus */
const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawans.split('\n').filter(Boolean);
}

function getLightsaberScores() {
  const lightsaber = fs.readFileSync('./data/scores.txt', 'utf-8');
  return lightsaber.split('\n').map(parseFloat);
}

function getStats() {
  const padawans = getPadawanNames();
  const lightsaber = getLightsaberScores();
  const result = [];

  for (let i = 0; i < padawans.length; i++) {
    const name = padawans[i];
    const score = lightsaber[i];
    result.push([name, score]);
  }

  return result;
}

function writeStats(result) {
  const statistics = result.map(([name, score]) => `${name} ${score}`).join('\n');
  fs.writeFileSync('./data/stats.txt', statistics, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
