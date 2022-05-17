const fs = require('fs')

function getPadawanNames(){
let array = fs.readFileSync('./data/padawans.txt')


return array.split('\n')
}
console.log(getPadawanNames())


// function getLightsaberScores(){
//   let array = fs.readFileSync('./data/scores.txt').toString().split('')


// return array
// }









module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
