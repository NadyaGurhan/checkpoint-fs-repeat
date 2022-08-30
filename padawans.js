const fs = require('fs');
let pads;
let scores;
let stat=[];

function getPadawanNames(){
 return pads=fs.readFileSync('data/padawans.txt','utf8').split('\n');

}

function getLightsaberScores() {
  let score=fs.readFileSync('data/scores.txt','utf8').split('\n');
  return scores=score.map(sc=>Number(sc));
}

function getStats(){
  for (let i=0;i<pads.length;i++){
    stat.push([pads[i],scores[i]])
  }
  return stat
}

function writeStats(){
  for (let i=0;i<stat.length; i++) {
  return fs.appendFileSync('./data/stats.txt',`${stat[i]}\n`) 
  }
}

console.log(getLightsaberScores())
console.log(getPadawanNames())
console.log(getStats())
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
