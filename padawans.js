
const fs = require('fs');

function getPadawanNames(){
  let filePath = "./data/padawans.txt";
  let data = fs.readFileSync(filePath, "utf8");
  let splittted = data.trim().split("\n")
  return splittted
}
function getLightsaberScores() {
  let filePath = "./data/scores.txt";
  let data = fs.readFileSync(filePath, "utf8");
  let num= data.split('\n').map((el)=> +el );
  return num
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
