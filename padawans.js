const fs = require('fs')
const path = require('path');

const padawans = fs.readFileSync(path.join(__dirname, 'data', 'padawans.txt'), 'utf8');
const scores = fs.readFileSync(path.join(__dirname, 'data', 'scores.txt'), 'utf8');

function getPadawanNames() {
  let result = padawans.split('\n');
  let result_0 = result[0];
  let resultLength = result.length-1;
  return result.slice(result_0, resultLength);
}
console.log(getPadawanNames());


function getLightsaberScores(){
  let result  = scores.split('\n');
  let newArray = [];
  for(let i = 0; i < result.length; i++){
    newArray.push(Number(result[i]))
  }
  return newArray;
}


function getStats(){
  let resultPadawans = getPadawanNames();
  let resultScores = getLightsaberScores();
  let arrayPadawansScores = [];
  resultPadawans.forEach((element, index) => {
    switch(index) {
      case 0: 
      let newArray_0 = [];
      newArray_0.push(element);
      resultScores.forEach((element, index) => {
        switch(index){
          case 0: 
          newArray_0.push(element);
          arrayPadawansScores.push(newArray_0);
          break;
          default: break;
        }
      })
      break;
      case 1: 
      let newArr_1 = [];
      newArr_1.push(element);
      resultScores.forEach((element, index) => {
        switch(index){
          case 1: 
          newArr_1.push(element);
          arrayPadawansScores.push(newArr_1);
          break;
          default: break;
        }
      });
      break;
      case 2: 
      let newArray_2 = [];
      newArray_2.push(element);
      resultScores.forEach((element, index) => {
        switch(index) {
          case 2: 
        newArray_2.push(element);
          arrayPadawansScores.push(newArray_2);
          break;
          default: break;
        }
      });
      break;
      case 3: 
      let newArray_3 = [];
      newArray_3.push(element);
      resultScores.forEach((element, index) => {
        switch(index){
          case 3:
            newArray_3.push(element);
            arrayPadawansScores.push(newArray_3);
            break;
            default: break;
        }
      });
      break;
        default: break;
    }
  })

  return arrayPadawansScores;
  
}

function writeStats() {
  let result = fs.writeFileSync(path.join(__dirname, 'data', 'stats.txt'), `${getStats()} + '\n'`);
  return result;
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
