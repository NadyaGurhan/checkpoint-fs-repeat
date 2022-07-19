const fs = require('fs');

const getPadawanNames = () => {
  const people = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawansNames = people.split('\n');
  return padawansNames;
};

const getLightsaberScores = () => {
  const sabers = fs.readFileSync('./data/scores.txt', 'utf8');
  const lightsaberScores = sabers.split('\n');
  return lightsaberScores;
};

const getStats = () => {
  const padawansArray = getPadawanNames();
  const sabresArray = getLightsaberScores();
  const matrix = [,];
  for (let i = 0; i < padawansArray.length; i++) {
    matrix[i, 0] = padawansArray[i];
  }
  for (let j = 0; j < padawansArray.length; j++) {
    matrix[j, 1] = sabresArray[j];
  }
  return matrix;
};

const writeStats = () => {
  const matrixJ = getStats();
  for (let index = 0; index < 3; index += 1) {
    fullName = `${matrix[index, index]}`;
    fs.appendFileSync('./data/stats.txt', `${fullName}\n`);
  }
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
