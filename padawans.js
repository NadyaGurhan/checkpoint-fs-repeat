const { EOL } = require('os');
const fs = require('fs')
const data = fs.readFileSync('./data/padawans.txt', 'utf-8')
const dataArr = data.split(EOL)
console.log(dataArr)

function getPadawanNames() {
  let padawansArr = [] 
  padawansArr.push(data)
  return padawansArr
}
// console.log(getPadawanNames())

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
