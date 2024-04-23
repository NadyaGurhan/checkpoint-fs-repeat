const fs = require('fs');

const scores = [];
const padawans = [];
let result=[]
function getPadawanNames() {
  const stuff = fs.readFileSync('./data/padawans.txt', 'utf8');
  const element = stuff.split('\r\n');

  for (let i = 0; i < element.length - 1; i++) {
    padawans.push(element[i]);
  }
  return padawans;
}
// console.log(getPadawanNames())
function getLightsaberScores() {
  const stuff = fs.readFileSync('./data/scores.txt', 'utf8');
  const element = stuff.split('\r\n');

  for (let i = 0; i < element.length; i++) {
    scores.push(+element[i]);
  }
  return scores;
}
//  console.log(getLightsaberScores())
function getStats() {
  getPadawanNames();
  getLightsaberScores();
   
  for (let i = 0; i < padawans.length; i++) {
     result[i]=new Array(2);
    result[i][0] = padawans[i];
    result[i][1] = +scores[i];
  }
  // console.log(result)
  return result
}
//  console.log(getStats())
function writeStats() {
  getStats()

  fs.writeFileSync(`./data/stats.txt`, String(result));
}
//  console.log(writeStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
