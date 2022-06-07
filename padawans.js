const fs = require('fs')


function getPadawanNames() {
  let getnames = fs.readFileSync('./data/padawans.txt', "utf-8");

  return getnames.split('\n');

}
getPadawanNames()





function getLightsaberScores() {

  let getLight = fs.readFileSync('./data/scores.txt', "utf-8");
  let getLightsplit = getLight.split("\n")
  return getLightsplit.map(elem => Number(elem));
}
getLightsaberScores()





function getStats() {
let scores = getLightsaberScores
let getnames = getPadawanNames
let newArr = []
for(let i = 0; i<scores.length; i++)
newArr+= push(scores[i]+getnames[i])
return newArr
}
getStats()






function writeStats() {


};













module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
