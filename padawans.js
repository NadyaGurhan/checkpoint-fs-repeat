const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
const names1 = fs.readFileSync('./data/scores.txt', 'utf-8');
// console.log(readPadawans);


function getPadawanNames() \{
  let arr = names.split('\n');
  let arr1 = arr.pop();
  return arr
}
// console.log(getPadawanNames());

function getLightsaberScores(){

}
