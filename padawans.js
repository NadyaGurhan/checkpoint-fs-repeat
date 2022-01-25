const fs = require('fs');
let fileContent1 = fs.readFileSync('./data/padawans.txt', 'utf8');
let fileContent2 = fs.readFileSync('./data/scores.txt', 'utf8');

let padawan = fileContent1.split("\n");
let score = fileContent2.split("\n");

function getPadawanNames() {
  let padawanNames = [];
  for (let i = 0; i<padawan.length-1; i++) {
    padawanNames.push(padawan[i])
  }
  return padawanNames;
}

function getLightsaberScores() {
  let scoresArr = [];
  for (let i = 0; i<score.length; i++) {
    scoresArr.push(Number(score[i]))
  }
  return scoresArr;
}

function getStats() {
  let result = [];
  for (let i = 0; i<padawan.length-1; i++) {
    let element = [];
    element.push(padawan[i]);
    element.push(Number(score[i]))
    result.push(element);
  }
return result;

}

function writeStats() {
  let stats = fs.writeFileSync('data/stats.txt', (getStats()).join("\n").split(',').join(' '));

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
