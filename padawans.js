const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, 4);
  return names;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const arrayOfScore = [];
  for (let i = 0; i < scores.length; i += 1) {
    arrayOfScore.push(Number(scores[i]));
  }
  return arrayOfScore;
}

function getStats() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, 4);
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const result = [];
  for (let i = 0; i < names.length; i += 1) {
    const tempArr = [];
    tempArr.push(names[i], +scores[i]);
    result.push(tempArr);
  }
  return result;
}

function writeStats() {
  const wholeArr = getStats().join("\n").replace(/,/g, " ");
  return fs.writeFileSync("data/stats.txt", wholeArr, "utf-8");
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
