const fs = require('fs')
function getPadawanNames(){
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawanNames.filter((str) => str !== '');
}
function getLightsaberScores(){
  const luch = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return luch.filter((str) => +str)
}
function writeStats(){

}
function getStats(){

}





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
