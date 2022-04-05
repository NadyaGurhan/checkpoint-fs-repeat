const fs = require('fs')

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0,4)
const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n')


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
  if(fs.existsSync(`data/stats.txt`)) {
    fs.unlinkSync(`data/stats.txt`)
  }
 let text = getStats();
const arrtext = text.join('\n').split(',').join(' ')

fs.appendFileSync(`data/stats.txt`, arrtext)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats
};
