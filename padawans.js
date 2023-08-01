const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawans.pop();
  return padawans;
};
getPadawanNames();

function getLightsaberScores() {
  const spec = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const padawan = getPadawanNames()
  
  console.log(padawan)
  // for (let i = 0; i < spec.length; i++){

  // }
};
getLightsaberScores();

function getStats(){

};

function writeStats (){

};
