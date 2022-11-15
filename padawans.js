const fs = require('fs')

function getPadawanNames() {
  let list = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n')
  return list.slice(0, -1)
}

function getLightsaberScores(){
  let result = []
  let list = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < list.length; i++){
    result.push(+(list[i]))
  }
  return result
}

function getStats(){
  let scores = getLightsaberScores()
  let padawans = getPadawanNames()
  for ( let i = 0; i < padawans.length; i ++){
  const myFileText = fs.writeFileSync('data/stats.txt', `${padawans[i]}\n`);
  }
  for ( let i = 0; i < scores.length; i ++){
     let fileAppend = fs.appendFileSync('data/stats.txt', `${scores[i]}\n`);
  }
  
}
console.log(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
