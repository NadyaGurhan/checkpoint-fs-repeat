const fs = require("fs");
const padawans = fs.readFileSync(__dirname+'/data/padawans.txt', 'utf8');
const scores = fs.readFileSync(__dirname+'/data/scores.txt', 'utf8');

 function getPadawanNames() {
 let result = padawans.split('\n')
 return result
 }

 function getLightsaberScores () {
   let result = scores.split('\n')
 return result
 }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
