const fs = require('fs');


function getPadawanNames(){
  let name=fs.readFileSync("./data/padawans.txt", "utf8");
  return name;
}
getPadawanNames();

function getLightsaberScores(){
  let name=fs.readFileSync("./data/scores.txt", "utf8");
  return name;
}

getLightsaberScores();


function getStats(){
  let name=fs.readFileSync("./data/padawans.txt", "utf8");
  console.log('пока ничего');
}
getStats();


function writeStats(){
  let name=fs.readFileSync("./data/padawans.txt", "utf8");
  console.log('пока ничего');

}







module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};