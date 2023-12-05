const fs = require("fs");

let getPadawanNames = () => {
  let result = fs.readFileSync("./data/padawans.txt", "utf8");
  return result.split('\n').slice(0,-1);
};
let getLightsaberScores =() =>{

}
let   getStats = () => {
  
}
 let writeStats =() => {

 }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};