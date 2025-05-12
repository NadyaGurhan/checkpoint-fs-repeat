const fs = require('fs')

function  getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', "utf-8")
  const result = data.trim().split('\r\n')
  return result;
  
}

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

