const fs = require("fs");

function getPadawanNames(){
  const filePath='data/padawans.txt';
  const names = fs.readFileSync(filePath, "utf8").split("\n");
  names.pop();
  return names;
} 

function getLightsaberScores(){
  const filePath='data/scores.txt';
  const names = fs.readFileSync(filePath, "utf8").split("\n");
  return names.map(item => Number(item))
}
function getStats(){
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const result=[]
    for(let i=0; i<names.length; i++){
      result[i]=names[i]+' ' + scores[i]
    }
    return result
}



const writeStats=1;



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

console.log(getStats())
