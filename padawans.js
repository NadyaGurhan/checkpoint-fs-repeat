const fs = require('fs')

function getPadawanNames () {
  let arr = fs.readFileSync("data/padawans.txt", "utf8");
  let result = arr.split(', ');
  return result;
};

function getLightsaberScores () {
  let arr = fs.readFileSync("data/scores.txt", "utf8");
  let result = arr.split(', ');
  return result;  
};

function getStats () {
  let result = [];
  let padaw = getPadawanNames ();
  let score = getLightsaberScores ();

  for (let i = 0, i < padaw.length; i++) {
    for (let j = 0, j < score.length; j++) {
      result.push(padaw[i], score[j]);
    }
  }
return result;
};

function writeStats () {
  fs.writeFileSync("data/stats.txt", "utf8");
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,  
};
