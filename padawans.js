const fs = require('fs');

function getPadawanNames() {
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return padawans
}

function getLightsaberScores() {
  
  let score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  score = score.map((el)=>+el)
  return score
}

function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  // let table;
  names = names.map((el, i) => ([el, scores[i]]));
  // console.log(names)
  return names
  
}

function writeStats() {
  let data = getStats();
  // let data = fs.writeFileSync(`./data/stats.txt`, JSON.stringify(getStats()));
  
  console.log(data)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
