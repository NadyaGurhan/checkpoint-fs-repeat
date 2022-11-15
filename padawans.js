const fs = require('fs')

function getPadawanNames(){
   const fileContent = fs.readFileSync(`data/padawans.txt`, "utf-8");
   console.log(fileContent);
   return fileContent;
};
function getPadawanScores(){
   const fileContentScores = fs.readFileSync(`data/scores.txt`, "utf-8");
   return fileContentScores;
}

const padavanNames = getPadawanNames();
const padavanScores = getPadawanScores();

function getStats(){
   let arr[];
   for ( let i = 0; i < padavanNames.length; i++){
      arr.push(padavanNames[i] + padavanScores[i])
    
   };
   console.log(arr);
   return arr;
};
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
