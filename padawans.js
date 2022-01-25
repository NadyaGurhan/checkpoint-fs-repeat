const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

function getPadawanNames() {
  let result = padawans;
  result.pop();

  return result;
}

function getLightsaberScores() {
  return scores.map(score => +score);
}

function getStats() {
  return scores.map((score, i) => [padawans[i], +score]);
}

function writeStats() {
  const statsToString = () => {
    let result = '';

    for (let i = 0; i < scores.length; i++) {
      result = `${result}${padawans[i]} ${scores[i]}${i === scores.length - 1 ? '' : '\n'}`;
    }

    return result;
  }

  fs.writeFileSync('data/stats.txt', statsToString());
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
