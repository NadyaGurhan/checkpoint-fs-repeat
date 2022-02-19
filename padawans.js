const fs = require('fs')

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8')

const padawansEdit = padawans.split('\n')
const scoresEdit = scores.split('\n')

function getPadawanNames() {
padawansEdit.pop()
return padawansEdit
}

function getLightsaberScores() {
return scoresEdit.map((a) => +a)
}

function getStats() {
  let result = []
  for(let i = 0; i < padawansEdit.length; i++){
      result.push([padawansEdit[i], +scoresEdit[i]])
    }
  return result
    }

function writeStats() {
    let result = getStats();
    let resultFin = result.join('\n').replaceAll(',', ' ');
    return fs.writeFileSync('./data/stats.txt', resultFin);
  }




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
