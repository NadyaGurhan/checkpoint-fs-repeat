const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames () {
  const padawansText = fs.readFileSync('./data/padawans.txt', 'utf-8').trim();
  const padawans = padawansText.split('\n');
  return padawans;
}

function getLightsaberScores () {
  const scoresText = fs.readFileSync('./data/scores.txt', 'utf-8').trim();
  const scores = scoresText.split('\n');
  const scoresNum = scores.map((elem) => Number(elem));
  return scoresNum;
}

function getStats () {
  const padawansText = fs.readFileSync('./data/padawans.txt', 'utf-8').trim();
  const padawans = padawansText.split('\n');
  const scoresText = fs.readFileSync('./data/scores.txt', 'utf-8').trim();
  const scores = scoresText.split('\n');
  const scoresNum = scores.map((elem) => Number(elem));
  let stats = [];
  for (let i = 0; i < padawans.length; i++) {
    stats[i] = [padawans[i], scoresNum[i]];
  }
  return stats;
}

function writeStats (arr) {
  const statsStr = arr.map((elem) => elem.join(' '));
  fs.writeFileSync(`./data/stats.txt`, statsStr.join('\n'));
}