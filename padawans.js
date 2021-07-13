const fs=require('fs')
const padawans=fs.readFileSync('./data/padawans.txt','utf-8')
const scores=fs.readFileSync('./data/scores.txt','utf-8')

function getPadawanNames(){
 return padawans.split('\n')
}
function getLightsaberScores(){
  
  return scores.split('\n').map(Number)
}

function getStats(){
  const padawansArr= padawans.split('\n')
  const scoresArr= scores.split('\n')
  const padawansScore=[];
  for (let i=0; i<padawansArr.length; i++){
    padawansScore.push(padawansArr[i])
    padawansScore.push(scoresArr[i])
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
