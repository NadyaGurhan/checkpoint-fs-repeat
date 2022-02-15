
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

const fs = require('fs');
const padawanList = fs.readFileSync('./data/padawans.txt', 'utf-8');
function getPadawanNames() {
return padawanList.split('\n')
.slice(0, -1);
}
console.log(getPadawanNames());


const lightScores = fs.readFileSync('./data/scores.txt', 'utf-8');
function getLightsaberScores() {
return lightScores.split('\n')
.map((el) => el * 1)
}
console.log(getLightsaberScores())





// function table() {

// }


