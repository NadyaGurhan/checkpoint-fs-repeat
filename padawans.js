const fs = require('fs')
const padawans = fs.readFileSync('/home/vadim/checkpoint1/checkpoint-fs/data/padawans.txt', 'utf8')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  const padawans = fs.readFileSync('/home/vadim/checkpoint1/checkpoint-fs/data/padawans.txt', 'utf8');
  return rigthPadawans = padawans.split('\n');
  
}

function getLightsaberScores(){
  const ligthSaber = fs.readFileSync('/home/vadim/checkpoint1/checkpoint-fs/data/scores.txt', 'utf8')
  let arrLigths = ligthSaber.split('\n')
  let arrNumbers = [];
  for(let i = 0;i < arrLigths.length; i++){
    arrNumbers.push(Number(arrLigths[i]))
  }
  return arrNumbers;
}

function getStats(){
  const padawans = fs.readFileSync('/home/vadim/checkpoint1/checkpoint-fs/data/padawans.txt', 'utf8');
  const ligthSaber = fs.readFileSync('/home/vadim/checkpoint1/checkpoint-fs/data/scores.txt', 'utf8')
  
}

function writeStats(){}