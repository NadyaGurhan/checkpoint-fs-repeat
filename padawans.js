const fs = require('fs')

function getPadawanNames(filename) {
  console.log('filename', filename )
    let readFile = fs.readFileSync(filename, 'utf-8')
    return readFile.trim().split('\r\n');
}

// let objPadamans = new getPadawanNames;
let padavans = getPadawanNames('./data/padawans.txt');
// console.log(padavans)s

function getLightsaberScores(filename) {
    let readFile = fs.readFileSync(filename, 'utf-8').trim().split('\r\n');
    return readFile;
}

// let objScores = new getPadawanNames;
let scores = getLightsaberScores('./data/scores.txt');
// console.log(scores)

function getStats(arrPadavans, arrScores) {
    return arrPadavans.map((el, i) =>{
      return [el, Number(arrScores[i])]
    });
  }

// let objStatus = new getStats;
let numberScores = getStats(padavans, scores);
// console.log(numberScores)

function writeStats(filename, array) {
  return fs.writeFileSync(filename, JSON.stringify(array));
}

// let objWriteStatus = new writeStats;
let writeStatus = writeStats('./data/stats.txt', numberScores);
// console.log(writeStatus)

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
