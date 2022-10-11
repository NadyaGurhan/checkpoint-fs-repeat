const fs = require('fs')

let padawans = fs.readFileSync("./data/padawans.txt", "utf8");


function getPadawanNames(padawans){
  
  let list = padawans.split('\n')
  
  return list.splice(0,4)
  
}
console.log(getPadawanNames(padawans));



function getLightsaberScores(){

}

function getStats(){

}

function writeStats(){
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
