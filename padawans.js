const fs = require('fs')


function getPadawanNames() {
  let list = fs.readFileSync('./data/padawans.txt','utf-8') 
  return list.split('\n').filter(el => el !== '')
}

function getLightsaberScores() {

  let list = fs.readFileSync('./data/scores.txt','utf-8') 
  return list.split('\n').filter(el => el !== '').map(el => Number(el))

}

function getStats() {
  const list = getPadawanNames()
  const score = getLightsaberScores()
  const result = []
  for (let i=0;i<list.length;i++){
    result.push([list[i],score[i]])
  }
  return result


}

function writeStats() {
  let data = getStats()
  for (i=0;i<data.length;i++){
    let str = data[i].join(' ') + '\n'
    fs.appendFileSync('data/stats.txt',str)
  }

}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
