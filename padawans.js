const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt','utf-8');

function getPadawanNames(){
  let names = padawans.split('\n');
  names.pop()
  return names
}

function getLightsaberScores(){
  let score = scores.split('\n');
  score.push();

  return score.map((el) => Number(el))

}

function getStats(){
  const newArr = [];
  const pad = getPadawanNames();
  const score = getLightsaberScores();
  for(let i = 0;i<pad.length;i++){
    let newArrStat = [];
    newArrStat.push(pad[i], score[i])
    newArr.push(newArrStat);
  }
  return newArr
}

function writeStats(){
  const info = getStats();

  const newInfo = info.map((el)=> el.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', `${newInfo}`)

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
