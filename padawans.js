
const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n')


function getPadawanNames() {
  //padawans.splice(4)
  return padawans

}

function getLightsaberScores() {
  //arrSxores = []
 // console.log(scores)
  // for(let i = 0; i < scores.length; i++) {
  //   arrSxores.push(Number(scores[i]))
  // }
  let newArr = scores.map((el) =>  Number(el))
  return newArr
}
function getStats () {
  // let newArr = []
  // for(let i = 0; i < padawans.length; i++) {
  //   newArr.push([padawans[i], Number(scores[i])])
  // }
  // return newArr
  let result = padawans.reduce((acc, el, index) => {
    acc.push([el, Number(scores[index])])
    return acc
  } ,[] )
  return result
}

function writeStats () {
 // return newArr
  let result = padawans.reduce((acc, el, index) => {
  acc.push([el, scores[index]])
  return acc
} ,[] )
  let data = result.join('\n').replace(/\,/g, ' ')
  console.log(data)
  fs.writeFileSync('./data/stats.txt', data, () => console.log('file saved') )
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
