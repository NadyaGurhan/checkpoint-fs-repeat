const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  const arr = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const newArr = arr.trim();
  const newArr1 = newArr.split('\n');
  return newArr1;
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf-8');
  const data2 = data.split('\n');
  const data3 = data2.map((el) => Number(el));
  return data3;
}

