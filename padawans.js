const fs = require('fs')

function getPadawanNames() {
let names = fs.readFileSync('./data/padawans.txt','utf-8')
return names.split('\n').slice(0,-1)
}

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8')
 return scores.split('\n').map((el) => Number(el)) 
}

function getStats() {
  let padnames = getPadawanNames()
  let padscores= getLightsaberScores()
  return padnames.map((el,i) => {return [el, padscores[i]]
  })
}

function writeStats() {
  const stats = getStats().map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
