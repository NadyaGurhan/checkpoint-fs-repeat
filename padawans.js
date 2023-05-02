const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const namesPadawans = fs 
.readFileSync('./data/padawans.txt', 'utf8')
.trim()
.split('\n')

const getPadawanNames(){
  return namesPadawans.map((n) => n.trim())
}

const scoresPadawans = fs
.readFileSync('./data/padawans.txt', 'utf8')
.trim()
.split('\n')

const getPadawanScores(){
  return scoresPadawans.
}