const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const padawansList = padawans.split('\n');

const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
const scoresList = scores.split('\n');

const removeEmptyElem = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '') {
      arr.splice(i, 1);
    }
  }
};

const getPadawanNames = () => {
  removeEmptyElem(padawansList);

  return padawansList;
};

const getLightsaberScores = () => {
  for (let i = 0; i < scoresList.length; i += 1) {
    scoresList[i] = +scoresList[i];
  }
  return scoresList;
};

const getStats = () => {
  const stats = [];
  removeEmptyElem(padawansList);
  for (let i = 0; i < padawansList.length; i += 1) {
    stats[i] = [padawansList[i], +scoresList[i]];
  }

  return stats;
};

const writeStats = () => {
  removeEmptyElem(padawansList);
  fs.writeFileSync('./data/stats.txt', '');
  for (let i = 0; i < padawansList.length; i += 1) {
    if (i < padawansList.length - 1) {
      fs.appendFileSync(
        './data/stats.txt',
        `${padawansList[i]} ${scoresList[i]}\n`
      );
    } else {
      fs.appendFileSync(
        './data/stats.txt',
        `${padawansList[i]} ${scoresList[i]}`
      );
    }
  }
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

console.log(writeStats());
