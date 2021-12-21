const fs = require('fs');
const { all } = require('micromatch');
const allPadavan = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8'); 
let allScores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
};
function getPadawanNames() {
return allPadavan.split('\n');
}
function getLightsaberScores() {
  let arrScores = allScores.split('\n');
  let numScores = arrScores.map(Number);
return numScores;
}
function getStats() {
  return [[getPadawanNames()[0], getLightsaberScores()[0], [getPadawanNames()[1], getLightsaberScores()[1]], [getPadawanNames()[2], getLightsaberScores()[2]], [getPadawanNames()[3], getLightsaberScores()[3]]]
}
