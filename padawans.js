const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const names = fs.readFileSync("./data/padawans.txt", "utf-8")

 function getPadawanNames() {
  
  const name = names.split("\n")
  const name1 = name.pop();

return name

 }

 
 function getLightsaberScores(){

 }
  function getStats() {

  }
 function writeStats(){

 }
