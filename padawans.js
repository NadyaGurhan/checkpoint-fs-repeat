const { log } = require('console');
const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames () {
  const padawansNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const namesArr = padawansNames.split('\r\n');
  namesArr.pop();
  return namesArr;
}



function getLightsaberScores () {
  const padawansScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scoresArr = padawansScores.split('\r\n');
  for (let i = 0; i < scoresArr.length; i++) {
    scoresArr[i] = +scoresArr[i];
  }
  return scoresArr;
}


function getStats () {
  const padawansNames = getPadawanNames ();
  const padawansScores = getLightsaberScores ();
  let result = [];
  for (let i = 0; i < padawansNames.length; i++) {
    result.push([padawansNames[i], padawansScores[i]])
  }
  return result;
}


function writeStats (arr) {
  

}