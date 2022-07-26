const { log } = require('console');
const fs = require('fs')


function getPadawanNames () {
const padawansTxt = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
 return padawansTxt.slice(0, padawansTxt.length - 1);
}

function getLightsaberScores () {
const scoresTxT = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
return scoresTxT.map(elem => Number(elem))
}

function getStats () {
const result = [];
const padawansArr = getPadawanNames();
const scoresArr = getLightsaberScores();

for( let i = 0; i < padawansArr.length; i++){
  result.push([padawansArr[i], scoresArr[i]])
}



return result
}

function writeStats () {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
