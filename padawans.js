const fs = require('fs')
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8')

function getPadawanNames() {
  let arr = padawans.split('\n');
  return arr.slice(0, -1)
}

function getLightsaberScores() {
let arr = scores.split('\n').map(i => +i);
  return arr.slice(0, -1)
}


function getStats() {
  let pads = getPadawanNames()
  let scrs = getLightsaberScores()
  let arr = []
  let arr1 = []
  for (let i = 0; i < pads.length; i += 1) {
    arr.push(pads[i], scrs[i])
  arr1.push(arr)
  arr = []
}
return arr1
}

function writeStats() {
const data = getStats().map((i) => i.join(' ')).join('\n')
fs.writeFileSync('./data/stats.txt', `${data}`)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
