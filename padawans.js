const fs = require('fs');
let names;
function getPadawanNames(){
   names = fs.readFileSync('padawans.txt');
}

function getLightsaberScores(){
  const number = fs.readFileSync('scores.txt');
}
 function getStats(){
for(let i = 0; i,i<names.length; i++){
  


}
  
 }
 function writeStats(){

 }


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
