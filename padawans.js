const fs = require('fs')

function getPadawanNames() {
  let rawData = fs.readFileSync('./data/padawans.txt', 'utf-8');
  rawData = rawData.trim();
  return rawData.split('\r\n');
}

function getLightsaberScores() {
  const rawData = fs.readFileSync('./data/scores.txt', 'utf-8');

  const arrayData = rawData.split('\r\n');
  return arrayData.map((item) => Number(item));
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();

  let array = [];

  for(let i = 0; i < padawans.length; i++) {
    const item = [padawans[i], scores[i]];
    array.push(item);
  }

  return array;
}

function writeStats() {
  let data = getStats();
  data = data.join('\n');
  data = data.replaceAll(',', ' ');
  fs.writeFileSync('./data/stats.txt', data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
