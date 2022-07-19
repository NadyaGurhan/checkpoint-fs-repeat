const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    fs.appendFileSync('../data/padawans.txt');
    newArr.push(arr[i]);
  }
  return newArr;
}


// function padawanToArr() {
//   const newArr = [];
//   let data = fs.readFileSync('./data/padawans.txt')
//   for (let i = 0; i < arr.length; i += 1) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }