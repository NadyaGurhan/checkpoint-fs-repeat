const fs = require('fs')
const {EOL} = require('os')



function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return data.split(EOL)
    .map(name => name.trim())
    .filter(name => name.length > 0);
}

console.log(getPadawanNames())





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


