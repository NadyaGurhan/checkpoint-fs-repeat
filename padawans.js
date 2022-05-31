const fs = require('fs');

function getPadawanNames() {
  let spisok = fs.readFileSync('data/padawans.txt', 'utf8')
  let arr = spisok.split('\n')
  arr.pop()
  return arr
}

function getLightsaberScores() {
  let arr = fs.readFileSync('data/scores.txt', 'utf8').split('\n')
  let arr1 = []
  for(let i = 0; i < arr.length; i++){
    arr1.push(Number(arr[i]))
  }
  return arr1
}
  

function getStats(){
 let arr = getPadawanNames()
 let arr1 = getLightsaberScores()
 let newA= []
 for(let i = 0; i < 4; i++){
   newA[i] = [arr[i],arr1[i]]
}
return newA
}

function writeStats(){

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

