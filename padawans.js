const fs = require('fs');

function getPadawanNames() {
  const dataNames = fs.readFileSync('./data/padawans.txt', 'utf-8').trim();
  const nameArray = dataNames.split('\n');
  return nameArray;
}

function getLightsaberScores() {
  const dataScores = fs.readFileSync('./data/scores.txt', 'utf-8').trim();
  let scoreArray = dataScores.split('\n');
  scoreArray = scoreArray.map((el) => parseFloat(el));
  return scoreArray;
}

function getStats() {
  const nameArray = getPadawanNames();
  const scoreArray = getLightsaberScores();
  const statsArray = [];
  for (let i = 0; i < nameArray.length; i += 1) {
    statsArray[i] = [];
    statsArray[i].push(nameArray[i], scoreArray[i]);
  }
  return statsArray;
}

function writeStats(stats) {
  let text = '';
  text = stats.join('\n');
  text = text.replace(/,/g, ' ');
  fs.writeFileSync('./data/stats.txt', text);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
