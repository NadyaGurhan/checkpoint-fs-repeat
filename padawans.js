const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const arr = [];
  const padavan = fs.readFileSync('data/padawans.txt', 'utf-8');
  const pad = padavan.split('\n');
  for (let i = 0; i < pad.length - 1; i++) {
    arr.push(pad[i]);
  }
  return arr;
}

function getLightsaberScores() {
  const arr = [];
  lightsaberScores = fs.readFileSync('data/scores.txt', 'utf-8');
  const lightsabe = lightsaberScores.split('\n');
  for (let i = 0; i < lightsabe.length; i++) {
    arr.push(+lightsabe[i]);
  }
  return arr;
}

function getStats() {
  const arrPad = [];
  const padavan = fs.readFileSync('data/padawans.txt', 'utf-8');
  const pad = padavan.split('\n');
  for (let i = 0; i < pad.length - 1; i++) {
    arrPad.push(pad[i]);
  }

  const arrScor = [];
  lightsaberScores = fs.readFileSync('data/scores.txt', 'utf-8');
  const lightsabe = lightsaberScores.split('\n');
  for (let i = 0; i < lightsabe.length; i++) {
    arrScor.push(+lightsabe[i]);
  }

  const result = [];
  for (let i = 0; i < arrPad.length; i++) {
    result.push([arrPad[i], arrScor[i]]);
  }
  return result;
}

function writeStats() {
  fs.writeFileSync('data/stats.txt', `${getStats()}`);
}
