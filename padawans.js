const fs = require('fs')

function getPadawanNames(){
  let arr = [];
 let name = fs.readFileSync('./data/padawans.txt','utf8').split('\n')
 for (let i = 0; i< name.length; i+=1){
   arr. push ((name[i]))
 }
return arr
};




function getLightsaberScores (){
  let arr =[]
  let score = fs.readFileSync('./data/scores.txt','utf8').split('\n')
  for (let i = 0; i< score.length; i+=1){
    arr. push (+(score[i]))
  }
  return arr;
}

function getStats(){
  let name = getPadawanNames();
  let score = getLightsaberScores ();
  let arr = []
  for(let i = 0;i< name.length;i+=1){
    arr.push([name[i],score[i]])
  }
  return arr
}

function writeStats(){

  let stats = getStats().join('\n')
   fs.writeFileSync('./data/stats.txt', stats)
}

writeStats()




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats
};
//  writeStats,getStats,