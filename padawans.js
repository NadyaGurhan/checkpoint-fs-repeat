const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames() {
  const padawansoutpit = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawanarr = padawansoutpit.split('\n');  
  return padawanarr; 

}

function getLightsaberScores() {
  const scoresoutpit = fs.readFileSync('./data/scores.txt', 'utf8');
  const scoresArr = scoresoutpit.split('\n').map((el) => +el); 
  return scoresArr; 
}


function getStats() {
  const paddawansList = getPadawanNames();
  let scoresList = getLightsaberScores();
 let statArr = []; 
for (let i = 0; i < paddawansList.length; i++) {
    let newArr = [paddawansList[i], scoresList[i]];
    statArr.push(newArr); 
}
return statArr; 
}

// let stats = getStats(); 
// console.log(stats);

function writeStats(el) {
  const mewel = el.map((i) => i.join(' '))
  return fs.writeFileSync('./data/stats.txt', mewel.join('\n'));
}
