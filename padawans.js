const fs = require('fs');

const getPadawanNames = () =>
  fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);

const getLightsaberScores = () =>
  fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((i) => Number(i));

const getStats = () => {
  const padawanNames = getPadawanNames();
  const lightaberScores = getLightsaberScores();
  let stats = [];

  for (let i = 0; i < padawanNames.length; i++) {
    stats.push([padawanNames[i], lightaberScores[i]]);
  }
  return stats;
};

const writeStats = () => {
  const padawanNames = getPadawanNames();
  const lightaberScores = getLightsaberScores();
  let content = '';
  for (let i = 0; i < padawanNames.length; i++) {
    content += `${padawanNames[i]} ${lightaberScores[i]}\n`;
  }
  content = content.slice(0, -1);
  fs.writeFileSync('./data/stats.txt', content);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
