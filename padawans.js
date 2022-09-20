const fs = require('fs')
function getPadawanNames() {
const padawan = fs.readFileSync(`data/padawans.txt`,'utf8').split('\n')
const pad = padawan.pop()
return padawan
}

function getLightsaberScores() {
const light = fs.readFileSync(`data/scores.txt`,'utf8').split('\n')
//const li = light.pop()
  return light.map((el)=>Number(el))
  }

  function getStats() {

    for (let i=0;i<4;i++) {
      let arr = []
      arr.push([padawan[i],light[i]])
    }
    return arr
}
const write = fs.writeFileSync('data/stats.txt','New text')

function writeStats() {
return write
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
