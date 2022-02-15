const fs = require('fs')
const padavans = fs.readFileSync("./data/padawans.txt",'utf-8')
const scores = fs.readFileSync("./data/scores.txt",'utf-8')
function getPadawanNames(){
return padavans.split('\n').filter(a=>a !="")
}

function getLightsaberScores(){
return scores.split('\n').map(a=>+a)
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
