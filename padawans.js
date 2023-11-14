const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  //getStats,
  //writeStats,
};

function getPadawanNames(){
  let name = fs.readFileSync("./data/padawans.txt", "utf8")
  return name.push()
}
console.log(getPadawanNames())


function getLightsaberScores(){
  return fs.readFileSync("./data/scores.txt", "utf8")
}
console.log(getLightsaberScores())


// function getStats(){
// for (let i=0; i<)
// }