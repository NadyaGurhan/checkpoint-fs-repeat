const fs = require('fs');


function getPadawanNames(fileName){
  let text = fs.readFileSync(fileName = './data/padawans.txt','utf8').split('\n');
  text.pop();
  return text
}


function getLightsaberScores(fileName){
  let text = fs.readFileSync(fileName = './data/scores.txt','utf8').split('\n');
  text = text.map(el => +el)
  return text
}

function getStats ( ){
  let score = getLightsaberScores('./data/scores.txt','utf8');
  let padavans = getPadawanNames('./data/padawans.txt','utf8');

  let end = []
  padavans.forEach((el,index)=> end.push([el,score[index]]));
  return end
}
function writeStats(array =[]){
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
