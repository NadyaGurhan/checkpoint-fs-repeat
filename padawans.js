const fs = require('fs')

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0,4)
const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n')

console.log(padawans);
console.log(scores);
function getPadawanNames() {
  let total = [];
for(let i = 0; i < padawans.length; i++) {
  total.push(padawans[i])
}
return total;
}

function getLightsaberScores() {
  let total = []
  for(let i = 0; i < scores.length; i++) {
 total.push(+scores[i])
  }
  return total;
}

function getStats() {
return padawans.map((value, index) => [value, +scores[index]])}

function writeStats() {
 let text = getStats();
 const result = text.reduce((acc, cur) => {
   let total;
   total += (acc, cur)
  return total
},);

 let data = fs.appendFileSync(`data/stats.txt`, result)
 return data
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats
};
