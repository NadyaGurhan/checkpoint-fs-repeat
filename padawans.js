function getPadawanNames(){
  const fs = require('fs');
  const padavan = fs.readFileSync('./data/padawans.txt', 'utf8'); 
  return padavan.split('/n');
}
function getLightsaberScores(){
  const fs = require('fs');
  const list = fs.readFileSync('./data/scores.txt', 'utf8');
  return list.split('\n').map((el) => +el)
}
function getStats() {
  let list = getLightsaberScores()
  let padawans = getPadawanNames()
  let main = []
  let result = []
  for (let i = 0; i < padawans.length; i++) {
    result = [padawans[i], list[i]]
    main.push(result)
  }
  return main
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
getPadawanNames();
