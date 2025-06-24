const fs = require('fs')


function getPadawanNames(){
  const replaceWord = /\n/g
  return fs.readFileSync((`${__dirname}/data/padawans.txt`), 'utf-8').replace(replaceWord, ',').split(',')
}

console.log(getPadawanNames())
function getLightsaberScores(){
  const newArr = []
  const replaceWord = /\n/g
  const arrNum =  fs.readFileSync((`${__dirname}/data/scores.txt`), 'utf-8').replace(replaceWord, ' ').split(' ')
  arrNum.forEach(num => newArr.push(Number(num)));
  return newArr
}


function getStats(){
  const padawans = getPadawanNames()
  const scores = getLightsaberScores()
  const scoreTable = []
  for (let i = 0; i < padawans.length; i++){
    const newArr = []
    newArr.push(padawans[i])
    newArr.push(scores[i])
    scoreTable.push(newArr)
  }
  return scoreTable
}


function writeStats(){
  return fs.writeFileSync('./data/stats.txt', getStats())
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
