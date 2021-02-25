const fs = require('fs');

function getPadawanNames(){
  let fileContent = fs.readFileSync('./data/padawans.txt', 'utf8');
  let splitText = fileContent.trim().split('\n')
  return splitText
}


function getLightsaberScores(){

  return fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n').map(el => +el)

}

function getStats(){
  let pad = getPadawanNames()
  let score = getLightsaberScores()
  return pad.map((el, i) => [el , score[i]])
}


// function writeStats(){
//   let sats = getStats();
//   return fs.writeFileSync("data/stats.txt", sats.map((el)=> el.join(' ')).join('\n'))
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
