const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf8')
const scores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames(array){
  let arr = '';
  for (let i = 0; i < array.length-1; i++){
    arr+=array[i]
  }
return arr.split('\n').slice(0, arr.length-2)
}


console.log(getPadawanNames(padawans))


function getLightsaberScores(array){
  let arr = '';
  for(let i = 0; i < array.length-1; i++ ){
    arr+=array[i];
  }
  return arr.split('\n').slice(0, arr.length-2);
}

console.log('dfssfd',getLightsaberScores(scores))

function getStats (arr1, arr2){
  let arr = [];
  for(let i = 0; i < arr1.length; i++){
    for(let p = 0 ; p < arr2.length; p++){
      if( i === p ){
        arr.push([arr1[i], arr2[p]])
      }
    }
  }
  return arr.slice(0, );
}

const name = getPadawanNames(padawans);
const scor = getLightsaberScores(scores);

console.log(getStats(name, scores))



const jedi = getStats();

function writeStats(path, nameArr) {
for (let i = 0; i < nameArr.length; i++) {
  fs.appendFileSync(`data/stats.txt`, nameArr);
}
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
