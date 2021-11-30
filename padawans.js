const fs = require('fs');
const listPadavan = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
listPadavan.pop();

function getPadawanNames() {
  return listPadavan;
}
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getLightsaberScores() {
const result = []
 scores.forEach(el => result.push(Number(el)));
 return result;
}

 function getStats() {
   const padawan = getPadawanNames();
   const scores = getLightsaberScores();
   const newArr = padawan.map((el, i) => [el, scores[i]]);
   fs.writeFileSync('./data/stats.txt', JSON.stringify(newArr), 'utf-8');
 
   return newArr;
 }

 function writeStats() {
  statsStr = getStats();
  console.log(statsStr)
  const result = statsStr.join('\n').replace(/,/g, ' ');
  console.log(result)
  fs.writeFileSync('./data/stats.txt', result);
  return result;
  
 }

module.exports = {
  getPadawanNames,
   getLightsaberScores,
   getStats,
  writeStats,
};
