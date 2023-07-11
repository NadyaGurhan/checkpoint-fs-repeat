const fs = require('fs')
const padawans = fs.readFileSync(__dirname + './data/padawans.txt','utf8')
const scores = fs.readFileSync(__dirname + './data/scores.txt','utf8')

function getPadawanNames () {
const padawanNames = padawans.split('\n')
return padawanNames
}

function getLightsaberScores () {
  const lightsaberScores = scores.split('\n')
  return lightsaberScores
}

function getStats () {
const 
}

  
// function writeStats () {
// //   for (let i = 0; i < arr.length; i += 1) {
// //     fs.appendFileSync(path, `${arr[i]}\n`)
// // }
// }
  
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

