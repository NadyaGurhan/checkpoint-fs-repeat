const fs=require('fs');
let getPadawanNames = function getPadawanNames() {
  
  let names=fs.readFileSync('./data/padawans.txt','utf8');
  names=names.split('\n').slice(0,4);
  return names; 
}

module.exports = {
  getPadawanNames,
  //getLightsaberScores,
  //getStats,
  //writeStats,
};
