const fs = require('fs');

function getPadawanNames() {
  const jediList = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return jediList.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  const skillScoreList = fs.readFileSync('./data/scores.txt', 'utf-8');
  return skillScoreList.split('\n').map(item => +item);
}

function getStats() {
  const arrayJedi = getPadawanNames();
  const arrayScore = getLightsaberScores();
  const statList = [];
  for (let i = 0; i < arrayJedi.length; i++) {
    statList.push([arrayJedi[i], arrayScore[i]]);
  }
  fs.writeFileSync('./data/stats.txt', statList.join('\n').replaceAll(',', ' '));
  return statList;
}

function writeStats() {
  return fs.readFileSync('./data/stats.txt', 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
