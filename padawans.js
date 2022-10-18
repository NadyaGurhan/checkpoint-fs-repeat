const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats ,
  writeStats, 
};

 function getPadawanNames(){ 
  let names =fs.readFileSync('./data/padawans.txt', 'utf8').split('\n')
  const arr = names.filter((el) =>el.length !==0 )
  return arr;

  
}   


function getLightsaberScores(){
  let names = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  console.log(names);
}


function getStats() {
 stats = [];
 let names =  getPadawanNames()
 let scores = getLightsaberScores()
 names.forEach(n =>{
  n
 })

}

function writeStats() {

}



getPadawanNames()