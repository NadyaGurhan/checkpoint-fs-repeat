const fs = require('fs');

function getFileContent(fileName) {
  return fs.readFileSync(`./data/${fileName}.txt`, 'UTF-8').trim();
}

function getPadawanNames() {
  return getFileContent('padawans').split('\n');
}


function getLightsaberScores() {
  return getFileContent('scores').split('\n');
}

function getStats() {
  let padawanNames = getPadawanNames();
  console.log(padawanNames);
  let padawanScores = getLightsaberScores();
  console.log(padawanScores);
  // let newArr = new Array;
  let padawansScores = [];
  for (let i = 0; i < padawanNames.length; i++) {
    padawanScores.push([padawanNames[i], padawanScores[i]]);
  }
  return padawansScores
}

getStats()

function writeStats() {
  array.forEach(element => {

  });
}







module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
