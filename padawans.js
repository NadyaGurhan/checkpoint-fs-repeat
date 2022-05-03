
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const fs = require('fs')

const names = fs.readFileSync('data/padawans.txt', 'utf-8')


const score = fs.readFileSync('data/scores.txt', 'utf-8')

function getPadawanNames(){
  let arr = names.split('\n').slice(0, 4)
  return(arr)
}

function getLightsaberScores(){
  let arr = score.split('\n').slice(0, 4)
  let newArr = []

  for(let i = 0; i < arr.length; i++){
    newArr.push(+(arr[i]))
  }

  return newArr
}


function getStats(){
  let pad1 = []
  pad1.push(getPadawanNames()[0])
  pad1.push(getLightsaberScores()[0])

  let pad2 = []
  pad2.push(getPadawanNames()[1])
  pad2.push(getLightsaberScores()[1])

  let pad3 = []
  pad3.push(getPadawanNames()[2])
  pad3.push(getLightsaberScores()[2])

  let pad4 = []
  pad4.push(getPadawanNames()[3])
  pad4.push(getLightsaberScores()[3])

  let result = []
  result.push(pad1)
  result.push(pad2)
  result.push(pad3)
  result.push(pad4)

  return result
}

function writeStats(){
  let data = getStats()
  let dataNew = []
  for(let i = 0; i < data.length; i++){
    let temp = data[i].join(' ')
    dataNew.push(temp)

  }
  let result = dataNew.join('\n')
  return  fs.writeFileSync('data/stats.txt', result)
  
}


writeStats()
