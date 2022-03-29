const fs = require('fs')
const padawans = fs.readFileSync('data/padawans.txt', 'utf8')
const scores = fs.readFileSync('data/scores.txt', 'utf8')

console.log(padawans.trim().split('\n'));

function getPadawanNames () {
  return padawans.trim().split('\n')
  // console.log(padawans.split('\n'))
}

function getPadawanScores () {
  return scores.trim().split ('\n')
}

// function getStats () {
 
   
// }

function writeStats () {
  let path = ('data/stats.txt')
  let data = fs.readFileSync(path, 'utf8')
  data = padawans.trim().split('\n')
  fs.writeFileSync(path, data);
   
  
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
