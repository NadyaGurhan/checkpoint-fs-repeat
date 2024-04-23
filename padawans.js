const fs = require('fs');
const path = require('path');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
  const padawansName = padawans.split('\n');
  return padawansName.filter((item) => item);
}

function getLightsaberScores() {
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');
  const scoresArr = scores.split('\n');
  return scoresArr.filter((item) => item).map((item) => Number(item));
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const statArr = [];

  for (let i = 0; i < padawans.length; i += 1) {
    statArr.push([padawans[i], scores[i]]);
  }

  return statArr;
}

function writeStats() {
  const stats = getStats();
  const statsData = stats.map((item) => item.join(' ')).join('\n');

  const folderName = 'data';
  const fileName = 'stats.txt';
  const filePath = path.resolve(folderName, fileName);
  fs.writeFileSync(filePath, statsData);
}
