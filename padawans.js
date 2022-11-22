const { Certificate } = require('crypto');
const fs = require('fs');
const { join } = require('path');

function getPadawanNames(){
const getName = fs.readFileSync('./data/padawans.txt', 'utf-8')
return getName.trim().split('\n')

}

function getLightsaberScores(){
 return fs.readFileSync('./data/scores.txt', 'utf-8')
 .split('\n')
 .map((el)=> Number(el))
}
function getStats(){
  const name = getPadawanNames()
  const score = getLightsaberScores()
  return name.map((el, index)=> [el, score[index]])
}
function writeStats(){
  let creatFile = fs.writeFileSync('./data/stats.txt', getStats().join('\n').replace(/,/g, ' '))
 return creatFile
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
