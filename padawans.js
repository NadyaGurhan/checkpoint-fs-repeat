
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames(){
  const fs = require("fs")
  let data = fs.readFileSync("data/padawans.txt", "utf8")
  data = data.trim().split("\n")
  //console.log(data)
  return data
}

function getLightsaberScores(){
  const fs = require("fs")
  let data = fs.readFileSync("data/scores.txt", "utf8")
  data = data.trim().split("\n")
  data = data.map((a) => Number(a))
  //console.log(data)
  return data
}

function getStats(){
  let mas1 = getPadawanNames()
  let mas2 = getLightsaberScores()
  let result = []
  for (let i=0; i<mas1.length; i++){
    result.push([mas1[i],mas2[i]])
  }
  return result
  //console.log(result)
}

function writeStats(){
  const fs = require("fs")
  let mas1 = getPadawanNames()
  let mas2 = getLightsaberScores()
  for (let i=0; i<mas1.length; i++){
    if(i===mas1.length-1){
      fs.appendFileSync("data/stats.txt",`${mas1[i]} ${mas2[i]}`, "utf8")
      continue;
    }
    fs.appendFileSync("data/stats.txt",`${mas1[i]} ${mas2[i]}\n`, "utf8")
  }
}

//writeStats()

