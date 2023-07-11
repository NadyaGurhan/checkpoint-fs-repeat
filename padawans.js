const fs = require('fs')

function getPadawanNames () {
  let names = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
  return names;
} 

function getLightsaberScores () {
  let newScores = []
  let scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  for (let i = 0; i < scores.length; i += 1) {
    newScores.push(Number(scores[i]));
  }
  return newScores;
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
