function getPadawanNames() {
  const fs = require('fs');
  const namesPadawans = fs.readFileSync("./data/padawans.txt", "utf8").split("\n").slice(0, 4);

console.log(namesPadawans);
}
getPadawanNames(); 

function getLightsaberScores() {
  const fs = require('fs');
  const arrScoresPadawans = fs.readFileSync("./data/scores.txt", "utf8").split("\n");
  const scoresPadawans = arrScoresPadawans.map(Number);

console.log(scoresPadawans);
}
getLightsaberScores();

function getStats() {
  const fs = require('fs');
  const namessPadawans = fs.readFileSync("./data/padawans.txt", "utf8").split("\n").slice(0, 4);
  const scoressPadawans = fs.readFileSync("./data/scores.txt", "utf8").split("\n");

  const result1 = [];
  const result2 = [];
  const result3 = [];
  const result4 = [];
  result1.push(namessPadawans[0], scoressPadawans[0]);
  result2.push(namessPadawans[1], scoressPadawans[1]);
  result3.push(namessPadawans[2], scoressPadawans[2]);
  result4.push(namessPadawans[3], scoressPadawans[3]);
  console.log(result1,result2,result3,result4);
}

getStats();
function writeStats() {
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
