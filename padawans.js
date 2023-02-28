const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
 function getPadawanNames () {
  const arrNames = fs.readFileSync(`./data/padawans.txt`, "utf8");
  const names = arrNames.trim().split("\n");
  return names;
 };
 function getLightsaberScores () {
  let arrScores = fs.readFileSync(`./data/scores.txt`, "utf8");
  
  const scores = arrScores.split("\n");

  return scores;
 }
 