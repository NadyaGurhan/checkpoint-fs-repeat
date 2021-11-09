const fs = require('fs');
const { get } = require('https');
let padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8')
let scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8')

function getPadawanNames(){
 let x = padawans.split('\n');
 let y = x.pop()
 return x;
}

function getLightsaberScores(){
  let x = scores.split('\n')
  for (let i = 0; i < x.length; i++){
    x[i] = +x[i]
  }
  return x;
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
