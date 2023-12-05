const fs = require('fs')
/*function getPadawanScores() {
   let arr = [];
   let num = require("../data/getPadawanScores");
   return arr.push(num);
}
*/

function getPadawanScores(){
let path = fs.readSync("../data/scores.txt", "utf8").split("\n");
return arr
}
getPadawanScores()


module.exports = getPadawanScores;