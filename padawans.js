const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  const name = fs.readFileSync('data/padawans.txt', 'utf-8')
  const names = name.split('\n')
  return names
}
console.log(names)


function getLightsaberScores(){
  
}

