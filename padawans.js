const fs = require('fs');
let filePath = './data/padawans.txt';
let data = fs.readFileSync(filePath,'utf8');

// const padawanName = 
function getPadawanNames(data){
  let data = fs.readFileSync(filePath,'utf8');
  let arr = [];

  for (let i = 0; i < data ; i++) {
    arr.push(data[i]);
  }
  return arr;
}




module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
