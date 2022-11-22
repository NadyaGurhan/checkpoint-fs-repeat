const fs = require('fs')
module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};


function getPadawanNames(){
  let arr = []
    let names = `"Revan",
    "Bastila Shan",
    "Jolee Bindo",
    "Juhani"`
    
  arr.push(names) 
     return arr
  }
  
  console.log(getPadawanNames())