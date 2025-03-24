const fs = require('fs')
const { EOL } = require('os');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8')
  
  
   return names.trim().split('\n') 
}

console.log(getPadawanNames())