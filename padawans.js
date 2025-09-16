const fs = require('fs')

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt','utf-8').split('\r\n').filter(Boolean)
  return names


}
console.log(getPadawanNames())


function getLightsaberScores() {
  

}
console.log(getLightsaberScores() )



function getStats() {

}
console.log(getStats())



function writeStats() {

}
console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
