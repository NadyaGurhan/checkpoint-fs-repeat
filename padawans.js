const fs = require('fs')

function getPadawanNames() {
  let padawanList = [];
  let padawans = fs.readFileSync('./data/padawans.txt');
  const arrPad =padawans.split('\n')
  for (let i = 0; i < arrPad.length; i++) {
    padawanList.push(arrPad[i])
  }
  return(padawanList)
};

function getLightsaberScores() {

};

function getStats() {

};

function writeStats() {

};


getPadawanNames()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


