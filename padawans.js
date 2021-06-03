const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames(filename) {
  const data = fs.readFileSync(`data/padawans.txt`, "utf8").replace(/\n/gm, ",").split(",")//.pop()
  data.splice(-1,1)
  return (data)
}


function getLightsaberScores(filename){
  const data = fs.readFileSync(`data/scores.txt`, "utf8").replace(/\n/gm, ",").split(",")
  
  return data.map(word=>word*1)
}
function getStats(arr1, arr2){


}
function writeStats(){

}
