const fs = require('fs')

function getPadawanNames() {
  const total = [];
  const newData = fs.readFile('data/padawans.txt', 'utf8');
  total.push(newData)
  return total
}

function getLightsaberScores() {
  const newArr = [];
   const data = fs.readFile('data/scores.txt', 'utf8');
   newArr.push(data)
   return newArr;
}

function getStats () {

}

function writeStats () {
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


