const fs = require('fs')
function getPadawanNames(){
  return fs.readFileSync("./padawans.txt", "utf8");
} 
function getLightsaberScores(){
  return fs.readFileSync("./scores.txt", "utf8");
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
