const fs = require('fs');

function getPadawanNames() {
  const result =  fs.readFileSync('./data/padawans.txt', 'utf8');
  const result2 = result.slice(0, result.length-1);

  return result2.split('\n');
}
function getLightsaberScores() {
  const resultRead = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  const resultScores = resultRead.map(el => el = +el)
  
  return resultScores
}
function getStats() {
  const padavans = getPadawanNames();
  const scores = getLightsaberScores();
  const resultTablePadavans = [];

  for(let i = 0; i < padavans.length; i++){
    resultTablePadavans.push([padavans[i], scores[i]])
  }

  return resultTablePadavans
}
function writeStats() {
  const data = getStats();
  const result = data.map(el => el.join()).map(el => el.replace(',', ' ')).join().replace(/,/g, '\n');

  return fs.appendFileSync('./data/stats.txt', result)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
