const fs = require('fs')


function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let str = ''
    for (let i = 0; i < padawans.length; i++) {
      str += padawans[i]
    }
    return str.trim().split('\r\n')
}

function getLightsaberScores() {
    const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
    let str = ''
    for (let i = 0; i < scores.length; i++) {
      str += scores[i]
    }
    let newStr = str.split('\r\n')
    let newArr = newStr.map((el) => Number(el))
    return newArr
}

// function getStats() {
//   const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
//   const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
//   const result = []
  
//   return padawans.map((el) => result.push(el))
// }



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
