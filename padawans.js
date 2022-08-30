const fs = require('fs');
const pada = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
const score = fs.readFileSync('data/scores.txt', 'utf-8').split('\n').map(el=>Number(el));

function getPadawanNames() {
return pada;
}



function getLightsaberScores(){
return score
}
 function getStats(){
let arr=[]
for (i=0;i<pada.length;i++){
  arr.push([pada[i], score[i]])
}
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
