function getPadawanNames (){
return padawans.split(" ")
}

function getLightsaberScores () {
  let result = []
  
  stats.sort ()
}
}



const fs = require('fs')
const padawans = fs.readFileSync('./data/padawans.txt')
const stats = fs.readFileSync('./data/scores.txt')


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
