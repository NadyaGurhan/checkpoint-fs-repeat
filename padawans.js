const fs = require('fs')

function getPadawanNames(){
  let arr = [];
 let name = fs.readFileSync('./data/padawans.txt','utf8')
 for (let i = 0; i< name.length; i+=1){
   arr. push (name[i])
 }
return arr
};

function getLightsaberScores (){
  let arr =[]
  let score = fs.readFileSync('./data/scores.txt','utf8')
  for (let i = 0; i< score.length; i+=1){
    arr. push (score[i])
  }
  return arr;
}







module.exports = {
  getPadawanNames,
  getLightsaberScores,
  
 
};
//  writeStats,getStats,