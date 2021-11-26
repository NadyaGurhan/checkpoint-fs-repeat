
const fs = require('fs')



function getPadawanNames () {
  return fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n')
  
}



 function getLightsaberScores () {
  const a =  fs.readFileSync('./data/scores.txt', 'utf8').split('\n')
  return a.map(el => el*1)
  
 }

  function getStats() {
     const padawan = getPadawanNames()
     const scores = getLightsaberScores()
     let result = []
     for(let i = 0; i < padawan.length; i++){
     result.push([padawan[i], scores[i]])
       
     }
     
    return result
  }



function writeStats (data) {
  data = getStats()
  return fs.writeFileSync('./data/stats.txt',data.join('\n').replace(/,/g, ' '));

}







module.exports = {
  getPadawanNames,
  getLightsaberScores,
getStats,
  writeStats,
};

