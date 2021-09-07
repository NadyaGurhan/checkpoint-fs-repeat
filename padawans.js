const fs =require('fs')
function getPadawanNames() {
  let data = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let dataArr = data.split('\n')
  return dataArr

  //console.log(dataArr)
}

function getLightsaberScores() {
  let data = fs.readFileSync('data/scores.txt', 'utf-8')
  let dataArr = data.split('\n').map(el => parseInt(el)) 
   return dataArr
   
}
function getStats(){
 let names = getPadawanNames()
 let stat = getLightsaberScores()
}
function writeStats(){

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
