const fs = require('fs');

function getPadawanNames() {
  const arr = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  return arr;
}
console.log(getPadawanNames())

function getLightsaberScores() {
  const arr1 = [];
  const arr = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < arr.length; i += 1) {
    arr1.push(+arr[i]);
  }
  return arr1;
}


function getStats() {
  const names = getPadawanNames()
  const scores = getLightsaberScores()
  const res = [];
  for (let i = 0; i < names.length; i += 1) {
    const arr1 = [];
    for (let j = 0; j < scores.length; j += 1) {
      if (i === j) {
        arr1.push(names[i]);
        arr1.push(+scores[j])
      }
    }
    res.push(arr1)
   
  }
  return res
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  
};
