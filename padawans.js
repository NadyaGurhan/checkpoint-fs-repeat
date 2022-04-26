
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

let fs = require('fs');
let padawans = fs.readFileSync('data/padawans.txt', 'utf8');
console.log(padawans);



//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
