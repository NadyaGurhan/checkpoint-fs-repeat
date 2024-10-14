const fs = require('fs')
const {EOL} = require('os')

function getPadawanNames() {
  
  const content = fs.readFileSync("./data/padawans.txt", 'utf8')
  const arr = content.split(EOL)
  const firstNewArr = []
  for (let i of arr) {
    if (i != '') {
      firstNewArr.push(i)
    }
  }
  
  return firstNewArr
} 

//console.log(getPadawanNames())

function getLightsaberScores() {
  const content = fs.readFileSync("./data/scores.txt", 'utf8')

  const arr = content.toString().split(EOL)
  const firstNewArr = []
  for (let i = 0; i < arr.length; i++) {
    firstNewArr.push(Number(arr[i]))
  }
  //console.log(arr)
 
  return firstNewArr
}

//console.log(getLightsaberScores())

function getStats() {
  const firstPart = fs.readFileSync("./data/padawans.txt", 'utf8')
  const secondPart = fs.readFileSync("./data/scores.txt", 'utf8')
  const arr = firstPart.toString().split(EOL)

  const firstNewArr = []
  for (let i of arr) {
    if (i != '') {
      firstNewArr.push(i)
    }
  }

  const firstAnotherArr = []
  for (let j of firstNewArr) {
    firstAnotherArr.push(j.split(EOL))
  }
  //console.log(firstAnotherArr)

  const secondArr = secondPart.toString().split(EOL)

  for (let i = 0; i < firstAnotherArr.length; i++) {
    firstAnotherArr[i].push(Number(secondArr[i]))
  }

  return firstAnotherArr
}

//console.log(getStats())


function writeStats() {
  const stats = getStats().join(',')

  console.log(stats)
  let newStr = ''
  let first = 0
  
  for (let i = 0; i < stats.length; ++i) {
    //console.log(stats[i])

    if (stats[i] !== ',' && first === 0) {
      newStr += stats[i]
    } else if (stats[i] !== ',' && first === 1) {
      newStr += stats[i]
    } else if (stats[i] === ',' && first === 0) {
      newStr += ' '
      first = 1
    } else if (stats[i] === ',' && first === 1) {
      newStr += '\n'
      first = 0
    }
  }

  console.log(newStr)

  return fs.writeFileSync('./data/stats.txt', newStr);
}

console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
