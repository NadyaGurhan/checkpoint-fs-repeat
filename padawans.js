const fs = require('fs');
const padawan = fs.readFileSync("./data/padawans.txt" , "utf8");
const arr = padawan.trim().split('/n')
// console.log(arr)
function getPadawanNames () {
return arr
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
