const fs = require('fs')
const dir = __dirname;
const arrOfPadawans = fs.readFileSync(`${dir}/data/padawans.txt`, 'utf-8').split('\n')
const arrOfStats = fs.readFileSync(`${dir}/data/scores.txt`, 'utf-8').split('\n')

function getPadawanNames() {
  return arrOfPadawans
}
function getLightsaberScores() {
  const result = [];
  for(let elem of arrOfStats){
    result.push(+elem)
  }
  return result
}
function getStats() {
  const result = [];
  for (let i = 0; i < arrOfPadawans.length; i++) {
    result.push([arrOfPadawans[i], Number(arrOfStats[i])])
  }
  return result
}

function writeStats() {
  fs.writeFileSync(`${dir}/data/stats.txt`, '')
  const staticstics = [];
  for (let elem of getStats()) {
     staticstics.push(elem.join(' '))
  }
  console.log(staticstics)
  for (let elem of staticstics) {
    if (staticstics.indexOf(elem) !== staticstics.length - 1) {
      fs.appendFileSync(`${dir}/data/stats.txt`, `${elem}\n`)
    }
    else {
      fs.appendFileSync(`${dir}/data/stats.txt`, `${elem}`)
    }
  }
}
writeStats()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};