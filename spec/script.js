

const{getPadawanNames, getLightsaberScores} = require(padawans.js)

function getPadawanNames(){
  let fs = require('fs');
  let names = fs.readFileSync('padawans.txt', 'utf8').split('\n').slice(0,-1);
  console.log(names)
  return names;
}
getPadawanNames()

function getLightsaberScores(){
  let fs = require('fs');
  let numbers = fs.readFileSync('scores.txt', 'utf8').split('\n');
  console.log(numbers)
  
  return numbers;
}
getLightsaberScores()

module.exports = {
  getPadawanNames, 
  getLightsaberScores,
}
