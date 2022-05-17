const fs = require('fs')
const scores = 
const getStats = 
const writeStats = 

function getPadawanNames () { // чтение файла
  // let names = []
  let names = fs.readFileSync(".data/padawans.txt", "utf8").split('/n')
  for (i=0; i<getPadawanNames.length; i++){
    console.log(names)
  }
}

function getLightsaberScores () { // 
  let scores = 
  for (i = 0; i < )
}

function getStats () { // 
  let stats = fs.readFileSync("./file.txt", "utf8")
  return getStats()
}
console.log(stats)
function writeStats () { // запись в файл 
  fs.writeFileSync("./file.txt", "New text")
}
