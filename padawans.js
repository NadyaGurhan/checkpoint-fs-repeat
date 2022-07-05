const fs = require('fs')


function getPadawanNames() {
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let split = padawans.split('\n')
  // console.log(split)
  return split
}

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8')
  let split = scores.split('\n')
  let res = []
  for(let i = 0; i < split.length; i++) {
    res.push(Number(split[i]))
  }
  console.log('---------------------', res)
  return res
}

//Не доделал
function getStats() {
  let newArr = []
  //Получаю результат отработки предыдущих функций, чтобы не писать методы снова
  let names = getPadawanNames()
  let scores = getLightsaberScores()
  let result = []
  for (let i = 0; i < 4; i++) {
    newArr.push(names[i])
    newArr.push(scores[i])
  }
    for (let j = 0; j < newArr.length; j++) {
      result.push(newArr[j].split('\n'))
    }
   console.log(result)
}





// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   // writeStats,
// };

