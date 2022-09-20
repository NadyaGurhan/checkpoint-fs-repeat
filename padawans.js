const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  const name = fs.readFileSync('./data/padawans.txt', 'utf8');
  const pName = name.split('\n');
  pName.join();
return pName;
}

function getLightsaberScores(){
  const scoresT = fs.readFileSync('./data/scores.txt', 'utf8');
  const scores = scoresT.split('\n');
  scores.join();
  return scores;
}
function getStats(){

}
function writeStats(){

}