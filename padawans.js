const fs = require('fs');

const getPadawanNames = () => {
  const filePath = './data/padawans.txt';
  const data = fs.readFileSync(filePath, 'utf8');
  const arr = data.split('\n');
  return arr.slice(0, -1);
};

const getLightsaberScores = () => {
  const filePath = './data/scores.txt';
  const data = fs.readFileSync(filePath, 'utf8');
  const arr = data.split('\n');
  const newArr = arr.map((el) => Number(el));
  return newArr;
};

const getStats = () => {
  const filePathPad = './data/padawans.txt';
  const dataPad = fs.readFileSync(filePathPad, 'utf8')
  const arr = dataPad.split('\n');
  const arrPad = arr.slice(0, -1);
  const filePathSc = './data/scores.txt';
  const dataSc = fs.readFileSync(filePathSc, 'utf8');
  const arr2 = dataSc.split('\n');
  const arrSc = arr2.map((el) => Number(el));
  const arrStats = [];
  for (let i = 0; i < arrPad.length; i += 1) {
    arrStats.push([arrPad[i], arrSc[i]]);
  }
  return arrStats;
};

const stats = getStats();

const writeStats = (stats) => {
  const data = stats.map((el) => el.join(' ')).join('\n');
  const filePath = './data/stats.txt';
  fs.writeFileSync(filePath, data);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
