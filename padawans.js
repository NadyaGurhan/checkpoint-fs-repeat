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
let paddawansList = getPadawanNames();



function getLightsaberScores() {
  const scoresoutpit = fs.readFileSync('./data/scores.txt', 'utf8');
  const scoresArr = scoresoutpit.split('\n'); 
  return scoresArr; 
}

let scoresList = getLightsaberScores(); 


function getStats() {
  let statArr =[]; 
for (let i = 0; i < paddawansList.length; i++) {
  for (let j = 0; j < scoresList; j++) {
    let newArr = [];
    newArr.push(paddawansList[i], Number(scoresList[j]));
    statArr.push(newArr); 
  }
}
return statArr; 
}

let stats = getStats(); 

function writeStats() {
  return fs.writeFileSync('./data/stats.txt', statArr.join('\n'));
}


