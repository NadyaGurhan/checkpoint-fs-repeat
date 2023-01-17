const fs = require('fs')
const getPadawanNames = require(`./data/padawans.txt`)

function padawans () {
 const arr = [];
 fs.readFile('getPadawansNames', 'utf8');
 for(let i = 0; i < getPadawanNames.length; i += 1){
  arr.push(getPadawanNames[i]);
}
 return arr;
}
padawans();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
