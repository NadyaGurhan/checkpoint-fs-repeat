const fs = require('fs');
// const { parse } = require('path');


function getPadawanNames () {

  let data1 = fs.readFileSync('data/padawans.txt', 'utf8').trim().split('\n');
  // console.log (data)
  return data1
}
function getLightsaberScores () {
  let data2 = fs.readFileSync('data/scores.txt', 'utf8').trim().split('\n');
  let scores = []
  for (let i = 0; i < data2.length; i++) {
    scores.push(Number(data2[i]));
  }
  // console.log (scores);
  return scores
  }

  function getStats () {
    let names = getPadawanNames()
    let scores = getLightsaberScores()
    
    let stats = []
    for(let i = 0; i < names.length; i++) {
      stats.push(names[i], scores[i])
    }
    
    return stats
  }
  
  
  function writeStats() {
    const result = stats.join('\n');
    const data = result.replace(/[,]/g, ' ');
    fs.writeFileSync('data/stats.txt', data);
  }
  
getPadawanNames()
getLightsaberScores()
getStats()
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
