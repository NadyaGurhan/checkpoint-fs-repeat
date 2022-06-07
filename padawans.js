const fs = require('fs');

function getPadawanNames() {
  //let crew = fs.readFileSync('./src/crew.txt', 'utf8').split('\n')
  let names = fs.readFileSync('./data/padawans.txt').toString().trim().split('\n')
  return names
}


function getLightsaberScores() {

  let num = fs.readFileSync('./data/scores.txt').toString().trim().split('\n')
  let arr = num.map(el => +el)
  return arr
}

function getStats() {
  let arr = []
  let names = fs.readFileSync('./data/padawans.txt').toString().trim().split('\n')
  let num = fs.readFileSync('./data/scores.txt').toString().trim().split('\n')
  let num2 = num.map(el => +el)

  for (let i = 0; i < num2.length; i++) {
    arr.push([names[i], num2[i]])
  }
  console.log(arr);
  return arr
}


let arr = getStats();
function writeStats(getStats) {
  let stat = fs.appendFileSync('./data/stats.txt', arr.join('\n').replace(/,/ig, ' ').trim())
  return stat

}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
