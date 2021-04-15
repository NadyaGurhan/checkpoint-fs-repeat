
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const fs = require('fs')
  const arrData = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return arrData;
}


function getLightsaberScores() {
  const fs = require('fs')
  const arrData = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
  const result = arrData.map(el => Number(el));
  return result;
}

function getStats() {
  const arr1 = getPadawanNames();
  const arr2 = getLightsaberScores();
  const stats = [];
  const result = [];
  for (let i = 0; i < 4; i++) {
    stats.push(arr1[i]);
    stats.push(arr2[i]);
  }
  const newArr0 = stats.slice(0, 2);
  const newArr1 = stats.slice(2, 4);
  const newArr2 = stats.slice(4, 6);
  const newArr3 = stats.slice(6, 8);

  result.push(newArr0);
  result.push(newArr1);
  result.push(newArr2);
  result.push(newArr3);
  return result;
}

function writeStats() {
  const fs = require('fs')
  const data = getStats();
  const newData = data.map(el => el.join(' ')).join('\n');
  return fs.writeFileSync('./data/stats.txt', JSON.stringify(newData));
}
