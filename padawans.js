const fs = require('fs')
const {EOL} = require('os')
function getPadawanNames(){
  const padawans = fs.readFileSync('./data/padawans.txt','utf-8')
  return padawans.split(', ');
}
function getLightsaberScores(){
  const scores = fs.readFileSync('./data/scores.txt','utf-8')
  return scores.split('\n').map(el=>Number(el))
}
function getStats(){
  const padawans = fs.readFileSync('./data/padawans.txt','utf-8').split(', ');
  const scores = fs.readFileSync('./data/scores.txt','utf-8').split('\n').map(el=>Number(el));
  const massiv = [];
  for(let i = 0 ; i<padawans.length;i++){
    let newMassiv = [];
    newMassiv.push(padawans[i]);
    newMassiv.push(scores[i]);
    massiv.push(newMassiv);
  }
  return massiv;
}
function writeStats(arr){
  fs.writeFileSync('./data/stats.txt',arr.join(EOL).replace(/[,]/gi,' '))
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
