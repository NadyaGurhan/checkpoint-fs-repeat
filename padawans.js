const fs = require('fs');
// class Padawan{
//   constructor(name, stats){
//     this.name = name
//     this.stats = stats
//   }
// }
function getPadawanNames(){
  return fs.readFileSync("./data/padawans.txt", "utf8").trim().split('\n');
}
console.log(getPadawanNames())

function getLightsaberScores(){
  let d = fs.readFileSync("./data/scores.txt", "utf8").trim().split();
  return d.map()
}
function getStats(){

}
function writeStats(){

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
