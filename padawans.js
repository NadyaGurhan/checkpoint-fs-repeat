const fs = require('fs')

function getPadawanNames(){
  let pNames = fs.readFileSync('../data/padawans.txt').toString().split();
  return pNames
  }
  console.log(getPadawanNames)

function getLightsaberScores(){
return fs.readFileSync('../data/scores.txt').toString().split();
}

function getStats(){

}

function writeStats(){
fs.appendFileSync
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
