const fs = require('fs')
const name = fs.readFileSync('./data/padawans.txt','utf-8')
const nomer = fs.readFileSync('./data/scores.txt','utf-8')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames (){
  const names = name.split('\n')
  const name1 = names.pop()
  return names;

}

function getLightsaberScores (){
  const nomer1 = []
  const nomers = nomer.split('\n')
  for( let i = 0; i < nomers.length; i+=1){
    nomer1.push(Number(nomers[i]))
  }
  
  return nomer1;

}

function getStats(){

}

function writeStats(){

}