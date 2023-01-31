const fs = require('fs')

const getPadawanNames =() =>{
  let str = fs.readFileSync('./data/padawans.txt','utf-8').split('\n')
  return str.slice(0,str.length -1)
} 
 


const getLightsaberScores = ()=>{
  let scr= fs.readFileSync('./data/scores.txt','utf-8').split('\n').map((el)=>+el)
  
  return scr
}





 const getStats =() => {
  let arr = []
  for (let i = 0; i < getPadawanNames().length; i++) {
    arr.push([getPadawanNames()[i],getLightsaberScores()[i]])
    
  }return arr
 }

const writeStats = () => {
    fs.writeFileSync('./data/stats.txt',`${getStats()}`)
    
}

console.log(writeStats());



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

