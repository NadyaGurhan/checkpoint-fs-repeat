const fs = require('fs');

const padawans = (fs.readFileSync('./data/padawans.txt', 'utf8')).trim().split('\n');

console.log(padawans);

const scores = (fs.readFileSync('./data/scores.txt', 'utf8')).trim().split('\n');

const newScores = scores.map(function(a){
  return +a
})

console.log(newScores);

function getPadawanNames()
{
return padawans;
}
function getLightsaberScores(){
return newScores;
}
function getStats(){
  return padawans.map(function(item,index){
    return [item , newScores[index]]
  })
}
function writeStats(file){
  for(item of file){
    fs.appendFileSync('./data/stats.txt',item[0] + ' ' + item[1]+ '\n')
  }
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
