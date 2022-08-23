const fs = require('fs')

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n', 4);
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

const getPadawanNames = () => {
  return padawans;
}

const getLightsaberScores = () => {
  return scores.map(el => Number(el));
}

const getStats = () => {
  const numbersFromScores = scores.map(el => Number(el));
  let statsArr = [];
  for (let i = 0; i < padawans.length; i++) {
    const padawansScore = [padawans[i], numbersFromScores[i]];
    statsArr.push(padawansScore);
  }
  return statsArr;
}

const writeStats = () => {
  const stats = getStats().join('\n').replace(/[, ]+/g, " ");
  fs.writeFileSync(`./data/stats.txt`, stats, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};