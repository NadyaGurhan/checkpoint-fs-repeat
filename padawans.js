const fs = require('fs')
function getPadawanNames(){
  const pad = fs.readFileSync('./data/padawans.txt','utf-8');
  let result = pad.split('\n')
  let pads = result.filter((item) => item.length>0);
  return result
  // console.log(result)
}
getPadawanNames()

function getLightsaberScores(){
  const gets = fs.readFileSync('./data/scores.txt','utf-8');
let paw = gets.split('\n')
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

