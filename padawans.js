const fs = require('fs');

const getPadawanNames = () => {
  const readFilePadawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim();
  return readFilePadawans.split(/\n/);
};

const getLightsaberScores = () => {
  const readFileScores = fs.readFileSync('./data/scores.txt', 'utf-8').trim();
  const getScores = readFileScores.split(/\n/);
  return getScores.map((score) => +score);
};

const getStats = () => {
  const arrayFilePadawans = getPadawanNames();
  const readFileScores = getLightsaberScores();
  const result = arrayFilePadawans.map((padawan, index) => [padawan, readFileScores[index]]);
  return result;
};

const writeStats = () => {
  const data = getStats();
  const resultArray = data.map((elem) => elem.join(' '));
  resultArray.forEach((elem, index) => {
    if (index < resultArray.length - 1) {
      fs.appendFileSync('data/stats.txt', `${elem}\n`);
    } else {
      fs.appendFileSync('data/stats.txt', `${elem}`);
    }
  });
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
