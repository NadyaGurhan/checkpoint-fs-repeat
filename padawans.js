const fs = require('fs')

let padawans = fs.readFileSync("./data/padawans.txt", "utf8");
let scores = fs.readFileSync("./data/scores.txt", "utf8");

function getPadawanNames(){
  
  let list = padawans.split('\n')
  
  return list.splice(0,4)
  
}




function getLightsaberScores(){
let scorelist = scores.split('\n')

return scorelist.map(index => parseFloat(index))
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
