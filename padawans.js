const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt', 'utf8').split('\n').filter((el) => el);
  return names;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf8').split('\n').filter((el) => el).map((el) => +el);
  return scores;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const result = names.map((el, i) => [el, scores[i]]);
  return result;
}

function writeStats(dataArray) {
  let res = '';
  dataArray.map((el, i, array) => {
    if (i !== array.length - 1) {
      res += `${el[0]} ${el[1]}\n`;
    } else {
      res += `${el[0]} ${el[1]}`;
    }
  });
  fs.writeFileSync('data/stats.txt', res);
  return res;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
