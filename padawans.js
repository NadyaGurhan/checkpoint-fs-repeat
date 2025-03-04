const fs = require('fs')
function getPadawanNames(){
  return fs.readFileSync("data/padawans.txt", "utf-8").trim().split('\n')
}

function getLightsaberScores(){
  return fs.readFileSync("data/scores.txt", "utf-8").trim().split('')
}

function getStats(){
  return fs.readFileSync("data/padawans.txt", "utf-8").trim().split('')
}

function writeStats(){
  return fs.readFileSync("data/padawans.txt", "utf-8").trim().split('')
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
