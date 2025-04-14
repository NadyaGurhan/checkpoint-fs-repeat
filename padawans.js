const fs = require('fs');

const { EOL } = require('os');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split(EOL);
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8')
                .trim()
                .split(EOL)
                .map((el) => Number(el));
}

function getStats() {
  const padawans = getPadawanNames()
  const scores = getLightsaberScores()
  const padawansScores = []

  for (let i = 0; i < padawans.length; i++) {
    padawansScores.push([padawans[i], scores[i]])
  }
  return padawansScores
}

function writeStats() {
  const statsArr = getStats()
  let statsStr = '';
  for (const el of statsArr ) {
    statsStr += `${el.join(' ')}\n`
  }
    
  

  fs.writeFileSync('./data/stats.txt', statsStr.trim())
  return statsStr
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
