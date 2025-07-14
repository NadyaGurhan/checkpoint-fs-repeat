const fs = require('fs')
const { EOL } = require('os')


// console.log(content);




function padawansName(){
  const content = fs.readFileSync('./data./padawans.txt', 'utf-8');
  return content.split()
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
 
