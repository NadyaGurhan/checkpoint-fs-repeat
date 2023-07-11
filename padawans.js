const fs = require('fs');
let padawans = fs.readFileSync('./data/padawans.txt').toString()
let array = []
function getPadawanNames(){
  for(let i = 0; i < padawans.length; i++){
    araay.push(padawans[i])
  }
      
// очень печально все...
}
console.log(getPadawanNames());


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
