const fs = require('fs');

function getPadawanNames(){
  let row = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return row.split('\n').filter(elem => elem !== '')
}


function getLightsaberScores(){
  let row = fs.readFileSync('./data/scores.txt', 'utf-8');
  const row1= row.split('\n')
   const row2 =row1.map( elem => Number(elem));
   return row2
}
function getStats(){
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8');

  let arr = [];
  const padawansArr = padawans.split('\n').filter(elem => elem !== '')
  


  const row1= scores.split('\n')
  const rowN =row1.map( elem => Number(elem));
  row2 = rowN.map(elem => Number(elem))
 

  arr.length= 4
  for (let index = 0; index < arr.length; index++) {
    arr[index] = []
  }

  arr[0][0] = padawansArr[0]
  arr[0][1] = row2[0]
  
  arr[1][0] = padawansArr[1]
  arr[1][1] = row2[1]

  arr[2][0] = padawansArr[2]
  arr[2][1] = row2[2]

  arr[3][0] = padawansArr[3]
  arr[3][1] = row2[3]

 return arr
}

function writeStats(){

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
