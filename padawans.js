const fs = require('fs');

const data = fs.readFileSync('./data/padawans.txt', 'utf-8');
const data2 = fs.readFileSync('./data/scores.txt', 'utf-8');
const dataArr = data.split('\n').slice(0, data.split('\n').length - 1);
const dataArr2 = data2.split('\n').map((el) => Number(el));

console.log(dataArr);

const getPadawanNames = () => dataArr;

const getLightsaberScores = () => dataArr2;

const getStats = () => {
  const arr = [];
  for (let i = 0; i < dataArr.length; i += 1) {
    arr.push([dataArr[i], dataArr2[i]]);
  }
  return arr;
};

const writeStats = () => {
  const stats = getStats().join('\n').replaceAll(',', ' ');
  fs.writeFileSync('./data/stats.txt', `${stats}`, 'utf-8');
  return stats;
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
