const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


const names = fs.readFileSync('./data/padawans.text');
getPadawanNames () {
  const arrNames = names.split("\n")
  return arrNames;
};


const scores = fs.readFileSync('./data/scores.text');
getLightsaberScores () {
  const getScores = scores.split("\n");
  return getScores;
};

getStats () {
  const namesP = getPadawanNames();
  const scoresP = getLightsaberScores();
  const stats = namesP.map(scoresP) 
}