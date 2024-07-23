const fs = require('fs')
const padawanList = fs.readFileSync(`./data/padawans.txt` ,'utf-8')
const array = fs.readFileSync(`./data/scores.txt`,'utf-8')

function getPadawanNames(){
  return fs.readFileSync(`./data/padawans.txt`,'utf-8')
}


const copyScores = fs.readFileSync(`./data/scores.txt`,'utf-8').split('\n')

function getLightsaberScores(){
  const array = fs.readFileSync(`./data/scores.txt`,'utf-8');
  return array.split('\n')
  
}
console.log(getLightsaberScores())

function getStats(){


}

function writeStats(){

}



//console.log(getPadawanNames('Revan Bastila Shan Jolee Bindo Juhani'))

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
