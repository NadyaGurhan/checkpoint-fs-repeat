const fs = require('fs');

const str1 = fs.readFileSync('./data/padawans.txt', 'utf-8');
const arr1 = str1.split('\n');

const str2 = fs.readFileSync('./data/scores.txt', 'utf-8');
const arr2 = str2.split('\n');

function getPadawanNames() {
arr1.splice(-1,1);
return arr1;
};

 function getLightsaberScores(){
return arr2.join(' ').split(' ').map(item => Number(item))
 }

 function  getStats(){


 }
 function writeStats(){

 }


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
