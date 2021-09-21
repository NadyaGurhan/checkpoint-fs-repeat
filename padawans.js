const fs = require('fs');


function getPadawanNames() {
  const namesPadawans = fs.readFileSync("./data/padawans.txt", "utf8").split("\n").slice(0, 4);
}
getPadawanNames(); 

function getLightsaberScores() {
  const arrScoresPadawans = fs.readFileSync("./data/scores.txt", "utf8").split("\n");
  

}
getLightsaberScores();



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
