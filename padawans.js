const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n')  
  return padawans
}

function getLightsaberScores(){
  const light = fs.readFileSync('.data/scores.txt', 'utf8').split('\n')
  return light
}

function getStats(){
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n') 
  const lights = fs.readFileSync('.data/scores.txt', 'utf8').split('\n')
  const info = []
  const padawan = padawans.split(',')
  const light = lights.split(',')
  for(let i = 0; i < padawan.length; i++){
    for(let j = 0; j < lights.length; j++){
      info.push(padawan[i], light[j])
    }
  }
}

function writeStats(){}
