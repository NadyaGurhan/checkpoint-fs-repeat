const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
let data = [];

function  getPadawanNames() {
  data = fs.readFileSync('data/padawans.txt', "utf8");
  return data 
}

function getLightsaberScores() {
  
  let data2 = fs.readFileSync('data/scores.txt', "utf8");
return [data2] 
}

function getStats() {

}

function writeStats() {

}