const fs = require('fs')

function getPadawanNames(){
  let padawanData = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let semiRes =  padawanData.split('\n')
  let result = semiRes.filter((item)=>{
    return item.length > 1
  })
  return result
}

function getLightsaberScores(){
  let swordScore = fs.readFileSync('./data/scores.txt', 'utf-8')
  let semiRes = swordScore.split('\n')
  let result = semiRes.map((item)=>{
    return Number(item)
  })
  return result
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
