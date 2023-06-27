const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');

const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

const getPadawanNames = () => padawans;

const getLightsaberScores = () => scores.map((el) => Number(el));

// как это сделать через методы?????????????????????????????????
// только через цикл получилось додуматься
// тут можно было создать переменную вместо getLightsaberScores(), просто делаю быстрее
const getStats = () => {
  const result = [];
  for (let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], getLightsaberScores()[i]]);
  }
  return result;
};



const writeStats = () => {
  const result = getStats()
  fs.writeFileSync(`./data/stats.txt`, result.join('\n').replace(/,/g, ' '));
};


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
