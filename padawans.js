const fs = require('fs');


function getPadawanNames() {
  const arr = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawans = arr.split('\n')
return padawans.slice(0,-1)
};
console.log(getPadawanNames())

function getLightsaberScores
module.exports = {
    getPadawanNames,
  //   getLightsaberScores,
  //   getStats,
  //   writeStats,
};
