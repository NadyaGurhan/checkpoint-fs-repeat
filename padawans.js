const fs = require('fs');

const getPadawanNames = () => {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n');
  return names;
};

const getStats = () => {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\r\n');
  const scoresNum = scores.map((el) => Number(el));
  const statsArr = [];

  for (let i = 0; i < names.length; i++) {
    statsArr.push([names[i], scoresNum[i]]);
  }

  return statsArr;
};

const getLightsaberScores = () => {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\r\n');
  return scores.map((el) => Number(el));
};

const writeStats = () => {
  const stats = getStats().map((el) => el.join(' '));
  fs.writeFileSync('data/stats.txt', '');

  stats.forEach((el) => {
    fs.appendFileSync('data/stats.txt', `${el}\n`, 'utf8');
  });
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
