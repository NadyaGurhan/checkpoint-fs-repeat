const fs = require('fs')

function getPadawanNames () {
  let names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  // for(i = 0; i < names.length; i += 1) {
  //   printNames.push(names[i]);
  // }
  return names;
} 

function getLightsaberScores () {
  let scores = fs.readFileSync('./data/scores.txt', 'utf8').split();
  // for (i = 0; i < scores.length; i += 1) {
  //   printScores.push(scores);
  // }
  return scores;
}

function getStats () {

}

function writeStats () {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
