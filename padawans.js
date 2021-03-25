const fs = require("fs");

 module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};



function getPadawanNames() {
let filePadawans = '/home/kirill/elbrus/Phase1/checkpoint-fs/data/padawans.txt'
let dataNames = fs.readFileSync(filePadawans, "utf8").split('\n')
dataNames.pop()
return dataNames
}


function getLightsaberScores () {
  let fileScores = '/home/kirill/elbrus/Phase1/checkpoint-fs/data/scores.txt'
  let dataScores = fs.readFileSync(fileScores, "utf8").split('\n')
    for (let i = 0; i < dataScores.length; i++) {
      dataScores[i] = Number(dataScores[i])
    }
  return dataScores
}

function getStats () {
  let arr1 = getPadawanNames()
  let arr2 = getLightsaberScores ()
  let arr3 = []
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i])
    arr3.push(arr2[i])
  }

  let arrRevan = []
  let arrBastila = []
  let arrJolee = []
  let arrJuhani = []
  let arrStats = []
  
    arrRevan.push(arr3[0])
    arrRevan.push(arr3[1])
    arrBastila.push(arr3[2])
    arrBastila.push(arr3[3])
    arrJolee.push(arr3[4])
    arrJolee.push(arr3[5])
    arrJuhani.push(arr3[6])
    arrJuhani.push(arr3[7])
    arrStats.push(arrRevan)
    arrStats.push(arrBastila)
    arrStats.push(arrJolee)
    arrStats.push(arrJuhani)
  
  return arrStats
}


function writeStats() {
  let fileStats= '/home/kirill/elbrus/Phase1/checkpoint-fs/data/stats.txt'
  fs.writeFileSync(fileStats, getStats().join(''),replace());
 // console.log(getStats().join());
  // return dataNames
  }
  writeStats()
