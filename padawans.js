const fs = require("fs");

function getPadawanNames(){
  let filePath = "data/padawans.txt";
  let namesHero = fs.readFileSync(filePath, "utf8");
  return namesHero .split("\n").slice(0,4);
}
function getLightsaberScores() {
  let filePath = "data/scores.txt";
  let  nambersSkil = fs.readFileSync(filePath, "utf8");
  return nambersSkil.split("\n");
}
function getStats() {

}







module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  //writeStats,
};
//console.log(getLightsaberScores())
