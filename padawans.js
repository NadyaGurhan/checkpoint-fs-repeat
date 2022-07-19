const fs = require('fs')
function getPadawanNames() {
  let str = fs.readFileSync('./data/padawans.txt', 'utf8');
  let arr = str.split('\n');
  arr.pop()
  return(arr)
}

function getLightsaberScores() {
  let str = fs.readFileSync('./data/scores.txt', 'utf8');
  let arr = str.split('\n');
  let arr2 = []
  for(let i = 0; i < arr.length; i += 1) {
    arr2.push(Number(arr[i]))
  }
  return(arr2)
}

function getStats() {
  let str = fs.readFileSync('./data/scores.txt', 'utf8');
  let arr = str.split('\n');
  let str2 = fs.readFileSync('./data/padawans.txt', 'utf8');
  let arr2 = str2.split('\n');
  arr2.pop()
  let arr3 = []
  let arr4 = []
  for(let i = 0; i < arr.length; i += 1) {
    arr3.push(arr2[i], Number(arr[i]))
    arr4.push(arr3)
    arr3 = []
  }
  return(arr4)
}

function writeStats() {
  let arr2 = []
  let arr = getStats()
  let arr3 = []
  let str = ''
  for(let i = 0; i < arr.length; i += 1) {
    for(let j = 0; j < arr[i].length; j += 1) {
      let y = arr[i]
      if ((j + 1) >= arr[i].length) {
        str += ' '
      }
      str += y[j]
    }
    arr3.push(str)
    str = '' 

  }
  for(let i = 0; i < arr.length; i += 1) {
    fs.appendFileSync('./data/stats.txt', `${arr3[i]}\n`);
  }
}
console.log(writeStats())

// ('Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
