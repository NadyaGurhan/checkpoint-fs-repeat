const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


const read = fs.readFileSync('./data/padawans.txt', 'utf-8');

console.log(read);

function getPadawanNames(text) {

  let arr = text.split(' ');
  console.log(arr);
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
  }
  return arr;

}
const readText = getPadawanNames(read);
console.log(readText);