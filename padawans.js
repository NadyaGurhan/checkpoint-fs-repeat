const fs = require("fs");
let padawan = fs.readFileSync("./data/padawans.txt", "utf8");
let scorese = fs.readFileSync("./data/scores.txt", "utf8");

function getPadawanNames () {
return padawan.trim().split('\n')
}
getPadawanNames()


function getLightsaberScores() {
 let mass =  scorese.split('\n');
 let xxx = mass.map(Number)
 return xxx
}
getLightsaberScores()

function getStats () {
   let res = []
   let newPad = padawan.trim().split('\n')
   let newScore = scorese.split('\n');
   for (let i = 0; i < newPad.length; i++) {
      res.push(newPad[i] + ", " + newScore[i])
      
   }
   console.log(res[0])
   return res
}
getStats()





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
//   writeStats,
};
