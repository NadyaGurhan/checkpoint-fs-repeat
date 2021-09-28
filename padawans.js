const fs = require('fs');
const { get } = require('http');

// let padavantxt = 'data/padawans.txt';
// let scoretxt = 'data/scores.txt';
// let dataPadavan = fs.readFileSync(padavantxt, 'utf8');
// let dataScore = fs.readFileSync(scoretxt, 'utf8');
// dataPadavan += 'text';


function getPadawanNames() {
let padavantxt = 'data/padawans.txt';
//let scoretxt = 'data/scores.txt';
let dataPadavan = fs.readFileSync(padavantxt, 'utf8');
// let dataScore = fs.readFileSync(scoretxt, 'utf8');

return  dataPadavan.trim().split('\n'); 
}


function getLightsaberScores() {
  let scoretxt = 'data/scores.txt';
  let dataScore = fs.readFileSync(scoretxt, 'utf8');
  return dataScore.trim().split('\n').map(elem => Number(elem)) 
}
getPadawanNames()
module.exports = {
getPadawanNames,
getLightsaberScores,
//   getStats,
//   writeStats,
}
