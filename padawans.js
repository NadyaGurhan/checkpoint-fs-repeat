const fs = require('fs')
const { EOL } = require('os');



function getPadawanNames(){
  const files = fs.readFileSync('data/padawans.txt', 'utf8')
  return files.split(EOL).slice(0, 4)

}

function getLightsaberScores(){
  const files = fs.readFileSync('data/scores.txt', 'utf8')
  return files.split(EOL).slice(0, 4).map((i) => +i);
}


let array = []
function getStats(){
  const padavans = fs.readFileSync('data/padawans.txt', 'utf8').split(EOL).slice(0,4)
  const score = fs.readFileSync('data/scores.txt', 'utf8').split(EOL).slice(0,4).map((i) => +i)
  
  for(let i =0; i < padavans.length; i++){
    let padavansScore = []
    padavansScore.push(padavans[i])
    padavansScore.push(score[i])
    array.push(padavansScore)
  }
  return array
  
}

function writeStats(){

  let stats = array.map(([name, value]) => `${name} ${value}`)
  fs.writeFileSync('data/stats.txt', stats.join(EOL));
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
