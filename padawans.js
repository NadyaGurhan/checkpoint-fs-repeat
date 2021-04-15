



const fs = require ('fs');



function getPadawanNames(filename )
{
  
  
let padArr= fs.readFileSync(filename= './data/padawans.txt', 'utf8').trim().split('\n');
 return padArr;

  
}




function getLightsaberScores(filename )
{
 
  getLight = fs.readFileSync(filename= './data/scores.txt' , 'utf-8').split('\n');
  return getLight.map((elem) => +elem); 


}
console.log(getLightsaberScores());

function getStats()
  {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  return names.map((elem,i) => ([elem, scores[i]]));

}
function writeStats(array){
 array = array.join('\n').split(',').join(' ');

 fs.writeFileSync('data/stats.txt', array);
 
}

console.log(writeStats(getStats()));
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
