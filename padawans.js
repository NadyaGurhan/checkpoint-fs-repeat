const fs = require('fs')

 

 function getPadawanNames () {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n').slice(0,4);
  
 }
 console.log (getPadawanNames())
 const getLightsaberScores = '';
 const getStats = '';
 const writeStats = '';
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
