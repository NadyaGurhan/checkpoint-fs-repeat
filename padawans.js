const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  const name = fs.readFileSync("./data/padawans.txt", "utf8").split("\n")
return name.slice(0,-1)

}
// console.log(getPadawanNames())


function getLightsaberScores(){
  return fs.readFileSync("./data/scores.txt", "utf8").split("\n").map((el)=> Number(el))
}



function getStats(){
  const arrNames = getPadawanNames()
  const arrScores = getLightsaberScores()
  const stats = []
  let arr = []
  for( let i =0;i<arrNames.length;i++){
    arr.push(arrNames[i], arrScores[i])
    stats.push(arr)
    arr= []
  }

  return stats
}

function writeStats(){
  const data = getStats().join('\n').replaceAll(',',' ')
   return fs.writeFileSync('./data/stats.txt',data,'utf-8')
}

// console.log(getLightsaberScores())


// function getStats(){
// for (let i=0; i<)
// }