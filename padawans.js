const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


const arr = require('../padawans');
function getPadawanNames(arr) {

  let result = []; 
  for(i = 0; i < arr.length; i++) {
    result.push(arr[i])
  }
  return result
}

module.exports = getPadawanNames;




const arr2 = require('../scores');
const getLightsaberScores = getPadawanScores(arr2);
function getPadawanScores (arr2) {
  let result = []; 
  for(i = 0; i < arr2.length; i++) {
    result.push(arr2[i])
  }
  return result
}

// module.exports = getPadawanScores
module.exports = getLightsaberScores;



const arr3 = require('../padawans') 
const arr4 = require('../scores');
function getStats(arr3, arr4) {
  let result = []; 
  for(i = 0; i < arr3.length; i++) {
    result.push(arr3[i], arr4[1])
  }
  return result
}

module.exports = getStats;


const arr5 = require('../padawans') 
const arr6 = require('../scores');
function writeStats(arr6, arr7) {
  const result = `${getStats}`;
  return fs.appendFileSync('data/stats.txt', 'utf8');
}

module.exports = writeStats;
