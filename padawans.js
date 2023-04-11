const fs = require('fs')
const padawans = fs.readFileSync("./data/padawans.txt", 'utf-8')
const scores = fs.readFileSync(`./data/scores.txt`, 'utf-8')

function getPadawanNames(){
  const padawans = fs.readFileSync("./data/padawans.txt", 'utf-8')
  return padawans.split("\n").slice(0, -1)
}

function getLightsaberScores() {
const scores = fs.readFileSync(`./data/scores.txt`, 'utf-8')
return scores.split("\n").map((Element)=> Number)

}

function getStats(){
const arr = []
for(let i = 0; i <= padawans.length; i ++){
  for(let j = 0; j <= scores.length; j ++){
    arr.push = padawans[i] + scores[j]
  }
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
