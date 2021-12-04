const {
  readFileSync, open, writeFileSync, appendFileSync,
} = require('fs');

const getPadawanNames = () => readFileSync('./data/padawans.txt', 'utf-8').split('\n').filter((line) => line !== '');

const getLightsaberScores = () => readFileSync('./data/scores.txt', 'utf-8').split('\n').map((item) => +item);

const getStats = () => {
  const resault = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  for (let i = 0; i < 4; i += 1) {
    if (names[i] === '' || scores[i] === '') {
      return;
    }
    resault.push([names[i], +scores[i]]);
  }
  return resault;
};

const writeStats = () => {
  const resault = getStats();
  const newRes = resault.map((item) => item.join(' '));
  writeFileSync('./data/stats.txt', newRes.join('\n'));
  return newRes.join('\n');
};


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
