const fs = require('fs');


function getPadawanNames() {
  let arr = [];
  
  str = fs.readFileSync('./data/padawans.txt', 'utf-8');
  arr = str.split('\n');
  arr.pop();
  return arr;
}

function getLightsaberScores() {
  let arr = [];
  
  str = fs.readFileSync('./data/scores.txt', 'utf-8');
  arr = str.split('\n');
  return arr.map((el) => Number(el));
}
console.log(getLightsaberScores());

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


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
