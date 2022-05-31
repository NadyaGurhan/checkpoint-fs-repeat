const fs = require('fs')
const { get } = require('http')


function getPadawanNames() {
  const getNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').splice(0,4)

  return getNames
}


function getLightsaberScores() {
  const getScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  let scoresArr = []
  for (let i = 0; i < getScores.length; i++) {
    if (isNaN(getScores[i]) == false) {
      scoresArr.push(+getScores[i])
    }
  }
  return scoresArr
}

function getStats() {
  let namesArr = getPadawanNames()
  let scoresArr = getLightsaberScores()
  let statusArr = []
  for (let i = 0; i < namesArr.length; i++) {
    for (let j = 0; j < scoresArr.length; j++) {
      statusArr.push([namesArr[i], scoresArr[j]])
      i++
    }
  }
  return statusArr
}


function writeStats() {
  const statusText = getStats()
  const createData = fs.open('./data/stats.txt', 'w', (err) => {
    if(err) throw err;
    console.log('File created');
  }, setTimeout(1000));
  const appendText = fs.appendFile('./data/stats.txt', statusText.join('\n'), (err) => {
    console.log('Data has been added!');
  }, setTimeout(2000));

  const readStatus = fs.readFileSync('./data/status.txt', 'utf-8')
  console.log(readStatus)

}
writeStats()


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
