const fs = require('fs')

function getPadawanNames(){
  let filePath = './data/padawans.txt';
  let data = fs.readFileSync(filePath, "utf8");
  return data.split('\n')
}
getPadawanNames();


function getPadawanScores(){

}

function getLightsaberScores(){
  
}

function getStats (){

}

function writeStats (){

}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
