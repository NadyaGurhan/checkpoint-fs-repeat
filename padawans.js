const fs = require("fs")
function getPadawanNames() {
  let arr = fs.readFileSync('data/padawans.txt').toString().split('\n')
  return arr
}
console.log(getPadawanNames([]))

const fs = require("fs")
function getLightsaberScores() {
  let arr = fs.readFileSync('data/scores.txt').toString().split('\n')
  return arr
}
console.log(getLightsaberScores())

const fs = require("fs")
function getStats() {
  let arr = fs.readFileSync('data/padawans.txt').toString().split(',')
  let arr2 = fs.readFileSync('data/scores.txt').toString().split(',')
  //let arr3 = [...arr, ...arr2].join('');
  //let d = arr3.filter(function (item, pos) {return arr3.indexOf(item) == pos});
  let arr3 = [...new Set([...arr ,...arr2])];
console.log(arr3);
  //let arr3 = arr.concat(arr2);

 // for(let i = 0; i < arr.length; i++) {
 //   `${arr[i]}, ${arr2[i]}`
 // }
return arr3.join('\n')
}
console.log(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
