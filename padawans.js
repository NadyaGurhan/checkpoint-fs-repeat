const fs = require('fs');

function getPadawanNames() {
  // let names;
  let files = fs.readFile('./data/padawans.txt', 'utf-8', (errInfo, fileInfo) => {
    if (errInfo) return console.log(errInfo);
    return fileInfo.split('\n');
  });
  return files;
}

console.log(getPadawanNames());

function getLightsaberScores() {

}

function getStats() {

}

function writeStats() {

}










module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
