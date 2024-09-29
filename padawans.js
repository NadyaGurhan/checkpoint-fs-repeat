const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};




const padawanList = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scList = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames(){
  const padArray = padawanList.split('\n');
  const padArrayDel = padArray.slice(0, padArray.length - 1);
  const padArrayTr =  padArrayDel.map(el => el.trimEnd())
  return padArrayTr;
}




function getLightsaberScores() {

const scoreArr = scList.split('\n')

return scoreArr.map(el => Number(el))
}

function writeStats() {
  const result = []
  const padArray = padawanList.split('\n');
  const padArrayDel = padArray.slice(0, padArray.length - 1);
  const padArrayTr = padArrayDel.map(el => el.trimEnd())

  const scoreArr = scList.split('\n')

const scores = scoreArr.map(el => Number(el))

for (let i = 0; i < scores.length; i++) {
  result[i] = ([padArrayTr[i], scores[i]])
}
const padStatsComma = result.map(el => el[0]+ ' ' + el[1]);
  fs.writeFileSync(`./data/stats.txt`, padStatsComma.join('\n'));
}

function getStats() {
  const result = []
  const padArray = padawanList.split('\n');
  const padArrayDel = padArray.slice(0, padArray.length - 1);
  const padArrayTr =  padArrayDel.map(el => el.trimEnd())

  const scoreArr = scList.split('\n')

const scores = scoreArr.map(el => Number(el))

for (let i = 0; i < scores.length; i++) {
  result[i] = ([padArrayTr[i], scores[i]])
}

return result
}
