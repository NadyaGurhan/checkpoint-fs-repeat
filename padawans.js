const fs = require('fs')

const getPadawanNames = () => {
  const files = fs.readFileSync ('./data/padawans.txt', 'utf8');
  const result = files.split ('\n');
  result.pop();
  return result;
}

// function getLightsaberScores (){

// }

// function getStats (){

// }

// function writeStats (){

// }

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
