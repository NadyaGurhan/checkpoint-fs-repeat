const fs = require('fs')
const padowans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const grade = fs.readFileSync('./data/scores.txt', 'utf-8')

// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };


function getPadawanNames() {

  return padowans.split('\r\n')

}
console.log(getPadawanNames());


function getLightsaberScores() {

const newGrade = grade.split('\r\n')
let num = []

for (let i = 0; i < newGrade.length; i++) {
  num.push(Number(newGrade[i]))
}

return num
}
console.log(getLightsaberScores());

