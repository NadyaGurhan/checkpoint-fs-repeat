const fs = require('fs');

function getPadawanNames(){
  let arrNames = [];
  arrNames = fs.readFileSync('./data/padawans.txt', 'utf8').split("\n");
  return(arrNames);
}

function  getLightsaberScores(){
  let arrScores = [];
  arrScores = fs.readFileSync('./data/scores.txt', 'utf8').split("\n");
  return(arrScores);
}

function  getStats(){
  const lines = fs.readFileSync('./data/padawans.txt', 'utf8');
  return(lines);
}

function writeStats(){
  const lines = fs.readFileSync('./data/padawans.txt', 'utf8');
  return(lines);
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
