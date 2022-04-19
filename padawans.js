 
 const fs = require('fs')

 function getPadawanNames() {
   const getName = fs.readFileSync("data/padawans.txt", "utf8"); 
  let arr = []
  arr.push(getName.split(''))
  
   return arr

 }





module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

