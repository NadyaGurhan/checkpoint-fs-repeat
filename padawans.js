const fs = require('fs');

function getPadawanNames() {
  let m = fs.readFileSync("data/padawans.txt", "utf8");
 return m.split('\n');
}
// function getLightsaberScores () {

// }
// function getStats (){

// }
// function writeStats (){

// }
module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
