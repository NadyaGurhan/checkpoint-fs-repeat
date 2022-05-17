// const fs = require('fs')

function getPadawanNames(){
  let arr = fs.readFileSync('./data/padawans.txt').toString().split('\n').filter(el => !el == ' ')
  return arr
}

const fs = require('fs')
function getLightsaberScores(){
  let arr = fs.readFileSync('./data/scores.txt').toString().split('\n').filter(el => !el == ' ').map(el => +el)
  return arr
}

function getStats(){
  let padawans = fs.readFileSync('./data/padawans.txt').toString().split('\n').filter(el => !el == ' ')
  let scores = fs.readFileSync('./data/scores.txt').toString().split('\n').filter(el => !el == ' ').map(el => +el)
  let final = padawans.map((el, index) => {
    return [el, scores[index]]
  })
  return final
}


function writeStats() {
  let padawans = fs.readFileSync('./data/padawans.txt').toString().split('\n').filter(el => !el == ' ')
  let scores = fs.readFileSync('./data/scores.txt').toString().split('\n').filter(el => !el == ' ').map(el => +el)
  let final = padawans.map((el, index) => {
    return [el, scores[index]]
  })
  let result = final.map(el => el.join(' ')).join('\n')
  // return result
  fs.writeFileSync(`./data/stats.txt`, `${result}`)
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats
};
