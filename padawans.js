const fs = require('fs')
const { EOL } = require('os');
module.exports = {
  getgetPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim();
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').trim();

function getgetPadawanNames() {
  return names.split(EOL)
}
const a = getgetPadawanNames()



function getLightsaberScores() {
  return scores.split(EOL)
}

const b = getLightsaberScores()
function getStats() {
   let stats = []
   for (let i = 0; i < 4; i++) {
    stats.push([a[i], b[i]])
   }
   return stats


}

function writeStats() {
  return c.join(EOL)
}
const c = writeStats()

console.log(names, scores)
console.log(getgetPadawanNames())
console.log(getLightsaberScores())
console.log(getStats())
