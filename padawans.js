const fs = require('fs');

function getPadawanNames(filename) {  
  let names = fs.readFileSync(filename = `data/padawans.txt`, 'utf-8').split('\n');
  names.pop();
  return names;
}

function getLightsaberScores(filename) {
  let names = fs.readFileSync(filename = `data/scores.txt`, 'utf-8').split('\n');
  return names.map(el => +el);
}

function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let stats = [];
  return names.map((el, i) => ([el, scores[i]]));
}

function writeStats() {

}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
