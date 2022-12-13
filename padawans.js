const fs = require('fs')

function getPadawanNames(){
  let names = fs.readFileSync('./data/padawans.txt', "utf8")
  return names.split("\n")
              .map((i) => i.slice(0,-1))
              .slice(0,-1)
}

function getLightsaberScores(){
  let lightsaberScore = fs.readFileSync('./data/scores.txt', "utf8")
  return lightsaberScore.split("\n")
                        .map((i) => Number(i))                                      
}


function getStats(){
  let namesArr = getPadawanNames()
  let lightsaberScoreArr = getLightsaberScores()
  let arr =[]
   for(let i=0; i< namesArr.length; i+=1){
    arr.push([namesArr[i],lightsaberScoreArr[i]])
   }
   return arr
}

function writeStats(){
  let arrStar = getStats().map((i) => i+"\n")
  return fs.writeFileSync("./data/stats.txt",`${arrStar}`)
}
console.log(writeStats())
writeStats
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
};
