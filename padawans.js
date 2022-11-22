const { log } = require('console');
const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
   getStats,
  // writeStats,
};

function getPadawanNames() {
  const a = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
 const b = a.slice(0, a.length-1)
 return b
}
function getLightsaberScores() {
  const a = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  const b = a.map(el => Number(el))
  return b
}

function getStats() {
  const a = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
  const b = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')

const func = getLightsaberScores()
const arr = []
for( let i =0 ; i< a.length ; i ++) {
  for (let j = 0; j< func.length ; j ++) {
    const c = a[i] + func[j]
    arr.push(c)
  }
}
console.log(arr);
}




  


// function writeStats() {

// }