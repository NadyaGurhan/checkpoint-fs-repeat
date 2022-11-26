const fs = require('fs')

 module.exports = {
   getPadawanNames,
   getLightsaberScores,
   getStats,
   writeStats,
 };

 
 function getPadawanNames(){
  let names = fs.readFileSync('./data/padawans.txt','utf-8')
  let result = names.split('\n').slice(0,-1)
  return result
    }
    console.log(getPadawanNames())
 
 
 
   function  getLightsaberScores(){
    let score = fs.readFileSync('./data/scores.txt','utf-8' )
    const scoresNum = score.split('\n').map((el)=> +el);
    return scoresNum;
   }
console.log(getLightsaberScores())

function getStats(){
  
  let score = getLightsaberScores()
  let names = getPadawanNames()
  let resultAll= []
  let result1= [].concat(names[0], score[0])
  let result2= [].concat(names[1], score[1]) 
  let result3= [].concat(names[2], score[2])
  let result4= [].concat(names[3], score[3])
resultAll.push(result1, result2,result3,result4)
return resultAll
}
console.log(getStats())

function writeStats(){
    const results = getStats();
    const res = results.map((el) => el.join(' '));
  
    return fs.writeFileSync('./data/stats.txt', res.join('\n'));
  }
   
    console.log(writeStats())