const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const arr = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8').split(EOL).slice(0, -1);
  return arr;
}

function getLightsaberScores() {
  const score = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').split(EOL);
  return score.map((el) => +el);
}

function getStats() {
  const arr = getPadawanNames();
  const score = getLightsaberScores();
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result[i] = [arr[i], +score[i]];
  }
  return result;
}

function writeStats() {
  const arrToResult = getStats().map((el) => el.join(' '));
  const result = fs.writeFileSync(`${__dirname}/data/stats.txt`, arrToResult.join(EOL));
  return result;
}

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};
