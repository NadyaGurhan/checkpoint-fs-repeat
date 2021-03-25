
const fs = require("fs");




function getPadawanNames() {


  let padawanNames = fs.readFileSync('./data/padawans.txt', "utf8");
  let padawan_array = padawanNames.split('\n').slice(0, -1)

  return padawan_array

}

function getLightsaberScores() {
  let grades = fs.readFileSync('./data/scores.txt', "utf8");
  let grades_array = grades.split('\n').map(el => Number(el))


  return grades_array
}

function getStats() {
  let grades = fs.readFileSync('./data/scores.txt', "utf8");
  let padawanNames = fs.readFileSync('./data/padawans.txt', "utf8");
}
function writeStats() {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
