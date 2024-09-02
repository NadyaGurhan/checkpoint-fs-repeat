const fs = require('fs');

const padawansNamesPath = './data/padawans.txt';
const lightsaberScoresPath = './data/scores.txt';
const names = getPadawanNames();
const scores = getLightsaberScores();

function getPadawanNames() {
  const fileData = fs.readFileSync(padawansNamesPath, 'utf-8');
  const splittedFileData = fileData.split('\n');
  const padawansNameArray = splittedFileData.filter((element) => element.length > 0);
  return padawansNameArray;
}

function getLightsaberScores() {
  const fileData = fs.readFileSync(lightsaberScoresPath, 'utf-8');
  const splittedFileData = fileData.split('\n');
  const lightSaberScoreArray = splittedFileData.map((element) => Number(element));
  return lightSaberScoreArray;
}

function getStats() {
  const stats = [];
  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
}

function writeStats(stats) {
  const fileData = stats.map((element) => `${element[0]} ${element[1]}`).join('\n');
  fs.writeFileSync('data/stats.txt', fileData);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
