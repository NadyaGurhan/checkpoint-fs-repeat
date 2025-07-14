const fs = require('fs')
const { EOL } = require('os')


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function padawans () {
  const content = fs.readFileSync('./data/adawanas.txt', 'utf-8')
  return content.split()
 
}
console.log(padawans())
