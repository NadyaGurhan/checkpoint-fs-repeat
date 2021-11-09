const fs = require('fs')

function getPadawanNames() {
  const readPad = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
  readPad.splice(4, 1)
  return readPad
}

function getLightsaberScores() {
  const readSword = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(Number)
  return readSword
}


function getStats() {
  const readPad = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
  readPad.splice(4, 1)
  const readSword = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(Number)
  let newArr = []
  for (let i = 0; i < readSword.length; i++) {
    newArr.push([readPad[i], readSword[i]])

  }

  return newArr

}



function writeStats() {
  const readPad = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
  readPad.splice(4, 1)
  const readSword = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(Number)

  for (let i = 0; i < readPad.length; i++) {
    if (i === readPad.length - 1) {
    return fs.appendFileSync('data/stats.txt', `${readPad[i]} ${readSword[i]}`)
    }
    fs.appendFileSync('data/stats.txt', `${readPad[i]} ${readSword[i]}\n`)


  }

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
