const fs = require('fs');


const padawan1 = fs.readFileSync('./data/padawans.txt', 'utf-8');
function getPadawanNames() {
let newArr= padawan1.split('\n')
let newArr1 = newArr.slice(0,4)
return(newArr1)
}
console.log(getPadawanNames())

const scores1 =  fs.readFileSync('./data/scores.txt', 'utf-8');
function getLightsaberScores(){
let scoresArr = scores1.split('\n');
return scoresArr;
}
console.log(getLightsaberScores())

function getStats () {
  let mainArr = [];
  let scoresArr1 = scores1.split('\n');
  let padawanArr1 = padawan1.split('\n');
  for(let i = 0; i < scoresArr1.length; i++){
    mainArr.push([padawanArr1[i], Number(scoresArr1[i])])
  }
  return mainArr
}
console.log(getStats())

function writeStats() {
  fs.writeFileSync('/.data/myFile.txt', '')
  let scoresArr1 = scores1.split('\n');
  let padawanArr1 = padawan1.split('\n');
  for (let i = 0; i <= scoresArr1.length; i++ ){
    if (i === scores.length - 1){
      fs.appendFileSync(`./data/stats.txt`, `${padawanArr1[i]` + ' ' + `scoresArr1[i]`}`)
    }else{
      fs.appendFileSync(`./data/stats.txt`, `${padawanArr1[i]` + ' ' + `scoresArr1[i]`}\n`)
    }
  }

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
