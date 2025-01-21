const fs = require('fs');
const { EOL } = require('os');
function getPadawanNames() {
  const padavan = fs.readFileSync('./data/padawans.txt', 'utf8').split(EOL).slice(0, -1);
  return padavan
}
function getLightsaberScores(){
  const result = [];
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL);
  for (let i = 0; i < score.length; i++) {
    score[i] = Number(score[i]);
    result.push(score[i]);
  }
  return result;
}
function getStats (){
    const result = [];
    const sc1 = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL);
    const sc2 = fs.readFileSync('./data/padawans.txt', 'utf-8').split(EOL)
  
    for (let i = 0; i < sc2.length; i++) {
      const arr = [];
      for (let j = 0; j < sc1.length; j++) {
        if (i === j) {
          sc1[j] = Number(sc1[j]);
          arr.push(sc2[i], sc2[j]);
        }
      }
      result.push(arr);
    }
    return result;
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
