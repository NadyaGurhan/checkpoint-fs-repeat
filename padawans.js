const fs = require('fs');

function getPadawanNames() {
  const result = fs.readFileSync('./data/padawans.txt', 'utf-8');

  const result2 = result.split('\n');
  for (let i = 0; i < result2.length; i += 1) {
    if (!result2[i]) {
      result2.pop();
    }
  }
  return result2;
}

function getLightsaberScores() {
  const result = fs.readFileSync('./data/scores.txt', 'utf-8');

  const result2 = result.split('\n');
  for (let i = 0; i < result2.length; i += 1) {
    result2[i] = +result2[i];
    if (!result2[i]) {
      result2.pop();
    }
  }
  return result2;
}

function getStats() {
  const result = fs.readFileSync('./data/padawans.txt', 'utf-8');

  const result2 = result.split('\n');
  for (let i = 0; i < result2.length; i += 1) {
    if (!result2[i]) {
      result2.pop();
    }
  }

  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

  const scores2 = scores.split('\n');
  for (let i = 0; i < scores2.length; i += 1) {
    scores2[i] = +scores2[i];
    if (!scores2[i]) {
      scores2.pop();
    }
  }

  const concat = [];

  for (let i = 0; i < result2.length; i += 1) {
    concat.push(result2[i], scores2[i]);
  }
  return concat;
}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
