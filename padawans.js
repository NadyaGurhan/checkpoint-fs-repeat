const fs = require('fs');

const padawanNames = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
const padawanScores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');

function getPadawanNames() {
  const resArr = padawanNames.split('\n').slice(0, 4);
  return resArr;
}

function getLightsaberScores() {
  const scoresArr = padawanScores.split('\n');
  const resScoresArr = scoresArr.map((elem) => Number(elem));
  return resScoresArr;
}

function getStats() {
  const statsArr = [];
  const nameArr = padawanNames.split('\n').slice(0, 4);
  const scoresArr = padawanScores.split('\n');
  const resScoresArr = scoresArr.map((elem) => Number(elem));
  for (let i = 0; i < nameArr.length; i += 1) {
    const statsArrEl = [];
    statsArrEl.push(nameArr[i]);
    statsArrEl.push(resScoresArr[i]);
    statsArr.push(statsArrEl);
  }
  return statsArr;
}

function writeStats() {
  const content = getStats();
  const resArr = content.map((el) => el.join(' '));
  const finalArr = resArr.join('\n');
  return fs.writeFileSync('./data/stats.txt', finalArr, 'utf8');
}

writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
