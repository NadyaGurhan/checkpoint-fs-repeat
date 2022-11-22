const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
const padawansArr = padawans.split('\n').slice(0, -1);
const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');
const scoresArr = scores.split('\n');

function getPadawanNames() {
  return padawansArr;
}

// console.log(padawansArr);

function getLightsaberScores() {
  for (let i = 0; i < scoresArr.length; i += 1) {
    scoresArr[i] = +scoresArr[i];
  }
  return scoresArr;
}

// console.log(scoresArr);

function getStats() {
  const statistic = [];
  for (let i = 0; i < padawansArr.length; i += 1) {
    statistic.push([padawansArr[i], scoresArr[i]]);
  }
  return statistic;
}

function writeStats() {
  const stats = getStats();
  const filePath = `${__dirname}/data/stats.txt`;
  const data = stats.join('\n');
  const result = data.replaceAll(',', ' ');
  return fs.writeFileSync(filePath, result);
}

// console.log(result)
