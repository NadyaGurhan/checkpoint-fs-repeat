const fs = require('fs');

const getPadawanNames = () => {
  const data = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').splice(0, 4);
  return data;
};
const getLightsaberScores = () => {
  const data1 = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => +el);
  return data1;
};
const getStats = () => {
  const data2 = getPadawanNames();
  const data3 = getLightsaberScores();
  const arr = [];
  for (let i = 0; i < data2.length; i++) {
    arr.push([data2[i], data3[i]]);
  }
  return arr;
};
const writeStats = () => {
  const data4 = getStats();
  const arr2 = data4.map((el) => el.join(' ')).join('\n');
  // console.log(arr2);
  return fs.writeFileSync('./data/stats.txt', arr2);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
