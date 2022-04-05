const fs = require('fs');
const namesArr = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
const scoresArr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
namesArr.pop();

function getPadawanNames() {

  return namesArr
}

function getLightsaberScores() {
for(let i = 0;i<scoresArr.length;++i){scoresArr[i] = +scoresArr[i]}

  return scoresArr
}

function getStats() {
let scorePad = [];
for(let i = 0;i<namesArr.length;++i){
  scorePad[i] = [namesArr[i],scoresArr[i]]
}
return scorePad


}


function writeStats() {
  let newTxt = getStats()
  fs.writeFileSync('./data/stats.txt', '')
  for(let i = 0;i<newTxt.length;++i){
    if(i<newTxt.length -1)
  fs.appendFileSync('./data/stats.txt', `${newTxt[i][0]} ${newTxt[i][1]}\n`)
  else
  fs.appendFileSync('./data/stats.txt', `${newTxt[i][0]} ${newTxt[i][1]}`)
  }
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

