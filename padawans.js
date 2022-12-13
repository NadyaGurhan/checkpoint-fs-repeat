const fs = require('fs');

// const getPadawanNames = fs.readFileSync('./data/padawans.txt');

function getPadawanNames() {
  let arr = [];
  return arr.push(fs.readFileSync('./data/padawans.txt'));
}

function getLightsaberScores() {
  let arr = [];
  return arr.push(fs.readFileSync('data/scores.txt'));
}
function getStats() {
  let arr = []
  let arr1 = []
  arr.push(fs.readFileSync('./data/padawans.txt')
  arr1.push(fs.readFileSync('data/scores.txt')
  
  for (let i=0; i<arr.length; i++) {
    

  }
  return arr.push(fs.readFileSync('data/scores.txt'));
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
