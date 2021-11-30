const { readFileSync, open, writeFileSync, appendFileSync } = require('fs');

const getPadawanNames = () => {
  const all = [];
  readFileSync('./data/padawans.txt', 'utf-8').toString().split('\n').map((item) => {
    if (item === '') {
      return;
    }
    all.push(item);
  });

  return all;
};

const getLightsaberScores = () => {
  const all = [];
  readFileSync('./data/scores.txt', 'utf-8').toString().split('\n').map((item, i) => {
    if (i === 0) {
      all.push(parseFloat(item));
      return;
    }
    all.push(+item);
  });
  // console.log(all)
  return all;
};

const getStats = () => {
  const resault = [];
  const path = './data/stats.txt';
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  for (let i = 0; i < 4; i++) {
    if (names[i] === '' || scores[i] === '') {
      return;
    }
    resault.push([names[i], scores[i]]);
  }
  const fileStats = appendFileSync(path, resault);
  // writeFileSync('./data/stats.txt', resault);
  console.log(resault);
  return resault;
};

getPadawanNames();
getLightsaberScores();
getStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // getStats,
  // writeStats,
};
