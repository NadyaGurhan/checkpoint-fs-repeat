const fs = require('fs');

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};


function getPadawanNames(){
const padawanNames = fs.readFileSync('./data/padawans.txt', "utf-8");
const namesArr = padawanNames.split('\r\n');
return namesArr
}

