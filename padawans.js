const fs = require('fs')
const {EOL} = require('os')
function getPadawanNames(){
  const padawans = fs.readFileSync('./data/padawans.txt','utf-8').trim().split(EOL)
  return padawans
}
function getLightsaberScores(){
  const score =fs.readFileSync('./data/scores.txt','utf-8').split(EOL).map((el)=>+el)
  return score
  
}
function getStats(){
  const padawans =getPadawanNames()
  const score =  getLightsaberScores()
  const stats =[];
  for(let i =0;i<stats.length;i++){
  
  stats.push([padawans[i],score[i]])
  }
    return stats

  }
  function writeStats(stats){
    return fs.writeFileSync('./data/stats.txt',stats.map((el) =>el.join(' ')).join(EOL))


  }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
