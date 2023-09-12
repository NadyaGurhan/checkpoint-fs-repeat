const fs = require('fs')

function getPadawanNames(){
    let a = fs.readFileSync('./data/padawans.txt', 'utf8').toString()
    a=a.split('\n')
    a=a.toString().replace(/\r/g, '')
    a=a.split(',')
    console.log(a)
        return a
        
}


function getLightsaberScores(){
  let a1 = fs.readFileSync('./data/scores.txt', 'utf8').toString()
  a1=a1.split('\n')
    a1=a1.toString().replace(/\r/g, '')
    a1=a1.split(',')
    for(let i=0; i<a1.length;i++){
      a1[i]=parseFloat(a1[i])
    }
    console.log(a1)
  return a1
}

function getStats(){
  getLightsaberScores()
  getPadawanNames()
  let pad = a
  let scor = a1;
      for(let i=0; i<pad.length; i++){
         pad[i].push(scor[i])
      }
      console.log(pad)
      return pad
}

function writeStats(){
   getStats()
   fs.writeFileSync("./data/stats.txt", pad.join('\n'))
}







module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

