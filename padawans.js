const fs = require('fs')
const path = require('path');

function getPadawanNames() {
  const padavan = fs.readFileSync(path.join(__dirname, 'data/padawans.txt'), 'utf8').split('\n')
  padavan.pop();
  return padavan;
}

function getLightsaberScores() {
  const saber = fs.readFileSync(path.join(__dirname, 'data/scores.txt'), 'utf8').split('\n')
  saber.join(', ');
  let arr = JSON.parse("[" + saber + "]");
  return arr;
}

function getStats() {
  const padavan = fs.readFileSync((__dirname, 'data/padawans.txt'), 'utf8').split('\n');
  const saber = fs.readFileSync(path.join(__dirname, 'data/scores.txt'), 'utf8').split('\n');
  let stats = [];
  for(let i = 0; i < padavan.length; i +=1){
    for(let j=0; j<saber.length; j+=1){
      if(i == j){
        let str = `${padavan[i]}, ${saber[j]}`
        stats.push(str);
      }

    }
  }
  return stats;


}


function writeStats() {
  const stats = fs.readFileSync(path.join(__dirname, 'data/padawans.txt', 'data/scores.txt'), 'utf8').split('\n')
  
  return stats.join(', ');
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
