const fs = require('fs');

function getPadawanNames(){
  let arr = fs.readFileSync('./data/padawans.txt', 'utf-8');
 return arr.split('\n').filter(elem => elem !== '')
}

function getLightsaberScores() {
// let arr2 = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
// let score = [];
// for(let i = 0; i < arr2.length; i++) {
//   score.push(arr2[i])
}

function getStats(){

}

function writeStats() {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};