const fs = require('fs');
let data = fs.readFileSync('data/padawans.txt', "utf8");
let data = fs.readFileSync('data/scores.txt', "utf8");


function getPadawanNames(){
  let arr = data.split('\n');
  arr.pop();
  return arr;
}

function getLightsaberScores(){
  let arr = data.split('\n')
  return arr
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
