const fs = require('fs');

function getPadawanNames(){
  const padawans = './data/padawans.txt'
  const readFile = fs.readFileSync(padawans, 'utf8');
  const sortA = readFile.split('\n');

  sortA.pop();
  
  return sortA;
}



function getLightsaberScores(){
  const scores = './data/scores.txt'
  const readFile = fs.readFileSync(scores, 'utf8');
  const sortA = readFile.split('\n');
 
  return sortA;
}

function getStats(){

}

function writeStats(){

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
