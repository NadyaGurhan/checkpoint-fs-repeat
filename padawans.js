const fs = require('fs');
function getPadawanNames() {
  let arr;
  const filePath = './data/padawans.txt';
  let names = fs.readFileSync(filePath, 'utf-8');

  arr = names.split('\n');
  arr.pop();
  return arr;
}
function getLightsaberScores() {
  let arr;
  const newArr = [];
  const filePath = './data/scores.txt';
  let names = fs.readFileSync(filePath, 'utf-8');
  arr = names.split('\n');
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(+arr[i]);
  }
  return newArr;
}
console.log(getLightsaberScores());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
