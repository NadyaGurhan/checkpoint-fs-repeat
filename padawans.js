const fs = require('fs')


function  getPadawanNames(){
const read = fs.readFileSync('./data/padawans.txt','utf-8').toString().trim()
return read.split('\n')

}

  
function getLightsaberScores(){
  const reading = fs.readFileSync('./data/scores.txt','utf-8').toString().trim().split('\n')
  return reading.map(el=> +el)
}

  
  function getStats(){
    const readname =  fs.readFileSync('./data/padawans.txt','utf-8').toString().trim().split('\n')
    const readscore = fs.readFileSync('./data/scores.txt','utf-8').toString().trim().split('\n').map(el=> +el)
    const concat = readname.concat(readscore)
    return concat
  }
   console.log(getStats())


  



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
