const fs = require('fs');

getStats();

function getPadawanNames(){
  let padawanList = fs.readFileSync('./data/padawans.txt','utf8');
  padawanList = padawanList.split('\n');
  padawanList.pop();
  return padawanList;
};

function getLightsaberScores(){
  let scoreList = fs.readFileSync('./data/scores.txt','utf8').split('\n');
  for (let i = 0; i < scoreList.length; i++){
    scoreList[i] = +scoreList[i];
  }
  return scoreList;
};


function getStats(){
  let sidearr = [];
  let arr = [];
  let names = NaN;
  let scores = NaN;
  for (let i = 0; i < getPadawanNames().length; i++){
    arr.push(getPadawanNames()[i]);
    arr.push(getLightsaberScores()[i]);
  }
  console.log(arr);
};

function writeStats(){
  
};


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
