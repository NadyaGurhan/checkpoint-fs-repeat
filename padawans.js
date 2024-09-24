const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8')

function getPadawanNames(){
 const result = padawans.split('\r\n');
  return result
}
console.log(getPadawanNames());
 

function getLightsaberScores(){
const result = scores.split('\r\n')
return result.map((el)=>Number(el))
}

console.log(getLightsaberScores());

function getStats(){

}

function writeStats(){}