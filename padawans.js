const fs = require('fs')

function getPadawanNames(){
  const text = fs.readFileSync('./data/padawans.txt','utf-8')
  let arr = text.split('\n')
  arr.pop()
  return arr
 
}

function getLightsaberScores(){
  const text = fs.readFileSync('./data/scores.txt','utf-8')
  let arr = text.split('\n')
  return arr.map(elem => Nomber(elem))
  
}

function getStats(){
  // const arr2 = 
  return arr2
}

function writeStats(){

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
