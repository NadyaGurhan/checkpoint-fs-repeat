module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs');

function getPadawanNames() {
  let padawansNames = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\r\n');
  return padawansNames.filter((element) => element.length > 0);
}
// console.log(getPadawanNames());

function getLightsaberScores(){
  let padawansScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  return padawansScores.map((element)=>+element)
}
// console.log(getLightsaberScores())
function getStats(){
  let padawansNames = getPadawanNames()
  let padawansScores = getLightsaberScores()
  let rezStat = []
  for (let i = 0; i < padawansNames.length; i++) {
    rezStat.push([padawansNames[i],padawansScores[i]])
  }
  fs.writeFileSync('./data/stats.txt', rezStat.join(','))
  return rezStat
}
// console.log(getStat());
function writeStats(massivStats){
  let rezString = ''
  for (let i = 0; i < massivStats.length; i++) {
    let promString = [massivStats[i][0],massivStats[i][1]].join(' ')
    rezString +=promString+'\n'
  }
  fs.writeFileSync('./data/stats.txt', rezString.trim())
  return rezString
}
