const fs = require("fs");

function getPadawanNames() {
  let padawan = fs.readFileSync('./data/padawans.txt', 'utf8').trim();
  return padawan.split("\n");
}


function getLightsaberScores() {
  let score = fs.readFileSync('./data/scores.txt', 'utf-8').trim();
  let score1 = score.split('\n');
  let arr = [];
  let scr;
  for (let i = 0; i < score1.length; i++) {
    scr = score1[i];
    scr = + scr;
    arr.push(scr);
  }
  return arr;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  //getStats,
  //writeStats,
};
