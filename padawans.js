const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};



function getPadawanNames(){

 fs.readFileSync('data/padawans.txt', 'utf8')
}
console.log(getPadawanNames())


