const fs = require('fs');
const { EOL } = require('os');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  let fs = require('fs');
  let filePath = './data/padawans.txt';
  let padawans = fs.readFileSync(filePath, 'utf8');
  let newPadawans = padawans.split('\r\n');
  let result = [];
  for (let i = 0; i < newPadawans.length - 1; i++) {
    result.push(newPadawans[i]);
  }
  return result;
}

function getLightsaberScores() {
  let fs = require('fs');
  let filePath = './data/scores.txt';
  let scores = fs.readFileSync(filePath, 'utf8');
  let newScores = scores.split('\r\n');
  let result = [];
  for (let i = 0; i < newScores.length; i++) {
    result.push(Number(newScores[i]));
  }
  return result;
}

function getStats() {
  let padawans = getPadawanNames();
  let scores = getLightsaberScores();
  let result = [];
  let n = 2;
  let newArr = [];
  let newResult;
  for (let i = 0; i < padawans.length; i++) {
    result.push(padawans[i], scores[i]);
    for (let i = 0, e = n; i < result.length; i += n, e += n) {
      newArr.push(result.slice(i, e));
      newResult = newArr.slice(6);
    }
  }
  return newResult;
}

function writeStats(newResult) {
  let filePath = './data/stats.txt';
  fs.writeFileSync(filePath, newResult.join('\r\n') + EOL);
}
