const fs = require('fs');

function getPadawanNames() {
  const pad = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return pad.split('\n').slice(0, -1);
}



function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf-8');
  const score2 = score.split('\n');
  const res = [];
  for (let i = 0; i < score2.length; i += 1) {
    res.push(+score2[i]);
  }
  return res;
}





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  //getStats,
 // writeStats,
};
