const fs = require('fs');
const path = require('path');


function getPadawanNames () {
  const resultRead = fs.readFileSync(path.join(__dirname, `./data/padawans.txt`), 'utf-8');
  return resultRead.split('\n').slice(0, -1);
}

//к сожалению, массив из строк, а не из чисел
function getLightsaberScores() {
  const resultRead1 = fs.readFileSync(path.join(__dirname, `./data/scores.txt`), 'utf-8');
  const arr = resultRead1.split('\n');
  for (let i = 0; i < arr.length; i++){
    //console.log(arr[i]);
    Number(arr[i]);
  }
  return arr;
}

/*function getLightsaberScores() {
  const resultRead1 = fs.readFileSync(path.join(__dirname, `./data/scores.txt`), 'utf-8');
  const arr = [];
  for (let i = 0; i < resultRead1; i++){
    if (resultRead1[i] === Number){
      arr.push(resultRead1[i]);
    }
  }
  return arr;
}

console.log(getLightsaberScores());*/


function getStats () {

}

function writeStats () {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


