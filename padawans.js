const fs = require('fs');

function getPadawanNames() {
  const padNames = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8');
  const arrReturn = padNames.split('\r\n');
  arrReturn.pop();
  return arrReturn;
}

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
