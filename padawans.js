const { FORMERR } = require('dns');
const fs = require('fs');
const { get } = require('http');
let padawanData = fs.readFileSync('./data/padawans.txt').toString().split("\n");
let scoreData = fs.readFileSync('./data/scores.txt').toString().split("\n");

function getPadawanNames() {
  return padawanData;
}
function getLightsaberScores() {
  return scoreData.map(Number);
}
function getStats() {
  let stats = [];
  let numData=getLightsaberScores();
 
  for (let i = 0; i < padawanData.length; i++) {
    let stat = []
    stat.push(padawanData[i])
    stat.push(numData[i])
    stats.push(stat);
  }
  
  return stats;
}
function writeStats() {

 let stats = getStats().join("\n");
 let statsWoComma=stats.split(',').join(" ");


fs.writeFileSync('./data/stats.txt',statsWoComma,'utf8')
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
