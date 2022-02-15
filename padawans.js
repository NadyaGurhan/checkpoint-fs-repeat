function getPadawanNames() {
 return padawans.split('/n');
}
const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt');
console.log(getPadawanNames)





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
