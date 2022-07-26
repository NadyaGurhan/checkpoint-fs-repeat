const fs = require('fs')

function getPadawanNames() {
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let arr = []
  let padawans = padawan.split('\n')
  for (let i = 0; i < padawans.length - 1; i++){
    arr.push(padawans[i])
  } 
  return arr
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
