const fs = require('fs');


function getPadawanNames(err,data){
   const name = fs.readFile(`./data/padawans.txt`, 'utf-8',(err,data) => {
    if (err) console.error(err)
    console.log(data)
    if(data){
    let padaArr = name;
    return padaArr.split(" ")
    }
  })
}
getPadawanNames();

function getLightsaberScores(){
  // let padaScores = fs.readFile(`./data/scores.txt`, 'utf-8',() => {
  // let scoresArr = padaScores.split("\n ");
  // return scoresArr 
// })
}
 function getStats(){

 }
 function  writeStats(){

 }











module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
