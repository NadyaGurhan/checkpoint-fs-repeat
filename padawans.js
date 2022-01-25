const fs = require('fs');
//const padawans = fs.readFileSync('./data/padawans.txt');


function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  let arrPadawans = padawans.split('\n');
  arrPadawans.pop()

  return arrPadawans;
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
