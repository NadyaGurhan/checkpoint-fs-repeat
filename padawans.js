const fs = require('fs')

function getPadawanNames(){
  const readFile = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n')
  return readFile;
}
getPadawanNames();


function getLightsaberScores(){
  const readFile = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el)=> +el);
  return readFile

}
getLightsaberScores();

function getStats(){
  let result = []
  const functionPadawans = getPadawanNames();
  const functionScores = getLightsaberScores();

  for (let i = 0; i< functionPadawans.length; i++ ){
    result.push([functionPadawans[i], functionScores[i]])
  }
  return result;
}
// console.log(getStats())

function writeStats(){
  const functionGetStats = getStats();
  const toMethods = functionGetStats.join('\n').replaceAll(',',' ')
  console.log(toMethods)
   fs.writeFileSync('data/stats.txt',toMethods, 'utf8');
  

}
writeStats()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
