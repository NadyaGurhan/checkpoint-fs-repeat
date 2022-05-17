const fs = require('fs');


function getPadawanNames() {
  const str = fs.readFileSync('./data/padawans.txt', 'utf-8');
  console.log(str);
  const arr = str.split('\n');
  arr.pop();
  console.log(arr);
  return arr;
}
getPadawanNames()

function getLightsaberScores() {
  let arr = [];  
  str = fs.readFileSync('./data/scores.txt', 'utf-8');
  arr = str.split('\n');
  console.log(arr);
  return arr.map((el) => Number(el));
}
getLightsaberScores();

function getStats() {
  const arr_1 = getPadawanNames();
  const arr_2 = getLightsaberScores();
  let arr_3 = [];
  for (let i = 0; i < arr_1.length; i += 1) {
    arr_3[i] = [];
    arr_3[i].push(arr_1[i], arr_2[i]);
  }
  return arr_3;
}
getStats();

function writeStats() {
  content = getStats().join('\n').split(',').join(' ');
  const stats = fs.writeFileSync('./data/stats.txt', content);
  console.log(fs.readFileSync('./data/stats.txt', 'utf-8'));
  return stats;
}
writeStats();


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
