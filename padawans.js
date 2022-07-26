const fs = require('fs')
module.exports = {
  // getPadawanNames,
  // getLightsaberScores,
  getStats,
  // writeStats,
};


// const namesStr = fs.readFileSync('data/padawans.txt', 'utf8');
// console.log(namesStr)
// const namesArr = namesStr.trim().split('\n');
// console.log(namesArr)


// function getPadawanNames(){
//   return namesArr
// }
// console.log(getPadawanNames())

// const scoresStr = fs.readFileSync('data/scores.txt', 'utf8');
// console.log(scoresStr)
// const scoresArr = scoresStr.trim().split('\n');
// console.log(scoresArr)
// let arrOfNum = scoresArr.map((el) => +(el))
// console.log(arrOfNum)


// function getLightsaberScores() {
// return arrOfNum;
// }
// console.log(getLightsaberScores());

// const namesStr = fs.readFileSync('data/padawans.txt', 'utf8');
// console.log(namesStr)
// const namesArr = namesStr.trim().split('\n');
// console.log(namesArr)

// const scoresStr = fs.readFileSync('data/scores.txt', 'utf8');
// console.log(scoresStr)
// const scoresArr = scoresStr.trim().split('\n');
// console.log(scoresArr)
// let arrOfNum = scoresArr.map((el) => +(el))
// console.log(arrOfNum)


function getStats(){
let result1 = [];
result1.push(namesArr[0],arrOfNum[0])
console.log(result1)
let result2 = [];
result2.push(namesArr[1],arrOfNum[1])
console.log(result2)
let result3 = [];
result3.push(namesArr[2],arrOfNum[2])
console.log(result3)
let result4 = [];
result4.push(namesArr[3],arrOfNum[3])
console.log(result4)

let newArr = [];
newArr.push(result1, result2, result3, result4)


  return newArr
}
console.log(getStats())



const stats = getStats();
const filePath = 'data/stats.txt'
fs.writeFileSync(filePath)

   function writeStats(stats) {

    return
   }


console.log(getStats())